"use client"
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Store",
    desc: "A modern React + Tailwind e-commerce frontend with product listing, filtering, and cart functionality.",
    tech: ["React", "Tailwind", "React-Router"],
    code: "https://github.com/akashkumar7050/PrinVick-Ecommerce-.git",
  },
  {
    title: "Employwise",
    desc: "A React-based frontend application that connects with the ReqRes API to manage employee data. Features include user login, employee listing, editing, and deletion with a clean UI and smooth user experience.",
    tech: ["React"],
    code: "https://github.com/akashkumar7050/Employee-Wise.git",
  }


];

const Project = () => {
  return (
    <section className="w-full h-full bg-gradient-to-tr from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-[37px] px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold 
                       bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                       bg-clip-text text-transparent drop-shadow-lg">
          Projects
        </h2>
        <p className="text-gray-300 mt-4 text-base md:text-lg">
          Here are some of the real-world projects I’ve built
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
            <p className="text-gray-400 text-sm mb-3">{project.desc}</p>
            <p className="text-sm text-purple-300 mb-4">
              Tech: {project.tech.join(", ")}
            </p>
            <div className="flex justify-between items-center">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
              >
                Live <FaExternalLinkAlt className="inline-block" />
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white text-sm flex items-center gap-1"
              >
                Code <FaGithub className="inline-block" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Project;
