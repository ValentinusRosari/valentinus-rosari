import React from "react";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiVercel } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const techStacks = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next", icon: <RiNextjsFill className="text-white" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
    ],
  },
  {
    category: "Database",
    items: [{ name: "MongoDB", icon: <SiMongodb className="text-green-600" /> }],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
    ],
  },
];

function TechStack() {
  return (
    <section id="tech-stack" className="bg-primary py-16 md:py-20 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white">My Tech Stack</h2>
          <p className="text-lg text-gray-400 mt-2">Technologies I use to build powerful web applications.</p>
          <div className="w-24 h-1 bg-accent-1 mx-auto mt-4"></div>
        </div>

        <div className="space-y-12">
          {techStacks.map((stack) => (
            <div key={stack.category}>
              <h3 className="text-xl md:text-2xl font-bold text-accent-2 mb-6 text-center md:text-left">{stack.category}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 md:gap-8">
                {stack.items.map((item) => (
                  <div
                    key={item.name}
                    className="
                      flex flex-col items-center justify-center p-4 
                      bg-secondary rounded-lg 
                      hover:ring-2 hover:ring-accent-1 
                      hover:shadow-lg hover:shadow-accent-1/50 
                      transition-all duration-300
                    "
                  >
                    <div className="text-4xl md:text-5xl mb-2">{item.icon}</div>
                    <p className="text-gray-300 text-sm text-center">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
