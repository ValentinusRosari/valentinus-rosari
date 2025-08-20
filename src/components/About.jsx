import React from "react";

function About() {
  return (
    <section id="about" className="bg-secondary py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white">About Me</h2>
          <div className="w-24 h-1 bg-accent-1 mx-auto mt-4"></div>
        </div>

        <div className="md:col-span-3 text-gray-300 leading-relaxed space-y-4 text-center md:text-left">
          <p>
            Hello! I'm Valentinus, a frontend developer based in the vibrant city of Yogyakarta, Indonesia. My journey into web development began with
            a deep fascination for how beautiful design and powerful technology can merge to create incredible user experiences.
          </p>
          <p>
            Today, I specialize in building modern and clean web interfaces using technologies like React and Next.js. I am passionate about writing
            clean, efficient, and maintainable code, always ensuring that the end product is not only visually appealing but also highly functional
            and accessible.
          </p>
          <p>
            I enjoy exploring new technologies, contributing to open-source projects, and collaborating on exciting ideas. I am always eager to learn,
            grow, and take on new challenges in the ever-evolving world of web development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
