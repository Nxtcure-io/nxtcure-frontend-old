import harvardLogo from "../assets/harvard.png";
import yaleLogo from "../assets/Yale_University_logo.png";
import hipaaBadge from "../assets/hipaa-compliant.png";

export default function TrustedBySection() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h3 className="text-4xl font-bold mb-20 text-gray-700">Trusted By</h3>
      <div className="flex flex-wrap justify-center items-center gap-12">
        <img
          src={harvardLogo}
          alt="Harvard Logo"
          className="h-24 w-24"
          style={{ height: "7rem", width: "7rem" }}
        />
        <img src={yaleLogo} alt="Yale Logo" className="h-16" />
      </div>

      <p className="text-gray-500 mt-10 font-medium">HIPAA Compliant</p>
      <p className="text-sm text-gray-400 mb-6">
        Secure, and built for you because your health journey matters
      </p>

      <div className="flex justify-center">
        <img
          src={hipaaBadge}
          alt="HIPAA Compliant Badge"
          className="h-20"
          style={{ height: "8rem", width: "15rem" }}
        />
      </div>
    </section>
  );
}
