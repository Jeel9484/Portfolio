import { title } from "motion/react-client";
import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import project1 from "../Assets/pro-1.jpg";
import project2 from "../Assets/pro-2.png";
import project3 from "../Assets/pro-3.jpg";
import Comapanies from "./Comapanies";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Dashboard",
      description:
        "A modern admin dashboard with login, user management, sidebar routing, and localStorage data using React and Tailwind CSS.",
      image: project1,
      link: "#",
    },
    {
      id: 2,
      title: "Pixel-bloom",
      description:
        "A beautiful UI/UX design created in Figma for a next-gen AI tool dashboard. Includes layout system, cards, charts, and modals.",
      image: project2,
      link: "#",
    },
    {
      id: 3,
      title: "E-commerce",
      description:
        "A fully functional e-commerce website with user authentication, product management, payment gateway and order tracking",
      image: project3,
      link: "#",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div id="work" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="text-4xl text-white underline font-bold text-center mb-12"
        >
          My Work
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-12 text-gray-400 text-center"
        >
          Here are some of the projects I’ve built using React, Next.js,
          Tailwind CSS, TypeScript, and modern frontend tools.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: project.id * 0.2, duration: 0.5 }}
              key={project.id}
              className="bg-gray-900 shadow-lg rounded-lg overflow-hidden"
            >
              <img src={project.image} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <button className="border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition">
                  Details
                </button>
              </div>
            </motion.div>
          ))}
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
    </div>
  );
};

export default Work;
