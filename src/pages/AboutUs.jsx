import React from "react";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <div>
      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center bg-white p-6 md:p-10 shadow-md rounded-t-md"
      >
        <div className="bg-orange-400 flex flex-col items-center justify-center text-center p-6 w-full md:w-1/3 rounded-lg">
          <h1 className="text-black font-bold text-6xl sm:text-8xl font-mono">
            12+
          </h1>
          <h2 className="text-black font-bold text-xl sm:text-2xl">
            Years Expertise
          </h2>
        </div>
      </motion.div>

      {/* About Us Section */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 py-12">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-2/3 bg-white p-6 shadow-lg rounded-lg"
        >
          <h1 className="text-center text-2xl sm:text-3xl font-bold">About Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-amber-200 p-6 rounded-lg text-center"
            >
              <h1 className="text-black font-bold text-6xl sm:text-8xl font-mono">
                12+
              </h1>
              <h2 className="text-black font-bold text-xl sm:text-2xl">
                Years Expertise
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-700 text-lg p-4"
            >
              We have been delivering top-notch construction services for over a
              decade. Our team is committed to excellence, quality, and
              innovation.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUs;
