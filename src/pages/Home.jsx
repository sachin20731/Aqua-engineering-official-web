import React, { useState, useEffect } from 'react';
import Navbar from "./navbar";
import background1 from "../assets/480724869_592370486960768_6831746569906568612_n.jpg";
import background2 from "../assets/480569196_596173573247126_2393050240126472838_n.jpg";
import background3 from "../assets/wp1842350-construction-wallpapers.jpg";

const images = [background1, background2, background3];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup function
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>

      {/* Background Image Slider */}
      <div className="relative w-full h-screen">
        
        {/* Animated Image Transition */}
        <img
          src={images[currentImageIndex]}
          alt="Background"
          className="absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
        

       
        

        {/* Content on Top */}
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1 className="text-4xl font-bold text-orange-500">Welcome to Our Website</h1>
          <div>
          <h1 className='text-5x2 font-bold text-orange-200'>Quality Above quntity</h1>
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
