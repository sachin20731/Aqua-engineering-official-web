import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
import background1 from "../assets/480724869_592370486960768_6831746569906568612_n.jpg";
import background2 from "../assets/480569196_596173573247126_2393050240126472838_n.jpg";
import background3 from "../assets/wp1842350-construction-wallpapers.jpg";
import setting from "../assets/helmet.gif";
import building from "../assets/building.gif";
import handshake from "../assets/trading.gif";
import { motion } from "framer-motion";
import img4 from "../assets/mesure.png";

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

 


  
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }


  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15
      }
    },
  };
  
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <>
   
 
        <div className="relative w-full h-230">
          {/* Background Image */}

            <motion.img
            src={images[currentImageIndex]}
            alt="Background"
            className="absolute w-full h-full object-cover"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 1.5 }}
          />
            <img
              src={images[currentImageIndex]}
              alt="Background"
              className="absolute w-full h-full object-cover"
            />

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            
            
            {/* Content Section */}
                <motion.div
                className="absolute inset-0 flex flex-col mt-45 items-center text-center text-white px-4"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 1, delay: 0.3 }}
              >

          
            
                <h1 className="  text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500 font-[crimsons] " >
                  Form Vision
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-[poppins] ">
                  To Reality
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-thin pt-4 font-[Poppins]">
                    Your Trusted Construction Partner
                </h2>
                <p className="  text-sm from-neutral-700 sm:text-lg  pt-5 max-w-xl font-[Poppins]">
                  We provide cost-effective, high-quality construction solutions
                  designed to match your vision. From residential to commercial and
                  industrial projects, we build with expertise, innovation, and
                  dedication.
                </p>
              </motion.div>
            
          

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
            <motion.button
                  className="absolute bottom-80 left-1/2 transform -translate-x-1/2 text-white w-36 sm:w-40 h-10 rounded-md hover:bg-orange-600 border-2 transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.1 }}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 1 }}>
                  Talk To Us
            </motion.button>


        </div>

      <motion.div
          className="flex flex-wrap md:flex-row items-center bg-gray-100 gap-9 justify-center py-12 rounded-lg shadow-lg -mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
             <motion.div
                className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 relative border-amber-600 border-2"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                
                    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 relative hover:shadow-xl transition-all duration-500 ease-in-out  border-amber-600 border-2 mouse-over:bg-gray-100">
                      {/* Floating Icon */}
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                          <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-md border-amber-600 border-2">
                            <img src={setting} alt="Setting" className="w-10 h-10" />
                          </div>
                        </div>

                      {/* Tile Content */}
                      <div className="mt-12 text-center ">
                        <h1 className="text-2xl font-bold italic text-orange-500">Who We Are</h1>
                        <p className="mt-4 text-gray-700 px-4">
                        Aqua Engineering is one of Sri Lanka’s leading construction companies, 
                        known for delivering high-quality and reliable building solutions.
                        With years of industry experience, we specialize in residential, 
                        commercial, and industrial construction projects.
                        </p>
                      </div>
                    </div>
              </motion.div>



              <motion.div
                  className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 relative border-amber-600 border-2"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >

                <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 relative hover:shadow-xl transition-all duration-500 ease-in-out border-amber-600 border-2">
                  {/* Floating Icon */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                      <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-md  border-amber-600 border-2">
                        <img src={building} alt="Setting" className="w-10 h-10" />
                      </div>
                    </div>

                  {/* Tile Content */}
                  <div className="mt-12 text-center">
                    <h1 className="text-2xl font-bold italic text-orange-500">What We Do</h1>
                    <p className="mt-4 text-gray-700 px-4">
                    We are committed to quality craftsmanship, timely delivery, and ensuring
                    customer satisfaction in every project we handle.
                    </p>
                  </div>
                </div>

              </motion.div>


              <motion.div
                    className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 relative border-amber-600 border-2"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >

                <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 relative hover:shadow-xl transition-all duration-500 ease-in-out border-amber-600 border-2">
                  {/* Floating Icon */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                      <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-md  border-amber-600 border-2">
                        <img src={handshake} alt="Setting" className="w-14 h-14" />
                      </div>
                    </div>

                  {/* Tile Content */}
                  <div className="mt-12 text-center">
                    <h1 className="text-2xl font-bold italic text-orange-500">Why Choose Us?</h1>
                    <p className="mt-4 text-gray-700 px-4">
                    We delivering high-quality 
                    construction services with a strong focus on reliability, innovation,
                    and customer satisfaction. Our skilled team, commitment to excellence,
                      and proven track record ensure every project is completed on time,
                      within budget, and to the highest standards.
                    </p>
                  </div>
                </div>

              </motion.div>

      </motion.div>

        <div>
          <div className="flex ">
            <img src={img4} alt="Image" className="w-full h-116 object-cover" />

          </div>
        </div>

      
     

      
    </>
  );
}

export default Home;
