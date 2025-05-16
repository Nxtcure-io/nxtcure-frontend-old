import React from "react";
import NxtCureLogo from "../assets/logo-1.png";

const Navbar = () => {
  return (
    <header className="w-full shadow-sm sticky top-0 left-0 z-50 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={NxtCureLogo} // Replace with your logo path inside 'public/' or 'src/assets'
            alt="Nxt Cure Logo"
            className="h-10 w-auto"
          />
          <span className="cormorant text-2xl font-bold text-gray-800">
            NxtCure
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#"
            className="nav-txt text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="nav-txt text-gray-700 hover:text-blue-600 font-medium transition"
          >
            About
          </a>
          {/* Dropdown for NxTrials */}
          <div className="relative group">
            <button className="nav-txt text-gray-700 hover:text-blue-600 font-medium transition cursor-pointer">
              NxtTrials
            </button>
            <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition duration-200 z-40 pointer-events-none group-hover:pointer-events-auto">
              <a
                href="#patients"
                className="nav-txt block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                Patients
              </a>
              <a
                href="#researchers"
                className="nav-txt block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                Researchers
              </a>
              <a
                href="#doctors"
                className="nav-txt block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                Doctors
              </a>
            </div>
          </div>
          <a
            href="#pricing"
            className="nav-txt text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="nav-txt text-gray-700 hover:text-blue-600 font-medium transition"
          >
            FAQs
          </a>
        </nav>

        {/* CTA Button */}
        {/* <div className="hidden md:flex">
          <a
            href="#login"
            className="hover:text-blue-600 text-gray-700 font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Login
          </a>
          <a
            href="#"
            className="nav-txt bg-blue-500 button_hvr text-white py-2 px-4 rounded-full transition duration-300"
          >
            Sign Up
          </a>
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
