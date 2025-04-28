import doctorLogo from "../assets/doctor.png";
import patientLogo from "../assets/patient.png";
import researcherLogo from "../assets/researcher.png";

export default function NxtCureSection() {
  return (
    <section className="py-20 bg-white text-center">
      <h2
        className="text-3xl font-bold mb-1 text-purple-600"
        style={{ fontSize: "64px" }}
      >
        NxtCure
      </h2>
      <p className="text-gray-600 mb-4">Your Path to Hope and Healing</p>

      <p className="max-w-3xl mx-auto text-gray-400 mb-12">
        At Next Cure, we believe everyone deserves access to cutting-edge
        healthcare. Our AI-powered platform transforms the trial process, making
        it accessible, trusted, and innovative for you:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Patients Section */}
        <div className="p-6 bg-purple-50 rounded-lg text-left">
          <div className="mb-4">
            <i className="fas fa-user-nurse text-4xl text-purple-600"></i>
          </div>
          <div className="mb-4">
            <img
              src={patientLogo}
              alt="Logo"
              className="w-12 h-12 object-contain"
            />
          </div>
          <h4 className="font-semibold mb-2">Patients</h4>
          <p className="text-gray-500 text-sm">
            Living with a condition and seeking hope? Our free Clinical Trial
            Matching tool connects you to trials that fit your health profile.
          </p>
        </div>

        {/* Researchers Section */}
        <div className="p-6 bg-purple-50 rounded-lg text-left">
          <div className="mb-4">
            <i className="fas fa-flask text-4xl text-purple-600"></i>
          </div>
          <div className="mb-4">
            <img
              src={researcherLogo}
              alt="Logo"
              className="w-12 h-12 object-contain"
            />
          </div>
          <h4 className="font-semibold mb-2">Researchers</h4>
          <p className="text-gray-500 text-sm">
            Struggling with overly restrictive trial criteria? Our Clinical
            Trial Accessibility Rater evaluates your protocols and helps
            optimize enrollment.
          </p>
        </div>

        {/* Doctors Section */}
        <div className="p-6 bg-purple-50 rounded-lg text-left">
          <div className="mb-4">
            <i className="fas fa-user-nurse text-4xl text-purple-600"></i>
          </div>
          <div className="mb-4">
            <img
              src={doctorLogo}
              alt="Logo"
              className="w-12 h-12 object-contain"
            />
          </div>
          <h4 className="font-semibold mb-2">Doctors</h4>
          <p className="text-gray-500 text-sm">
            Keep up with the latest therapies using our FDA Treatment Dashboard
            — explore ongoing trials all in one place.
          </p>
        </div>
      </div>
    </section>
  );
}
