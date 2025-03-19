import React, { useState, useEffect } from 'react';
import logo1 from "../assets/Screenshot 2025-03-18 111754.png";
import email from "../assets/icons8-email-48.png";
import location from "../assets/icons8-location-50.png";
import phone from "../assets/icons8-phone-50.png";
import facebook from "../assets/icons8-facebook-30.png";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-orange-500 h-12 flex items-center justify-between px-12 text-white">
        <div className="flex space-x-8">
          <div className="flex items-center space-x-2">
            <img src={email} alt="Email" className="w-6 h-6" />
            <span>aquaengineering@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={location} alt="Location" className="w-6 h-6" />
            <span>Kurunduwaththa Rd, Piliyandala, Sri Lanka</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={phone} alt="Phone" className="w-6 h-6" />
            <span>+94 76 977 0968</span>
          </div>
        </div>

        <div className="bg-slate-900 p-2 rounded-md">
          <img src={facebook} alt="Facebook" className="w-6 h-6" />
        </div>
      </div>

      {/* Main Navbar with Sticky Effect */}
      <div
        className={`${
          isSticky ? "fixed top-0 w-full shadow-lg bg-white" : "relative"
        } transition-all duration-300 z-50`}
      >
        <div className="flex bg-white h-20 shadow-md">
          <nav className="container flex justify-between items-center w-full px-12">
            {/* Logo */}
            <img src={logo1} alt="Logo" className="h-16 w-auto" />

            {/* Navigation Links */}
            <ul className="flex space-x-8 text-lg font-medium">
              <li><a href="#home" className="hover:text-orange-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-gray-400 transition">About Us</a></li>
              <li><a href="#projects" className="hover:text-gray-400 transition">Projects</a></li>
              <li><a href="#services" className="hover:text-gray-400 transition">Services</a></li>
              <li><a href="#contacts" className="hover:text-gray-400 transition">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
