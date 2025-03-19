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

      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={images[currentImageIndex]}
          alt="Background"
          className="absolute w-full h-full object-cover transition-opacity duration-3000 ease-linear"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        
        <div className="absolute inset-0 flex flex-col pt-30 items-center ">
          <h1 ><span  className="text-6xl font-bold text-orange-500">Form Vision </span> <span className="text-6xl font-bold text-white"  >To Reality</span> </h1>
          <h2 className="text-3xl font-semibold text-white pr-39 pt-4">Your Trusted Construction Partner</h2>
          <h1 className="text-white font-font-thin text-2x1  pt-5">We provide cost-effective, high-quality construction solutions designed to match your vision.<br/> From residential to commercial and industrial projects, we build with expertise, innovation,
          <br/> and dedication.</h1>
        </div>


        
          <button className= " absolute  bg-black text-white w-40 h-11 mt-90  ml-108 hover:bg-orange-600 transition">
            Talk To Us
          </button>
       


        
          <button className="bg-black text-white w-40 h-11  absolute mt-90 ml-158 hover:bg-orange-600 transition">
            Talk To Us --->
          </button>
       

        

        

        {/* left arrow */}
        <button
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 p-3 rounded-full text-white hover:bg-gray-700"
          onClick={handlePrev}
        >
          <FaArrowLeft size={30} />
        </button>

        {/* Right Arrow */}
        <button
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 p-3 rounded-full text-white hover:bg-gray-700"
          onClick={handleNext}
        >
          <FaArrowRight size={30} />
        </button>

        {/* Buttons */}
        
      </div>
      <div>

      <div className="container w-full h-400 ">

      </div>



    
      </div>

      
    </>
  );
}

export default Home;





