import React from "react";
import NxtCureLogo from "../assets/logo-1.png";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      {/* Circular Logo */}
      <div className="flex items-center justify-center bg-slate-900 rounded-full w-24 h-24 mb-8 shadow-xl animate-fade-in">
        <img
          src={NxtCureLogo}
          alt="NxtCure Logo"
          className="h-12 w-12 object-contain"
        />
      </div>

      {/* Growing Bars Animation */}
      <div className="flex items-end space-x-2 h-10">
        {[0, 0.15, 0.3, 0.45, 0.6].map((delay, i) => (
          <div
            key={i}
            className="w-2 rounded-full bg-[#8F8BFC] shadow-md"
            style={{
              animation: `bounce 1.2s ease-in-out ${delay}s infinite`,
              height: "100%",
            }}
          ></div>
        ))}
      </div>

      {/* Keyframes and Fade-in Effect */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: scaleY(0.4); opacity: 0.6; }
          50% { transform: scaleY(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
