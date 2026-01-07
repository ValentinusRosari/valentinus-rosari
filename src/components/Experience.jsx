import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    title: "Frontend Developer",
    company: "PT Jangan Lupa Pulang",
    date: "Jul 2025 - Present",
    description: [
      "Collaborated closely with the design team to conduct comprehensive reviews and evaluations of the UI/UX design for a Property Management System.",
      "Engineered and maintained the frontend architecture for a large-scale Property Management System using modern web technologies.",
    ],
  },
  {
    title: "Frontend Developer (Outsource)",
    company: "PT PLN Batam",
    date: "Jan 2025 - Feb 2025",
    description: [
      "Developed a web application for PLN Batam's internal use, focusing on enhancing operational efficiency and user experience.",
      "Implemented responsive design principles to ensure optimal performance across various devices and screen sizes.",
    ],
  },
  {
    title: "Frontend & Network Engineer Intern",
    company: "PT Telkom Indonesia Tbk",
    date: "Jan 2024 - Feb 2024",
    description: [
      "Designed and built a comprehensive admin dashboard that empowered the management division with tools for monitoring and reporting.",
      "Engineered a real-time data visualization dashboard to process and display complex SD-WAN log data.",
    ],
  },
  {
    title: "Junior UI/UX Designer & Fullstack Developer",
    company: "PT Jangan Lupa Pulang",
    date: "Jan 2024 - Jun 2024",
    description: [
      "Led the end-to-end UI/UX design process for a hospitality web application, creating intuitive wireframes and high-fidelity mockups.",
      "Architected the application's foundational structure, ensuring a scalable and efficient system.",
    ],
  },
  {
    title: "Frontend & AI Engineer Intern",
    company: "Universitas Gadjah Mada IT Department",
    date: "Jul 2023 - Des 2023",
    description: [
      "Designed and deployed a university-wide chatbot for UGM using machine learning and Natural Language Processing (NLP).",
      "Engineered an advanced facial and emotion detection application by implementing computer vision and deep learning models.",
    ],
  },
];

function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 bg-primary relative" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
            Experience
          </h2>
          <p className="text-slate-400 mt-4 text-lg">My professional journey so far.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 -translate-x-1/2 transform origin-top"></div>
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-accent-purple via-accent-cyan to-transparent -translate-x-1/2 origin-top"
          ></motion.div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-16 md:flex ${index % 2 === 0 ? "flex-row-reverse" : ""} items-center`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary border-2 border-accent-purple rounded-full z-10 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>

              {/* Date (for desktop) */}
              <div className={`hidden md:block w-1/2 px-12 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                <span className="text-accent-cyan font-mono text-sm tracking-widest uppercase">{exp.date}</span>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                 <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
                   <div className="md:hidden mb-2 text-accent-cyan font-mono text-xs tracking-widest uppercase">{exp.date}</div>
                   <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent-purple transition-colors">{exp.title}</h3>
                   <p className="text-slate-400 mb-4 font-medium">{exp.company}</p>
                   <ul className="space-y-2">
                    {exp.description.map((point, i) => (
                      <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                        <span className="text-accent-purple mt-1.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                   </ul>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
