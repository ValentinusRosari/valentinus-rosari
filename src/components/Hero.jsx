import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function Hero() {
  return (
    <section className="py-40">
      <div className="container mx-auto text-left">
        <h2 className="text-4xl text-gray-300 font-bold mb-5">Hi there 👋</h2>
        <div className="flex text-6xl  mb-5 gap-4">
          <h1 className=" font-bold text-gray-300">I'm </h1>
          <h1 className=" font-black text-accent-1">Valentinus Rosari</h1>
        </div>
        <div className="flex text-6xl  mb-5 gap-4">
          <h1 className=" font-bold text-gray-300">a </h1>
          <h1 className=" font-black text-white">Frontend Developer</h1>
        </div>
        <p className="text-xl text-gray-300 mb-10">
          based in Yogyakarta, Indonesia. I love crafting modern and clean web interfaces that prioritize a seamless user experience.
        </p>
        <a
          href="#projects" // Ganti dengan link yang sesuai
          className="bg-accent-1 text-primary font-semibold py-3 px-8 rounded-full hover:bg-accent-2 transition-colors duration-300"
        >
          View My Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;
