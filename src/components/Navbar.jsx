import React from "react";
import NxtCureLogo from "../assets/logo-1.png";

const Navbar = () => {
  return (
    <header className="w-full shadow-sm fixed top-0 left-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={NxtCureLogo} // Replace with your logo path inside 'public/' or 'src/assets'
            alt="Nxt Cure Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-gray-800">NxtCure</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            About Us
          </a>
          <a
            href="#patients"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Patients
          </a>
          <a
            href="#researchers"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Researchers
          </a>
          <a
            href="#doctors"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Doctors
          </a>
          <a
            href="#pricing"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            FAQs
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <a
            href="#login"
            className="hover:text-blue-600 text-gray-700 font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
