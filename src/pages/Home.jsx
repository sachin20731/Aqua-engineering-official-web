import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
import background1 from "../assets/480724869_592370486960768_6831746569906568612_n.jpg";
import background2 from "../assets/480569196_596173573247126_2393050240126472838_n.jpg";
import background3 from "../assets/wp1842350-construction-wallpapers.jpg";

const images = [background1, background2, background3];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setIsPaused(true);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsPaused(false), 7000);
  };

  const handleNext = () => {
    setIsPaused(true);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsPaused(false), 7000);
  };

  return (
    <>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src={images[currentImageIndex]}
          alt="Background"
          className="absolute w-full h-full object-cover"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content Section */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500">
            Form Vision
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            To Reality
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold pt-4">
            Your Trusted Construction Partner
          </h2>
          <p className="text-sm sm:text-lg font-light pt-5 max-w-xl">
            We provide cost-effective, high-quality construction solutions
            designed to match your vision. From residential to commercial and
            industrial projects, we build with expertise, innovation, and
            dedication.
          </p>
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 p-3 rounded-full text-white hover:bg-gray-700"
          onClick={handlePrev}
        >
          <FaArrowLeft size={30} />
        </button>

        <button
          className="absolute right-3 sm:right-5 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 p-3 rounded-full text-white hover:bg-gray-700"
          onClick={handleNext}
        >
          <FaArrowRight size={30} />
        </button>

        {/* Talk To Us Button */}
        <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white w-36 sm:w-40 h-10 rounded-md hover:bg-orange-600 transition">
          Talk To Us
        </button>
      </div>

      {/* Statistics Section */}
      
    </>
  );
}

export default Home;
