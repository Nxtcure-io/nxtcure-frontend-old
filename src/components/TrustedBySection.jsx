import harvardLogo from "../assets/harvard.png";
import yaleLogo from "../assets/Yale_University_logo.png";
import hipaaBadge from "../assets/hipaa-compliant.png";
import schwarzman from "../assets/sc.png";
import broad from "../assets/broad.png";
import forbes from "../assets/forbes.png";

export default function TrustedBySection() {
  return (
    <section className="py-20 bg-white text-center">
      <h3 className="text-3xl font-bold mb-10 text-gray-700">Trusted By</h3>
      <div className="flex flex-wrap justify-center items-center gap-12">
        <img
          src={harvardLogo}
          alt="Harvard Logo"
          className="h-9 w-9"
          style={{ height: "4rem", width: "4rem" }}
        />
        <img src={yaleLogo} alt="Yale Logo" className="h-9" />
        <img src={schwarzman} alt="Yale Logo" className="h-10" />
        <img src={broad} alt="Yale Logo" className="h-9" />
        <img src={forbes} alt="Yale Logo" className="h-7" />
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
