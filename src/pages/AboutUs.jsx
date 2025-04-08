import React from "react";
import { motion } from "framer-motion";
import aboutus from "../assets/476273525_584658074398676_2899747608546811105_n.png";
import aboutus2 from "../assets/470686522_549707661227051_4756333940290588489_n.jpg";

function AboutUs() {
  return (
    <div>


      {/* About Us Section */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 py-12">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center  p-6  ml-9 mr-9 md:p-10 shadow-md rounded-t-md bg-gray-900"
          >
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

          <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className=" text-lg p-4"
            >

              <h1 className="text-start text-2xl sm:text-3xl font-bold font-[crimson] italic text-orange-500 ">About Us</h1>
              <h1 className="text-start text-2xl sm:text-3xl font-bold font-[Poppins] text-amber-50 "> We Will Make Your Dream Home</h1>
              <p className="text-start text-sm sm:text-lg   font-thin-100 pt-4 text-amber-50 ">
              With 12 years of experience, AQUA Engineering & Construction Company has been a trusted name 
              in delivering high-quality, cost-effective construction solutions. We specialize in residential, 
              commercial, and industrial projects, ensuring innovation, precision, and excellence in every build.
               Our team of skilled professionals is dedicated to transforming visions into reality, using the latest 
               technology and best industry practices. At AUA Engineering & Construction, we prioritize customer
                satisfaction, sustainability, and safety, making us the preferred choice for construction 
                solutions.
                </p>
            </motion.p>






            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="  rounded-lg text-center"
            >
             
             <img src={aboutus2} alt="About Us" className="   w-170 h-110 rounded-lg  " />
             

            </motion.div>
            
          </div>
        </motion.div>
      </div>

            {/* Top Section */}
            <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center bg-white p-6 md:p-10 shadow-md rounded-t-md"
>
  {/* Grid Item 1 */}
  <div className="bg-orange-400 flex flex-col items-center justify-center text-center p-6 rounded-lg">
    <h1 className="text-black font-bold text-6xl sm:text-8xl font-mono">
      12+
    </h1>
    <h2 className="text-black font-bold text-xl sm:text-2xl">
      Years Expertise
    </h2>
  </div>

  {/* Grid Item 2 */}
  <div className="bg-amber-300 flex flex-col items-center justify-center text-center p-6 rounded-lg">
    <h1 className="text-black font-bold text-6xl sm:text-8xl font-mono">
      200+
    </h1>
    <h2 className="text-black font-bold text-xl sm:text-2xl">
      Happy Clients
    </h2>
  </div>

  {/* Grid Item 3 */}
  <div className="bg-lime-300 flex flex-col items-center justify-center text-center p-6 rounded-lg">
    <h1 className="text-black font-bold text-6xl sm:text-8xl font-mono">
      150+
    </h1>
    <h2 className="text-black font-bold text-xl sm:text-2xl">
      Projects Completed
    </h2>
  </div>
      </motion.div>

    
    </div>




  );
}

export default AboutUs;
