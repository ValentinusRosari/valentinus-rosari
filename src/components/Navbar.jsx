import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary/80 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-black text-accent-1">
          VR
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-accent-1 transition-colors duration-300">
              {link.label}
            </a>
          ))}
          <div className="w-px h-6 bg-gray-600"></div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ValentinusRosari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-1 transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/valentinus-rosari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-1 transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com/valentinus.rosari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-1 transition-colors duration-300"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <HiX size={30} /> : <HiOutlineMenuAlt3 size={30} />}
          </button>
        </div>
      </nav>

      <div
        className={`
          md:hidden bg-secondary overflow-hidden transition-all duration-300 ease-in-out
          ${isMenuOpen ? "max-h-screen py-8" : "max-h-0"}
        `}
      >
        <div className="flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-accent-1 text-lg py-3 transition-colors duration-300"
              onClick={toggleMenu}
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-8 mt-6">
            <a
              href="https://github.com/ValentinusRosari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-1 transition-colors duration-300"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/valentinus-rosari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-1 transition-colors duration-300"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://instagram.com/valentinus.rosari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-1 transition-colors duration-300"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
