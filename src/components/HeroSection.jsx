import yale from "../assets/Yale_University_logo.png";
import harvard from "../assets/harvard-university.png";
import schwarzman from "../assets/sc.png";
import broad from "../assets/broad.png";
import forbes from "../assets/forbes.png";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 py-6 text-center bg-[radial-gradient(circle_at_center,_#F1E2FE_10%,_#F3ECFF_30%,_#EEF7FF_80%)]">
      <div className="max-w-3xl">
        <h1
          className="font-bold leading-tight mt-35"
          style={{ fontSize: "4.5rem" }}
        >
          <span className="cormorant text-black bg-clip-text">
            Connect to Clinical Trials
          </span>
        </h1>
        <p
          className="cormorant text-gray-600 mb-6"
          style={{
            fontSize: "1.4rem",
            marginTop: "-12px",
            fontStyle: "italic",
          }}
        >
          For Patients, Researchers, Doctors
        </p>
        <p
          className="text-md text-gray-500 mb-8"
          style={{ fontSize: "1.2rem" }}
        >
          Your healing journey, guided with care and precision. At NxtCure, we
          make finding the right care feel less overwhelming.
        </p>
        <button
          className="bg-blue-500 button_hvr text-white px-5 py-3 text-lg rounded-full shadow-md transition-all duration-300 mb-18"
          style={{ fontSize: "1rem", cursor: "pointer", fontWeight: "500" }}
        >
          Get Started
        </button>

        <h3 className="expert-tab text-gray-500 text-sm font-medium mb-15">
          Built by Experts
        </h3>
        <div className="flex justify-center items-center flex-wrap gap-15 px-4 mt-5">
          <img src={yale} alt="Yale" className="h-7 object-contain" />
          <img src={harvard} alt="Harvard" className="h-8 object-contain" />
          <img
            src={schwarzman}
            alt="Schwarzman Scholars"
            className="h-9 object-contain"
          />
          <img
            src={broad}
            alt="Broad Institute"
            className="h-7 object-contain"
          />
          <img src={forbes} alt="Forbes" className="h-6 object-contain" />
        </div>
      </div>
    </section>
  );
}
