import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaPaintBrush, FaRocket, FaServer, FaTachometerAlt, FaWrench } from "react-icons/fa";

const Service = () => {
  const serviceData = [
    {
      icon: <FaCode className="text-purple-400 text-5xl mb-4" />,
      title: "Frontend Development",
      description: "Building responsive and performant UIs using React, Next.js, and Tailwind CSS.",
    },
    {
      icon: <FaPaintBrush className="text-purple-400 text-5xl mb-4" />,
      title: "Landing Page Design",
      description: "Pixel-perfect, conversion-optimized landing pages based on Figma or design files.",
    },
    {
      icon: <FaRocket className="text-purple-400 text-5xl mb-4" />,
      title: "Portfolio & Blog Sites",
      description: "Custom portfolio or blog websites with markdown support and SEO.",
    },
    {
      icon: <motion.div className="text-purple-400 text-5xl mb-4" />,
      title: "Website Animations",
      description: "Adding smooth animations and interactions using Motion.dev and Framer Motion.",
    },
    {
      icon: <FaTachometerAlt className="text-purple-400 text-5xl mb-4" />,
      title: "Performance Optimization",
      description: "Improving Core Web Vitals with optimized images, lazy loading, and code-splitting.",
    },
    {
      icon: <FaWrench className="text-purple-400 text-5xl mb-4" />,
      title: "Maintenance & Support",
      description: "Regular updates, bug fixing, and small feature additions for existing websites.",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="service" className="py-20 bg-black bg-opacity-20 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="text-purple-400">Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-8 rounded-lg text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
