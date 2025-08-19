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
    { href: "#contact", label: "Contact" }, // Nanti akan kita buat bagian contact
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary/80 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-black text-accent-1">
          VR
        </a>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-accent-1 transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Media Icons - Desktop */}
        <div className="hidden md:flex items-center gap-6">
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <HiX size={30} /> : <HiOutlineMenuAlt3 size={30} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary">
          <div className="flex flex-col items-center py-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-accent-1 py-3 transition-colors duration-300"
                onClick={toggleMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
