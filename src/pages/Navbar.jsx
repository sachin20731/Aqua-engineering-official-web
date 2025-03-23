import React, { useState, useEffect } from "react";
import logo1 from "../assets/Screenshot 2025-03-18 111754.png";
import email from "../assets/icons8-email-48.png";
import location from "../assets/icons8-location-50.png";
import phone from "../assets/icons8-phone-50.png";
import facebook from "../assets/icons8-facebook-30.png";

const Navbar = () => {
  const [showWhiteNavbar, setShowWhiteNavbar] = useState(true);
  const [showOrangeBar, setShowOrangeBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        // At the very top → Show both navigation bars
        setShowOrangeBar(true);
        setShowWhiteNavbar(true);
      } else if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scroll down → Hide both navbars
        setShowWhiteNavbar(false);
        setShowOrangeBar(false);
      } else if (window.scrollY < lastScrollY) {
        // Scroll up → Show only white navbar
        setShowWhiteNavbar(true);
        setShowOrangeBar(false);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Top Contact Bar (Orange Area) */}
      {showOrangeBar && (
        <div className="bg-orange-500 h-12 flex items-center justify-between px-12 text-white fixed w-full top-0 z-50">
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
      )}

      {/* Main Navbar (White Navigation Bar) */}
      <div
        className={`fixed top-${showOrangeBar ? "12" : "0"} w-full bg-white shadow-lg z-50 transition-transform duration-500 ${
          showWhiteNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex bg-white h-20 shadow-md">
          <nav className="container flex justify-between items-center w-full px-12">
            {/* Logo */}
            <img src={logo1} alt="Logo" className="h-16 w-auto" />

            {/* Navigation Links */}
            <ul className="flex space-x-8 text-lg font-medium">
              <li>
                <a href="#home" className="hover:text-orange-400 transition">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-400 transition"> About Us</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-400 transition">Projects</a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition">Services</a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-orange-400 transition">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
