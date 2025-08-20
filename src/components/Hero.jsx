import React from "react";
import profilePhoto from "../assets/foto.jpg";

function Hero() {
  return (
    <section className="pt-24 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="justify-self-center md:order-last">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-accent-1 rounded-full blur-2xl opacity-40"></div>
              <img src={profilePhoto} alt="Valentinus Rosari" className="relative w-full h-full object-cover rounded-full" />
            </div>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl text-gray-300 font-bold mb-5">Hi there 👋</h2>
            <div className="flex items-center justify-center md:justify-start text-3xl sm:text-4xl lg:text-5xl mb-5 gap-4">
              <h1 className="font-bold text-gray-300">I'm</h1>
              <h1 className="font-black text-accent-1">Valentinus Rosari</h1>
            </div>
            <div className="flex items-center justify-center md:justify-start text-3xl sm:text-4xl lg:text-5xl mb-10 gap-4">
              <h1 className="font-bold text-gray-300">a</h1>
              <h1 className="font-black text-white">Frontend Developer</h1>
            </div>
            <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto md:mx-0">
              Based in Yogyakarta, Indonesia, I'm a Frontend Developer with a passion for building modern, clean, and intuitive web applications. My
              focus is always on creating an exceptional user experience.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-6">
              <a
                href="#projects"
                className="bg-accent-1 text-primary font-semibold py-3 px-8 rounded-full hover:bg-accent-2 transition-colors duration-300"
              >
                View My Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
