import React from "react";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiVercel } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { motion } from "framer-motion";

const techItems = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <RiNextjsFill className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
];

function TechStack() {
  return (
    <section className="py-20 overflow-hidden bg-primary">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-b from-white to-white/60 mb-6">
          Technologies
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          The modern tools and diverse technologies I work with to build robust applications.
        </p>
      </div>

      <div className="relative w-full overflow-hidden mask-gradient-x">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-primary to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-primary to-transparent z-10"></div>

        {/* Moving Track */}
        <div className="flex gap-12 w-max">
          <motion.div
            className="flex gap-12 min-w-max"
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...techItems, ...techItems, ...techItems].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 px-6 py-4 rounded-full bg-zinc-900 border border-zinc-800/50 hover:border-accent-purple/50 transition-colors group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="text-slate-300 font-medium whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
