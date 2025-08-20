import React from "react";

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
    title: "UI/UX Designer",
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
  return (
    <section id="experience" className="bg-primary py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white">My Experience</h2>
          <p className="text-lg text-gray-400 mt-2">My professional journey so far.</p>
          <div className="w-24 h-1 bg-accent-1 mx-auto mt-4"></div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute top-0 w-0.5 h-full bg-secondary left-5 -translate-x-1/2 md:left-1/2"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              <div className="absolute top-1 w-10 h-10 bg-secondary  rounded-full flex items-center justify-center left-5 -translate-x-1/2 md:left-1/2">
                <div className="w-5 h-5 bg-accent-1 rounded-full"></div>
              </div>

              <div
                className={
                  `w-full md:w-1/2 p-4 rounded-lg bg-secondary/30 md:bg-primary ` +
                  (index % 2 === 0 ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8 md:text-left") +
                  ` ml-auto md:ml-0 pl-16 md:pl-4`
                }
              >
                <p className="text-accent-2 font-semibold">{exp.date}</p>
                <h3 className="text-xl md:text-2xl font-bold text-white mt-1">{exp.title}</h3>
                <p className="text-lg text-gray-400 mb-4">{exp.company}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 text-left">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
