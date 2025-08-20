import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { BsLockFill } from "react-icons/bs";

import project1Image from "../assets/pms.png";
import project2Image from "../assets/pln.png";
import project3Image from "../assets/kkn.png";
import project4Image from "../assets/telkom.png";
import project5Image from "../assets/maggit.png";
import project6Image from "../assets/dti.png";

const projects = [
  {
    title: "Property Management System",
    description: "A comprehensive web application for managing hospitality services, including booking, customer profiles, and analytics.",
    image: project1Image,
    tags: ["Next", "Tailwind CSS", "TSX", "Shadcn", "MUI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Web App for PLN Batam",
    description: "A web application for PLN Batam's internal use, focusing on finances and fare calculation.",
    image: project2Image,
    tags: ["Next", "Tailwind CSS", "React Component", "MUI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Maggit - Mobile App Dashboard",
    description: "A mobile app dashboard for IoT devices for real-time data monitoring used for maggot cultivation.",
    image: project5Image,
    tags: ["React Native", "JavaScript", "TSX", "Firebase"],
    liveUrl: "#",
    githubUrl: "https://github.com/heintzz/maggit.git",
  },
  {
    title: "Pesona Plumbungan Website",
    description: "A profile website for a tourist village in Pacitan, showcasing its attractions, history, and visitor information.",
    image: project3Image,
    tags: ["React", "Tailwind CSS", "JavaScript", "JSX"],
    liveUrl: "https://pesona-plumbungan.vercel.app/",
    githubUrl: "https://github.com/ValentinusRosari/pesona-plumbungan.git",
  },
  {
    title: "SD-WAN CENTER Dashboard",
    description: "An admin dashboard for managing SD-WAN networks, providing real-time data visualization and management tools.",
    image: project4Image,
    tags: ["React", "Component-based Design"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "University Chatbot",
    description: "A chatbot designed to assist students and staff with university-related queries, utilizing machine learning and NLP.",
    image: project6Image,
    tags: ["HTML", "CSS", "JS", "Python", "Flask"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-secondary py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white">My Projects</h2>
          <p className="text-lg text-gray-400 mt-2">A selection of my recent work.</p>
          <div className="w-24 h-1 bg-accent-1 mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => {
            const hasLiveUrl = project.liveUrl && project.liveUrl !== "#";
            const hasGithubUrl = project.githubUrl && project.githubUrl !== "#";
            const areLinksAvailable = hasLiveUrl || hasGithubUrl;

            return (
              <div key={index} className="bg-primary rounded-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transform transition-transform duration-500 md:group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-primary/70 hidden md:flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    {hasLiveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-accent-1 transition-colors p-2 text-4xl"
                        title="Live Demo"
                      >
                        <CgWebsite />
                      </a>
                    )}
                    {hasGithubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-accent-1 transition-colors p-2 text-4xl"
                        title="GitHub Repository"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {!areLinksAvailable && (
                      <div className="flex flex-col items-center text-white text-center">
                        <BsLockFill size={32} className="mb-2" />
                        <span className="font-semibold">Access Restricted</span>
                        <span className="text-sm text-gray-400">Due to NDA</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-secondary text-accent-2 text-sm font-semibold px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex md:hidden items-center gap-4 pt-4 border-t border-secondary/50">
                    {areLinksAvailable ? (
                      <>
                        {hasLiveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-accent-1 hover:underline"
                          >
                            <CgWebsite size={20} /> Live
                          </a>
                        )}
                        {hasGithubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-accent-1 hover:underline"
                          >
                            <FaGithub size={20} /> Source
                          </a>
                        )}
                      </>
                    ) : (
                      <div className="flex items-center gap-2 text-gray-500">
                        <BsLockFill size={16} />
                        <span>Access Restricted</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Projects;
