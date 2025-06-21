import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import NxtCureLogo from "../assets/logo-1.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

   useEffect(() => {
	const handleClickOutside = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setDropdownOpen(false);
		}
	};

	document.addEventListener('mousedown', handleClickOutside);
	return () => {
		  	document.removeEventListener('mousedown', handleClickOutside);
		    	};
	  }, []);

  const handlePatientsClick = () => {
	  	navigate('/patients');
	  	setDropdownOpen(false);
	  	setMenuOpen(false);
};

  return (
    <header className="w-full shadow-sm sticky top-0 left-0 z-50 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={NxtCureLogo} alt="Nxt Cure Logo" className="h-10 w-auto" />
          <span className="cormorant text-2xl font-bold text-gray-800">
            NxtCure
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
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

          {/* Dropdown */}
          <div className="relative group">
            <button className="nav-txt text-gray-700 hover:text-blue-600 font-medium transition cursor-pointer">
              NxtTrials
            </button>
            <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition duration-200 z-40 pointer-events-none group-hover:pointer-events-auto">
              <a
                href="#patients"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                Patients
              </a>
              <a
                href="#researchers"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                Researchers
              </a>
              <a
                href="#doctors"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
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

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md z-40">
          <a href="#" className="block text-gray-700 font-medium">
            Home
          </a>
          <a href="#about" className="block text-gray-700 font-medium">
            About
          </a>


  		{/* Dropdown */}
		<div className="relative group" ref={dropdownRef}>
		  <button 
		onClick={() => setDropdownOpen(!dropdownOpen)}
		className="nav-txt text-gray-700 hover:text-blue-600 font-medium transition cursor-pointer flrx items-center">
		    NxtTrials
	    <ChevronDown
		className={`m1-1 transform transition-transform duration-200 ${
						dropdownOpen ? "rotate-180" : ""
					}`}
		size={16}
		/>
		  </button>
	  {dropdownOpen && (
				<div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md z-40 border border-gray-200">
				  <button
				    onClick={handlePatientsClick}
				    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
				  >
				    Patients
				  </button>
				  <button
				    onClick={() => scrollToSection('doctors')}
				    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
				  >
				  Physicians
				  </button>
				</div>
			      )}
		</div>


          <a href="#pricing" className="block text-gray-700 font-medium">
            Pricing
          </a>
          <a href="#faq" className="block text-gray-700 font-medium">
            FAQs
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
