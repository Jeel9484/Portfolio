import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react";
import { Link } from "react-scroll";
import { clipPath } from "motion/react-client";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const variants = {
    open: { clipPath: "circle(1200px at 43px 43px)" },
    transition: {
      type: "spring",
    },
    closed: { clipPath: "circle(25px at 43px 37px" },
    transition: {
      type: "spring",
      duration: 1,
    },
  };
  const items = [
    { id: 1, text: "About", to: "about" },
    { id: 2, text: "Service", to: "service" },
    { id: 3, text: "Work", to: "work" },
    { id: 4, text: "Contact", to: "contact" },
  ];
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto hidden md:flex justify-between items-center py-6"
      >
        <div className="text-lg lg:text-2xl font-bold flex items-center gap-2">
          <span className="text-white">Jeel</span>
          <span className="text-purple-500">Patel</span>
        </div>
        <ul className="hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white">
          {items.map(({ id, text, to }) => (
            <li key={id}>
              <Link to={to} smooth={true} duration={500} offset={-70}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href=""
          className="md:text-base lg:text-lg bg-purple-500 hover:bg-purple-400 rounded-full text-white px-4 py-2"
        >
          Download CV
        </a>
      </motion.div>

      <div className="flex md:hidden justify-between">
        <motion.div animate={menu ? "open" : "closed"}>
          <motion.div
            variants={variants}
            className="bg-white w-2/3 h-screen text-black fixed z-10"
            onClick={() => setMenu((prev) => !prev)}
          >
            <div className="px-7 py-6">
              {menu ? <IoMdClose size={30} /> : <IoIosMenu size={30} />}
            </div>
            {menu && (
              <div className="flex flex-col justify-center items-center">
                <ul className="space-y-6 text-black text-lg ">
                  {items.map(({ id, text,to }) => (
                    <li
                      key={id}
                      className="hover:cursor-pointer text-purple-500 duration-200"
                    >
                      <Link to={to} smooth={true} duration={500} offset={-70}>
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
                <a className="text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 mt-6 rounded-full">
                  Download CV
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100, y: -100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold flex items-center gap-2 py-6 px-4"
        >
          <span className="text-white">Jeel</span>
          <span className="text-purple-500">Patel</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
