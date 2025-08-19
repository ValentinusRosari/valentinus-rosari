import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

// Impor gambar proyek Anda
import project1Image from "../assets/project1.png";
import project2Image from "../assets/project2.jpg";

// Data untuk setiap proyek
const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills and projects. Designed to be fully responsive and modern.",
    image: project1Image,
    tags: ["React", "Tailwind CSS", "Vite", "Vercel"],
    liveUrl: "#", // Ganti dengan URL Vercel/Netlify Anda
    githubUrl: "#", // Ganti dengan URL repo GitHub Anda
  },
  {
    title: "E-commerce Product Page",
    description: "A responsive product page for an e-commerce site, featuring a clean design, image gallery, and interactive UI elements.",
    image: project2Image,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  // Tambahkan proyek lain di sini
];

function Projects() {
  return (
    <section id="projects" className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        {/* Judul Bagian */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-white">My Projects</h2>
          <p className="text-lg text-gray-400 mt-2">A selection of my recent work.</p>
          <div className="w-24 h-1 bg-accent-1 mx-auto mt-4"></div>
        </div>

        {/* Grid untuk Kartu Proyek */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-primary rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/50 bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-accent-1 transition-colors p-2 text-4xl"
                    title="Live Demo"
                  >
                    <CgWebsite />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-accent-1 transition-colors p-2 text-4xl"
                    title="GitHub Repository"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-secondary text-accent-2 text-sm font-semibold px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
