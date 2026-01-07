import React from "react";
import profilePhoto from "../assets/foto.jpg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Amber Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent-purple/20 rounded-full blur-[120px] -z-10 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-cyan/10 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg md:text-xl text-accent-cyan font-medium mb-4 tracking-wide uppercase">
                Welcome
              </h2>
              <div className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight text-white">
                <h1>I'm <span className="text-gradient">Valentinus </span></h1>
                <h1 className="mt-2 text-slate-300">Frontend Dev.</h1>
              </div>
              
              <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Based in Yogyakarta, creating <span className="text-white font-medium">premium web experiences</span> with modern technologies. 
                I focus on performance, accessibility, and fluid animations.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <a
                  href="#projects"
                  className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-slate-200 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  View Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>

          {/* Image Profile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="justify-self-center order-1 md:order-2 relative group"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple to-accent-cyan rounded-full opacity-50 blur-2xl group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/5 bg-secondary">
                <img 
                  src={profilePhoto} 
                  alt="Valentinus Rosari" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0" 
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
