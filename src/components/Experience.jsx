import React from "react";
import { MdWork } from "react-icons/md";

// Data untuk setiap pengalaman
// Cukup edit array ini untuk menambahkan atau mengubah pengalaman Anda
const experiences = [
  {
    title: "Frontend Developer (Freelance)",
    company: "Various Clients",
    date: "2023 - Present",
    description: [
      "Developed and maintained responsive websites for various clients using modern frontend technologies.",
      "Collaborated with designers and clients to translate wireframes into high-quality, functional code.",
      "Optimized web applications for maximum speed and scalability.",
      "Implemented clean, modern user interfaces with a strong focus on user experience.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Local Tech Startup",
    date: "Jan 2023 - Jun 2023",
    description: [
      "Assisted the development team in building and testing new features for their main web application.",
      "Gained hands-on experience with Git for version control in a collaborative environment.",
      "Participated in daily stand-up meetings and sprint planning sessions.",
    ],
  },
  // Tambahkan pengalaman lain di sini
];

function Experience() {
  return (
    <section id="experience" className="bg-primary py-20 rounded-lg">
      <div className="container mx-auto px-4">
        {/* Judul Bagian */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-white">My Experience</h2>
          <p className="text-lg text-gray-400 mt-2">My professional journey so far.</p>
          <div className="w-24 h-1 bg-accent-1 mx-auto mt-4"></div>
        </div>

        {/* Kontainer Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Garis Vertikal di Tengah */}
          <div className="absolute left-1/2 w-0.5 h-full bg-secondary -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              <div className="flex items-center">
                {/* Konten (Kiri atau Kanan) */}
                <div className={`w-1/2 p-4 rounded-lg  ` + (index % 2 === 0 ? "mr-auto pr-8 text-right" : "ml-auto pl-8 text-left")}>
                  <p className="text-accent-2 font-semibold">{exp.date}</p>
                  <h3 className="text-2xl font-bold text-white mt-1">{exp.title}</h3>
                  <p className="text-lg text-gray-400 mb-4">{exp.company}</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Titik di Timeline */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1 w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-accent-1 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
