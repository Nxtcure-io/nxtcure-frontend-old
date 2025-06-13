from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import numpy as np
from sentence_transformers import SentenceTransformer, util
import torch
from fastapi.middleware.cors import CORSMiddleware

# Setup CORS for React frontend
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to ["http://localhost:3000"] in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load SentenceTransformer model (much simpler and more reliable)
print("Loading SentenceTransformer model...")
model = SentenceTransformer('all-MiniLM-L6-v2')

# Load clinical trials data
print("Loading clinical trials data...")
df = pd.read_csv("heart_disease_trials.csv")

# Combine relevant text fields for embedding
df["full_text"] = (
    df["Condition"].fillna('') + " " +
    df["BriefSummary"].fillna('') + " " +
    df["InclusionCriteria"].fillna('') + " " +
    df["ExclusionCriteria"].fillna('')
)

# Compute and store embeddings for all trials
print("Computing embeddings for clinical trials...")
embeddings = model.encode(df["full_text"].tolist(), convert_to_tensor=True)
df["embedding"] = [emb.cpu().numpy() for emb in embeddings]

print("Backend ready!")

# Request format
class PatientRequest(BaseModel):
    description: str

@app.post("/match")
def match_trials(request: PatientRequest):
    try:
        if not request.description.strip():
            return {"error": "Empty description provided"}

        patient_description = request.description
        
        # Encode patient description
        patient_embedding = model.encode(patient_description, convert_to_tensor=True).cpu()

        # Convert stored NumPy embeddings back to torch tensors for comparison
        trial_embeddings = torch.stack([torch.tensor(emb) for emb in df["embedding"]]).cpu()

        # Compute cosine similarity
        cosine_scores = util.pytorch_cos_sim(patient_embedding, trial_embeddings)[0]

        # Get top 5 matches
        top_k = 5
        top_results = torch.topk(cosine_scores, k=top_k)

        matches = []
        for score, idx in zip(top_results.values, top_results.indices):
            idx = int(idx)
            trial = df.iloc[idx]
            
            matches.append({
                "nct_id": trial["NCTId"],
                "title": trial["BriefTitle"],
                "similarity": float(score.item()),
                "condition": trial["Condition"],
                "summary": trial["BriefSummary"],
                "inclusion": trial["InclusionCriteria"],
                "exclusion": trial["ExclusionCriteria"],
                "country": trial["LocationCountry"]
            })

        return {"matches": matches}
    
    except Exception as e:
        print(f"Error in match_trials: {str(e)}")
        return {"error": f"Server error: {str(e)}"}

@app.get("/")
def read_root():
    return {"message": "Clinical Trials Matching API is running!", "status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
