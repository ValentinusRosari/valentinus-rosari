import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 transition-all duration-300 ${isMenuOpen ? "bg-primary/90 backdrop-blur-xl h-screen top-0 pt-0 items-start" : ""}`}
    >
      <div 
        className={`glass-panel rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          isMenuOpen 
            ? "w-full rounded-none border-none bg-transparent shadow-none mt-6"
            : scrolled ? "w-full max-w-4xl shadow-lg shadow-purple-500/10" : "w-full max-w-5xl bg-transparent border-transparent backdrop-blur-none"
        }`}
      >
        <a href="/" className="text-2xl font-bold tracking-tighter text-white">
          VR<span className="text-accent-purple">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-purple transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <div className="w-px h-5 bg-white/10"></div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ValentinusRosari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-300"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/valentinus-rosari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-white focus:outline-none p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-0 right-0 p-4 md:hidden"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xl text-slate-300 hover:text-white font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col items-center gap-4 mt-4 pt-4 border-t border-white/10 w-full max-w-xs">
                 <p className="text-slate-500 text-sm">Connect with me</p>
                 <div className="flex gap-6">
                  <a href="https://github.com/ValentinusRosari" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white"><FaGithub size={24} /></a>
                  <a href="https://www.linkedin.com/in/valentinus-rosari" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white"><FaLinkedin size={24} /></a>
                  <a href="https://instagram.com/valentinus.rosari" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white"><FaInstagram size={24} /></a>
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
