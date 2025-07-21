import React from "react";
import { motion } from "motion/react"


const Comapanies = () => {
  const comapanies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Tata Consultancy Services (TCS)",
    "Infosys",
    "IBM",
    "Accenture",
    "Wipro",
    "HCL Technologies",
    "Deloitte",
  ];
  const companiesList = [...comapanies, ...comapanies];

  const scrollVariant1 = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        },
      },
    },
  };

  const scrollVariant2 = {
    animate: {
      x: [-2000, 0],
      transition: {
        x: {
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className=" text-white py-16">
      <div className="w-full  text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Companies I' Worked with
        </h2>
        <div className="overflow-hidden relative w-full px-4 sm:px-10">
          <motion.div
            variants={scrollVariant1}
            animate="animate"
            className="whitespace-nowrap flex space-x-10"
          >
            {companiesList.map((company, index) => (
              <div
                key={index}
                className="text-lg bg-gray-800 px-6 py-3 rounded-full inline-block"
              >
                {company}
              </div>
            ))}
          </motion.div>
        </div>
        <div className="overflow-hidden relative w-full mt-5">
          <motion.div
            variants={scrollVariant2}
            animate="animate"
            className="whitespace-nowrap flex space-x-10"
          >
            {companiesList.map((company, index) => (
              <div
                key={index}
                className="text-lg bg-gray-800 px-6 py-3 rounded-full inline-block"
              >
                {company}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Comapanies;
