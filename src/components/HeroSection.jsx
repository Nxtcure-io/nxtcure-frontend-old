export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 py-6 text-center bg-gradient-to-b from-[#f7f2fd] to-white">
      <div className="max-w-3xl">
        <h1
          className="font-bold leading-tight mb-4 mt-20"
          style={{ fontSize: "64px" }}
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
            Connect to Clinical Trials
          </span>
        </h1>
        <p className=" text-gray-600 mb-6" style={{ fontSize: "24px" }}>
          For Patients, Researchers, Doctors
        </p>
        <p className="text-md text-gray-500 mb-8" style={{ fontSize: "20px" }}>
          You’re searching for answers—new treatments, better trials, or the
          right therapy. Next Cure makes that journey simple, connecting you to
          life-changing clinical trials and healthcare solutions with AI-driven
          precision.
        </p>
        <button
          className="bg-sky-400 hover:bg-sky-500 text-white font-semibold px-8 py-4 text-lg rounded-2xl shadow-md transition-all duration-300"
          style={{ fontSize: "24px" }}
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
