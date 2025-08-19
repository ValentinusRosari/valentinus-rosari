import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  return (
    <section id="contact" className=" py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Judul Bagian */}
        <div className="mb-12">
          <h2 className="text-4xl font-black text-white">Get In Touch</h2>
          <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. My inbox is always open, so feel free to reach out. I'll get back to you as
            soon as I can!
          </p>
          <div className="w-24 h-1 bg-accent-1 mx-auto mt-4"></div>
        </div>

        {/* Tombol Email */}
        <div className="mb-12">
          <a
            href="mailto:emailanda@contoh.com" // Ganti dengan alamat email Anda
            className="inline-flex items-center gap-3 bg-accent-1 text-primary font-bold text-xl py-4 px-8 rounded-lg hover:bg-accent-2 transition-colors duration-300"
          >
            <HiOutlineMail size={28} />
            Say Hello
          </a>
        </div>

        {/* Ikon Sosial Media */}
        <div className="flex justify-center items-center gap-8">
          <a
            href="https://github.com/ValentinusRosari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent-1 transition-transform duration-300 hover:scale-110"
          >
            <FaGithub size={36} />
          </a>
          <a
            href="https://www.linkedin.com/in/valentinus-rosari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent-1 transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedin size={36} />
          </a>

          <a
            href="https://instagram.com/valentinus.rosari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent-1 transition-colors duration-300"
          >
            <FaInstagram size={36} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
