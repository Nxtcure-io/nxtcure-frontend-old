import appStoreLogo from "../assets/apple-store.png";
import googleStoreLogo from "../assets/play-store.png";
import NxtCureLogo from "../assets/nxtcure_logo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-white text-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        {/* Left Column - Logo & Buttons at Bottom */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <img src={NxtCureLogo} alt="NxtCure Logo" className="h-10 mb-4" />
          </div>
          <div className="mt-8 space-y-2">
            <a
              href="#"
              className="store-hvr flex items-center bg-white text-black font-semibold px-3 py-1 rounded-lg text-xs w-39 transition border border-gray-500"
              style={{ boxShadow: "0.5px 1px 4px white-100" }}
            >
              <img
                src={appStoreLogo}
                alt="App Store"
                className="h-10 mr-3"
                style={{
                  marginLeft: "-0.4rem",
                  // marginRight: "1rem",
                  marginTop: "-0.5rem",
                  marginBottom: "-0.5rem",
                }}
              />
              <div>
                <h5 className="font-medium" style={{ fontSize: "0.7rem" }}>
                  Download on the
                </h5>
                <h1
                  className="cormorant font-extrabold"
                  style={{ fontSize: "1.1rem", fontWeight: "800" }}
                >
                  {" "}
                  App Store
                </h1>
              </div>
            </a>
            <a
              href="#"
              className="store-hvr flex items-center bg-white text-black font-semibold px-2 py-1 rounded-lg text-xs w-39 transition border border-gray-500"
              style={{ boxShadow: "0.5px 1px 4px white-100" }}
            >
              <img
                src={googleStoreLogo}
                alt="Google Play"
                className="h-8 mr-3"
              />
              <div>
                <h5 style={{ fontSize: "0.7rem" }}>GET IT ON</h5>
                <h3
                  className="cormorant font-bold"
                  style={{ fontSize: "1.1rem" }}
                >
                  Google Play
                </h3>
              </div>
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            © 2025 NxtCure. All rights reserved.
          </p>
        </div>

        {/* Right Columns - Info Links */}
        <div className="flex flex-col md:flex-row gap-12 justify-end text-sm">
          <div>
            <h4 className="font-bold mb-2">Company</h4>
            <ul className="space-y-1 text-gray-300">
              <li>About</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">For Patients</h4>
            <ul className="space-y-1 text-gray-300">
              <li>Clinical Trial Matching</li>
              {/* <li>Sign In</li> */}
            </ul>

            <h4 className="font-bold mt-4 mb-2">For Researchers</h4>
            <ul className="space-y-1 text-gray-300">
              <li>Clinical Trial Accessibility Rater</li>
              {/* <li>Sign In</li> */}
            </ul>

            <h4 className="font-bold mt-4 mb-2">For Doctors</h4>
            <ul className="space-y-1 text-gray-300">
              <li>FDA Treatment Dashboard</li>
              {/* <li>Sign In</li> */}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Support</h4>
            <ul className="space-y-1 text-gray-300">
              <li>Help Center</li>
              <li>Product Tutorial</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400">
        <p>Terms | Privacy | Cookie Preferences | System Status</p>
      </div>
    </footer>
  );
}
