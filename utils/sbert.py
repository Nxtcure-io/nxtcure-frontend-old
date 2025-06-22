from pydantic import BaseModel
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import requests

# Global variables for data and vectorizer
df = None
vectorizer = None
trial_vectors = None

def load_and_process_data():
    """Load clinical trials data and prepare text embeddings"""
    global df, vectorizer, trial_vectors
    
    try:
        #df = pd.read_csv("heart_disease_trials.csv")
        df = pd.read_csv("https://github.com/Nxtcure-io/nxtcure-frontend/raw/refs/heads/main/backend/heart_disease_trials.csv")
        
        # Combine relevant text fields for matching
        df["full_text"] = (
            df["Condition"].fillna('') + " " +
            df["BriefSummary"].fillna('') + " " +
            df["InclusionCriteria"].fillna('') + " " +
            df["ExclusionCriteria"].fillna('')
        )
        
        # Use TF-IDF instead of SentenceTransformers for stability
        vectorizer = TfidfVectorizer(
            max_features=5000,
            stop_words='english',
            ngram_range=(1, 2),
            min_df=1,
            max_df=0.95
        )
        
        trial_vectors = vectorizer.fit_transform(df["full_text"])
        
    except Exception as e:
        import traceback
        traceback.print_exc()

# Load data on startup

# Request format
class PatientRequest(BaseModel):
    description: str

def match_trials(request: PatientRequest):
    global df, vectorizer, trial_vectors
    
    try:
        
        if not request.description.strip():
            return {"error": "Empty description provided"}
        
        if df is None or vectorizer is None or trial_vectors is None:
            return {"error": "Backend not properly initialized"}

        patient_description = request.description
        
        # Convert patient description to vector
        patient_vector = vectorizer.transform([patient_description])
        
        # Compute cosine similarity
        similarities = cosine_similarity(patient_vector, trial_vectors)[0]
        
        # Get top 5 matches
        top_k = 5
        top_indices = similarities.argsort()[::-1][:top_k]
        
        matches = []
        for idx in top_indices:
            trial = df.iloc[idx]
            similarity_score = float(similarities[idx])
            
            matches.append({
                "nct_id": trial["NCTId"],
                "title": trial["BriefTitle"],
                "similarity": similarity_score,
                "condition": trial["Condition"],
                "summary": trial["BriefSummary"],
                "inclusion": trial["InclusionCriteria"],
                "exclusion": trial["ExclusionCriteria"],
                "country": trial["LocationCountry"]
            })

        return {"matches": matches}
    
    except Exception as e:
        import traceback
        return {"error": f"Server error: {str(e)}"}

def read_root():
    return {"message": "Clinical Trials Matching API is running!", "status": "healthy"}

def get_stats():
    """Get statistics about the loaded data"""
    global df
    if df is not None:
        return {
            "total_trials": len(df),
            "conditions": df["Condition"].value_counts().head(10).to_dict(),
            "countries": df["LocationCountry"].value_counts().head(10).to_dict(),
            "status": "Data loaded successfully"
        }
    else:
        return {"error": "No data loaded"}

if __name__ == "__main__":
    load_and_process_data()
