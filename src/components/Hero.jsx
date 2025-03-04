import React, { useState, useEffect } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { DiCss3, DiHtml5, DiJavascript1, DiNodejsSmall, DiReact } from "react-icons/di";
import { motion } from "framer-motion";

const techStack = [
  { name: "HTML5", icon: <DiHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <DiCss3 className="text-blue-600" /> },
  { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
  { name: "React", icon: <DiReact className="text-blue-500" /> },
  { name: "Node.js", icon: <DiNodejsSmall className="text-green-500" /> },
];

const phrases = ["SCALEABLE", "CUSTOM", "HIGH-PERFORMANCE", "SECURE", "RESPONSIVE"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2500); // Change phrase every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  // Text animation variants
  const text = "Let’s Build Your Website";
  const containerVariants = {
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.5, repeat: Infinity, repeatDelay: 1.5 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl"
      >
        <motion.p
          className="text-gray-200 md:text-5xl text-3xl tracking-tight mb-6 mt-24 md:mt-20"
        >
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="font-bold text-purple-400 glow-text inline-block"
          >
            {phrases[index]}
          </motion.span>{" "}
          Full-Stack Web Solutions <br />
          <span className="font-bold">FOR YOUR BUSINESS</span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-300 text-lg md:text-xl mb-6 px-4"
        >
          NeuraWeb Is Your Trusted Partner For Cutting-Edge Full-Stack Website Development. 
          We Turn Your Ideas Into Stunning, Responsive, And High-Performance Web Applications.
        </motion.p>

        {/* Animated Letter-by-Letter Text with Infinite Loop */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-gray-200 text-xl font-semibold flex justify-center"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center gap-4 my-4"
        >
 <motion.a
  whileHover={{
    scale: 1.05,
    boxShadow: "0px 0px 15px #ff3bc4",
    transition: { duration: 0.3 },
  }}
  href="tel:+916381546052"
  className="z-10 cursor-pointer font-bold text-white bg-[#111111] hover:bg-[#ff3bc4] px-6 py-3 text-lg border border-gray-500  rounded-full flex items-center gap-2 transition-all relative shadow-lg"
>
  <AiOutlinePhone className="text-white text-xl" />
  Contact Us
</motion.a>

        </motion.div>
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="flex flex-col items-center justify-center text-center py-12 px-6 w-full"
      >
        {/* Title */}
        <p className="text-gray-200 text-3xl md:text-5xl font-extrabold tracking-wide font-[Poppins] mb-6">
          Our Tech Stack
        </p>

        {/* Tech Icons */}
        <div className="flex flex-wrap justify-center gap-6 max-w-[90%]">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)" }}
              transition={{ duration: 0.3 }}
              className="text-5xl md:text-6xl p-3 bg-gray-800/50 hover:bg-gray-700/70 rounded-lg shadow-lg cursor-pointer"
            >
              {tech.icon}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
