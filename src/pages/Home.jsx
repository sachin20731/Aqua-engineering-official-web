import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons
import Navbar from "./Navbar";
import background1 from "../assets/480724869_592370486960768_6831746569906568612_n.jpg";
import background2 from "../assets/480569196_596173573247126_2393050240126472838_n.jpg";
import background3 from "../assets/wp1842350-construction-wallpapers.jpg";

const images = [background1, background2, background3];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Track manual navigation

  useEffect(() => {
    if (isPaused) return; // Pause auto-slide when manually navigating

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  // Function to handle left/right navigation
  const handlePrev = () => {
    setIsPaused(true);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsPaused(false), 7000); // Resume auto-slide after 7s
  };

  const handleNext = () => {
    setIsPaused(true);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsPaused(false), 7000); // Resume auto-slide after 7s
  };

  return (
    <>
      <Navbar />

      <div className="  mt-12 w-full h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={images[currentImageIndex]}
          alt="Background"
          className="absolute w-full h-full object-cover transition-opacity duration-3000 ease-linear"
        />

        {/* Black Overlay */}
        <div className="absolute  h-screen inset-0 bg-black opacity-60"></div>

        {/* Content Section */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-6xl font-bold text-orange-500">Form Vision</h1>
          <h1 className="text-6xl font-bold text-white">To Reality</h1>
          <h2 className="text-3xl font-semibold pt-4">Your Trusted Construction Partner</h2>
          <p className="text-xl font-light pt-5">
            We provide cost-effective, high-quality construction solutions designed to match your vision. From residential to commercial and industrial projects,<br/> we build with expertise, innovation, and dedication.
          </p>
        </div>

        {/* Talk To Us Button */}
        <button className="absolute bottom-34  left-1/2 transform -translate-x-1/2 bg-black text-white w-40 h-11 rounded-md hover:bg-orange-600 transition">
          Talk To Us
        </button>

        {/* Left Arrow Button */}
        <button
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 p-3 rounded-full text-white hover:bg-gray-700"
          onClick={handlePrev}
        >
          <FaArrowLeft size={30} />
        </button>

        {/* Right Arrow Button */}
        <button
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 p-3 rounded-full text-white hover:bg-gray-700"
          onClick={handleNext}
        >
          <FaArrowRight size={30} />
        </button>
      </div>

      {/* Optional Additional Section */}
      

      <div className=" container w-full h-50">
        <div className=" grid grid-cols-2        text-center absolute  -mt-15 container w-250 h-80 bg-white ml-63 text-white shadow-md  rounded-t-md">
          <div className="grid grid-cols-1 bg-amber-200">
           <h1 className="text-black  font-bold text-8xl font-mono ">12 +</h1>
           <h1 className="text-black  font-bold text-8xl font-mono ">years expertise</h1>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <div className="w-320 h-300 bg-white">
        <h1 className=" mt-34 flex justify-center">About Us</h1>
          <div className="grid grid-cols-2">
            <div className="grid m-6 grid-cols-1 bg-amber-200">
              <h1 className="text-black  font-bold text-8xl font-mono ">12 +</h1>
              <h1 className="text-black  font-bold text-8xl font-mono ">years expertise</h1>
            </div>
        </div>
      </div>
      </div>

      
    </>
  );
}

export default Home;
