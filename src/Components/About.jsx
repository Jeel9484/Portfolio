import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutImg from "../Assets/aboutimg-1.png";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { id: 1, value: "5+", label: "Years of Design Experience" },
    { id: 2, value: "50+", label: "Overall Global Customer" },
    { id: 3, value: "5+", label: "Years of Frontend Development" },
  ];

  return (
    <div id="about" className="py-20 bg-black bg-opacity-20 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About <span className="text-purple-400">Me</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:w-1/3"
          >
            <img
              src={aboutImg}
              alt="About Me"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:w-2/3 text-lg text-gray-300"
          >
            <p>
              Hi, I’m Jeel. I work as a frontend developer, and my focus is on
              creating web applications that are easy to scale, perform well,
              and are simple to maintain. I mainly use HTML, CSS, JavaScript,
              TypeScript, Next.js, and Tailwind CSS in my work. My strengths lie
              in crafting responsive user interfaces, adding smooth animations
              with Framer Motion, and turning Figma designs into flawless,
              ready-to-use code. I’m familiar with Git, which helps me
              collaborate with others and manage versions of projects. I stick
              to current best practices like component-based design,
              utility-first styling, proper markup, and ensuring accessibility.
              I love to keep learning and trying out new technologies, all with
              the goal of providing top-notch frontend solutions that reflect
              the newest trends in web development.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-8 rounded-lg text-center"
            >
              <h3 className="text-5xl font-bold text-purple-400 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
