import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent-purple/20 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's work <span className="text-accent-cyan">together.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm currently available for freelance projects and open to new opportunities. 
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <a
              href="mailto:valentinus.wastu@gmail.com"
              className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-slate-200 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <HiOutlineMail size={20} />
              Say Hello
            </a>
            <a
              href="https://wa.me/6281234567890" // Replace with actual number if provided, otherwise placeholder
              target="_blank"
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all flex items-center gap-2"
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </a>
          </div>

          <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Valentinus Rosari. All rights reserved.
            </p>
            
            <div className="flex items-center gap-8">
              <SocialLink href="https://github.com/ValentinusRosari" icon={<FaGithub size={20} />} />
              <SocialLink href="https://www.linkedin.com/in/valentinus-rosari" icon={<FaLinkedin size={20} />} />
              <SocialLink href="https://instagram.com/valentinus.rosari" icon={<FaInstagram size={20} />} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
    >
      {icon}
    </a>
  );
}

export default Contact;
