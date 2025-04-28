import appStoreLogo from "../assets/appstore.png";
import googleStoreLogo from "../assets/google-play.png";
import NxtCureLogo from "../assets/nxtcure_logo.png";

export default function Footer() {
  return (
    <footer className="bg-purple-50 py-12 text-gray-600 text-sm">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src={NxtCureLogo} alt="NxtCure Logo" className="h-10 mb-4" />
          <p>© 2025 NxtCure. All rights reserved.</p>
          <div className="flex space-x-4 mt-4">
            <img
              src={appStoreLogo}
              alt="App Store"
              className="h-8"
              style={{
                height: "3.3rem",
                marginLeft: "0.4rem",
                width: "10.1rem",
              }}
            />
          </div>
          <img
            src={googleStoreLogo}
            alt="Google Play"
            className="h-8"
            style={{ height: "4rem", width: "11rem" }}
          />
        </div>

        <div>
          <h4 className="font-bold mb-2">Company</h4>
          <ul className="space-y-1">
            <li>About</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">For Patients</h4>
          <ul className="space-y-1">
            <li>Clinical Trial Matching</li>
            <li>Sign In</li>
          </ul>

          <h4 className="font-bold mt-4 mb-2">For Researchers</h4>
          <ul className="space-y-1">
            <li>Clinical Trial Accessibility Rater</li>
            <li>Sign In</li>
          </ul>

          <h4 className="font-bold mt-4 mb-2">For Doctors</h4>
          <ul className="space-y-1">
            <li>FDA Treatment Dashboard</li>
            <li>Sign In</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Support</h4>
          <ul className="space-y-1">
            <li>Help Center</li>
            <li>Product Tutorial</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-xs">
        <p>Terms | Privacy | Cookie Preferences | System Status</p>
      </div>
    </footer>
  );
}
