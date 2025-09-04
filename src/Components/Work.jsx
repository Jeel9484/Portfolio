import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Comapanies from "./Comapanies";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Pixel Bloom",
      description: "A modern and beautiful UI/UX design for a next-gen AI tool.",
      image: "https://via.placeholder.com/400x250",
      link: "https://pixelb.netlify.app",
    },
    {
      id: 2,
      title: "Splash",
      description: "A creative and interactive splash page.",
      image: "https://via.placeholder.com/400x250",
      link: "https://splash.netlify.app",
    },
    {
      id: 3,
      title: "E-commerce with Razorpay",
      description: "A fully functional e-commerce website with Razorpay integration.",
      image: "https://via.placeholder.com/400x250",
      link: "https://e-comd.netlify.app",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="work" className="py-20 bg-black bg-opacity-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl text-white font-bold text-center mb-12"
        >
          My <span className="text-purple-400">Work</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <Comapanies />
      </motion.div>
    </div>
  );
};

export default Work;
