import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  return (
    <section id="contact" className=" py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white">Get In Touch</h2>
          <p className="text-base md:text-lg text-gray-400 mt-2 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. My inbox is always open, so feel free to reach out. I'll get back to you as
            soon as I can!
          </p>
          <div className="w-24 h-1 bg-accent-1 mx-auto mt-4"></div>
        </div>

        <div className="mb-10 md:mb-12">
          <a
            href="mailto:valentinus.wastu@gmail.com"
            className="inline-flex items-center gap-3 bg-accent-1 text-primary font-bold text-lg md:text-xl py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-accent-2 transition-colors duration-300"
          >
            <HiOutlineMail className="w-6 h-6 md:w-7 md:h-7" />
            Contact Me
          </a>
        </div>

        <div className="flex justify-center items-center gap-6 md:gap-8">
          <a
            href="https://github.com/ValentinusRosari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent-1 transition-transform duration-300 hover:scale-110"
          >
            <FaGithub size={32} className="md:w-9 md:h-9" />
          </a>
          <a
            href="https://www.linkedin.com/in/valentinus-rosari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent-1 transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedin size={32} className="md:w-9 md:h-9" />
          </a>
          <a
            href="https://instagram.com/valentinus.rosari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent-1 transition-transform duration-300 hover:scale-110"
          >
            <FaInstagram size={32} className="md:w-9 md:h-9" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
