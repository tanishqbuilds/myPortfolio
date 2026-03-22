import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaBriefcase, FaCode, FaRocket } from "react-icons/fa";
import Moonsign from "../assets/moonsign.png";
import V2VLogo from "../assets/v2v.png";
import AntmindLogo from "../assets/antmind.png";



const internshipData = [
  {
    company: "Antmind Ventures",
    role: "Fullstack Developer Intern",
    period: "Jan 2024 - Present",
    description: "Fullstack Developer on App Moonsign. Enhanced core features, implemented complex logic using LangChain for AI capabilities, and led the styling and web development of the platform.",
    technologies: ["Next.js", "React Native", "Nestjs", "LangChain", "Docker"],
    project: "Moonsign",
    imgSrc: AntmindLogo,
    ongoing: true
  },
  {
    company: "V2V Edtech LLP",
    role: "Fullstack Developer Intern",
    period: "2024 (3 Months)",
    description: "Developed 'Filmzo', an OTT platform for streaming movies and TV shows. Responsible for end-to-end development using HTML, JS, CSS, and PHP, focused on video streaming performance.",
    technologies: ["HTML", "JavaScript", "CSS", "PHP"],
    project: "Filmzo",
    imgSrc: V2VLogo,
    ongoing: false
  }
];



const Internships = () => {
  return (
    <section className="py-20 px-6">
      <Helmet>
        <title>Internships | Tanishq Kulkarni - Professional Experience</title>
        <meta name="description" content="Explore Tanishq Kulkarni's internship experiences at Antmind Ventures and key projects like Moonsign and Filmzo. Professional full-stack development journey." />
      </Helmet>
      
      <div className="flex flex-col items-center mb-16">
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Professional <span className="text-[#00c2ff]">Experience</span>
        </motion.h2>
        <div className="w-24 h-1 bg-[#00c2ff] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {internshipData.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row bg-[#1c1c1c] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#00c2ff]/50 transition-all duration-300 shadow-xl"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Image Section */}
            <div className="w-full md:w-2/5 relative group h-64 md:h-auto flex items-center justify-center p-8 bg-gradient-to-br from-[#131313] via-[#1c1c1c] to-[#131313] overflow-hidden">
              <img 
                src={item.imgSrc} 
                alt={item.company} 
                className="max-h-40 w-auto object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(0,194,255,0.2)]"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
              {item.ongoing && (
                <div className="absolute top-4 left-4 bg-green-500/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse z-20 shadow-lg">
                  ONGOING
                </div>
              )}
            </div>



            {/* Content Section */}
            <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <FaBriefcase className="text-[#00c2ff] text-xl" />
                <h3 className="text-2xl font-bold text-white">{item.company}</h3>
              </div>
              <p className="text-[#00c2ff] font-semibold mb-4 flex items-center gap-2">
                <FaCode /> {item.role} | <span className="text-gray-400 font-normal">{item.period}</span>
              </p>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                {item.description}
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <FaRocket className="text-yellow-500" /> Key Project: {item.project}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-[#2a2a2a] text-gray-300 px-4 py-1.5 rounded-full text-sm border border-gray-700 hover:border-[#00c2ff] hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Internships;
