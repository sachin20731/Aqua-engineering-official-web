import React, { useState, useEffect } from "react";
import logo1 from "../assets/Screenshot 2025-03-18 111754.png";
import emailIcon from "../assets/icons8-email-48.png";
import locationIcon from "../assets/icons8-location-50.png";
import phoneIcon from "../assets/icons8-phone-50.png";
import facebookIcon from "../assets/icons8-facebook-30.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showTopBar, setShowTopBar] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setShowTopBar(true);
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
        setShowTopBar(false);
      } else {
        setShowNavbar(true);
        setShowTopBar(false);
      }

      lastScrollY = currentScrollY;
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Contact Bar (Visible on Desktop) */}
      {showTopBar && !isMobile && (
        <div className="bg-orange-500 h-12 flex items-center justify-between px-12 text-white fixed w-full top-0 z-50">
          <div className="flex space-x-8">
            <div className="flex items-center space-x-2">
              <img src={emailIcon} alt="Email" className="w-6 h-6" />
              <span>aquaengineering@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={locationIcon} alt="Location" className="w-6 h-6" />
              <span>Kurunduwaththa Rd, Piliyandala, Sri Lanka</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={phoneIcon} alt="Phone" className="w-6 h-6" />
              <span>+94 76 977 0968</span>
            </div>
          </div>

          <div className="bg-slate-900 p-2 rounded-md">
            <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
          </div>
        </div>
      )}

      {/* Main Navigation Bar */}
      <div
        className={`fixed ${
          showTopBar && !isMobile ? "top-12" : "top-0"
        } w-full bg-white shadow-lg z-50 transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex bg-white h-20 shadow-md">
          <nav className="container flex justify-between items-center w-full px-12">
            {/* Logo */}
            <img src={logo1} alt="Logo" className="h-16 w-auto max-md:h-10" />

            {/* Mobile Menu Toggle */}
            {isMobile && (
              <button onClick={toggleMenu} className="relative w-10 h-8 flex flex-col justify-between">
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            )}

            {/* Desktop Navigation Links */}
            {!isMobile && (
              <ul className="flex space-x-8 text-lg font-medium font-[Poppins]">
                <li>
                  <a href="#home" className="hover:text-orange-400 transition">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-orange-400 transition">About Us</a>
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
            )}

            {/* Mobile Menu Dropdown */}
            {isMobile && isMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg">
                <ul className="flex flex-col space-y-4 p-4">
                  <li>
                    <a href="#home" className="block hover:text-orange-400 transition" onClick={toggleMenu}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="block hover:text-orange-400 transition" onClick={toggleMenu}>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="block hover:text-orange-400 transition" onClick={toggleMenu}>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="block hover:text-orange-400 transition" onClick={toggleMenu}>
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#contacts" className="block hover:text-orange-400 transition" onClick={toggleMenu}>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
