import React from "react";
import { motion } from "framer-motion";

function About() {
  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Cups of Coffee", value: "500+" },
  ];

  return (
    <section id="about" className="py-20 relative bg-primary">
       <div className="container mx-auto px-6">
        <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 blur-[100px] -z-10"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                About <span className="text-accent-purple">Me</span>
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4 text-slate-400 leading-relaxed"
              >
                <p>
                  Hello! I'm Valentinus, a frontend developer based in the vibrant city of Yogyakarta, Indonesia. My journey into web development began with
                  a deep fascination for how beautiful design and powerful technology can merge to create incredible user experiences.
                </p>
                <p>
                  I specialize in building modern and clean web interfaces using technologies like React and Next.js. I prioritize
                  clean code, performance, and accessibility in every project I touch.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className={`${index === 2 ? "col-span-2" : ""} bg-zinc-900/50 p-6 rounded-2xl border border-white/5 hover:border-accent-purple/30 transition-colors text-center shadow-lg`}
                >
                  <h3 className="text-4xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-sm text-slate-500 uppercase tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
