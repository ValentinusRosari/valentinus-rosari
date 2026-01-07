import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { BsLockFill } from "react-icons/bs";
import { motion } from "framer-motion";

import project1 from "../assets/pms.png";
import project2 from "../assets/pln.png"; 
import project3 from "../assets/dti.png"; 
import project4 from "../assets/maggit.png";
import project5 from "../assets/kkn.png";
import project6 from "../assets/telkom.png";

const projects = [
  {
    title: "Property Management System",
    description: "A comprehensive dashboard for managing data, generating reports, and tracking KPIs for a large-scale real estate company.",
    image: project1,
    tags: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    liveUrl: "",
    githubUrl: "",
    isLarge: true,
  },
  {
    title: "Tariff Calculation App - PLN Batam",
    description: "A web application for PLN Batam's internal use, focusing on finances and fare calculation.",
    image: project2,
    tags: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "https://github.com/",
    isLarge: false,
  },
  {
    title: "Maggit Dashboard",
    description: "A mobile app dashboard for IoT devices for real-time data monitoring used for maggot cultivation.",
    image: project4,
    tags: ["React Native", "Firebase", "IoT"],
    liveUrl: "",
    githubUrl: "https://github.com/heintzz/maggit.git",
    isLarge: false,
  },
  {
    title: "Pesona Plumbungan",
    description: "A profile website for a tourist village in Pacitan, showcasing its attractions, history, and visitor information.",
    image: project5,
    tags: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://pesona-plumbungan.vercel.app/",
    githubUrl: "https://github.com/ValentinusRosari/pesona-plumbungan.git",
    isLarge: true,
  },
  {
    title: "SD-WAN Dashboard",
    description: "An admin dashboard for managing SD-WAN networks, providing real-time data visualization and management tools.",
    image: project6,
    tags: ["React", "Data Visualization"],
    liveUrl: "",
    githubUrl: "",
    isLarge: true,
  },
  {
    title: "University Chatbot",
    description: "A chatbot designed to assist students and staff with university-related queries, utilizing machine learning and NLP.",
    image: project3,
    tags: ["Python", "Flask", "NLP"],
    liveUrl: "",
    githubUrl: "",
    isLarge: false,
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 bg-primary relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
               Featured <span className="text-accent-cyan">Projects</span>
             </h2>
             <p className="text-slate-400 text-lg">
               A selection of my recent work, ranging from complex enterprise dashboards to interactive web applications.
             </p>
          </div>
          
          <a href="https://github.com/ValentinusRosari" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-accent-cyan transition-colors group">
            <span className="font-medium">View all on GitHub</span>
            <FaGithub className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const hasLiveUrl = !!project.liveUrl;
            const hasGithubUrl = !!project.githubUrl;
            const areLinksAvailable = hasLiveUrl || hasGithubUrl;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className={`group relative rounded-3xl overflow-hidden bg-secondary border border-white/5 hover:border-white/20 transition-all duration-500 ${project.isLarge ? "md:col-span-2" : "md:col-span-1"}`}
              >
                {/* Image Container */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
                  />
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                     {hasLiveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-accent-cyan hover:text-white transition-colors">
                        <CgWebsite size={20} />
                      </a>
                     )}
                     {hasGithubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors">
                        <FaGithub size={20} />
                      </a>
                     )}
                     {!areLinksAvailable && (
                        <div className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white/70 text-xs flex items-center gap-2">
                          <BsLockFill /> Private
                        </div>
                     )}
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent-purple/20 text-accent-purple border border-accent-purple/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-300 line-clamp-2 md:line-clamp-none group-hover:text-white transition-colors">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
