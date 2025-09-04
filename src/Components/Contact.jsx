import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaEnvelope,
  FaFacebook,
  FaPhone,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaMapMarker,
} from "react-icons/fa";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="contact" className="py-20 bg-black bg-opacity-20 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Let's Discuss Your <span className="text-purple-400">Project</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-4 rounded-full">
                <FaPhone className="text-purple-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-lg font-medium text-purple-400">Call me</p>
                <p className="text-white">+91 80000 09484</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-4 rounded-full">
                <FaEnvelope className="text-purple-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-lg font-medium text-purple-400">Email</p>
                <p className="text-white">jeelp9484@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-4 rounded-full">
                <FaMapMarker className="text-purple-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-lg font-medium text-purple-400">Address</p>
                <p className="text-white">
                  14 chitrakut soc opp sanidhya park nikol naroda road Ahmedabad
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full name"
                className="border border-purple-400 bg-gray-800 bg-opacity-50 backdrop-blur-lg p-4 rounded-md w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-purple-400 bg-gray-800 bg-opacity-50 backdrop-blur-lg p-4 rounded-md w-full"
              />
            </div>
            <textarea
              placeholder="Message"
              rows="5"
              className="border border-purple-400 bg-gray-800 bg-opacity-50 backdrop-blur-lg p-4 rounded-md w-full"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-200"
            >
              Submit
            </motion.button>
          </motion.form>
        </div>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-20 pt-10 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left"
      >
        <p className="text-gray-400">© 2025 All rights reserved.</p>
        <p className="text-gray-400">Jeel Godhani</p>
        <div className="flex justify-center space-x-4 text-gray-400 mt-4 sm:mt-0">
          <a href="#" className="hover:text-purple-400">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-purple-400">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-purple-400">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-purple-400">
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
