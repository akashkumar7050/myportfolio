"use client"
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiFigma, SiRedux } from "react-icons/si";

const skills = [
  {
    icon: <FaReact className="text-cyan-400 text-5xl mb-2" />,
    title: "React",
    desc: "Component-based UI & dynamic SPAs",
  },
  {
    icon: <SiJavascript className="text-yellow-400 text-5xl mb-2" />,
    title: "JavaScript",
    desc: "Logic building, ES6+, DOM manipulation",
  },
  {
    icon: <SiTailwindcss className="text-sky-400 text-5xl mb-2" />,
    title: "Tailwind CSS",
    desc: "Utility-first, fast and responsive designs",
  },
  {
    icon: <FaHtml5 className="text-orange-500 text-5xl mb-2" />,
    title: "HTML5",
    desc: "Semantic structure and accessibility",
  },
  {
    icon: <FaCss3Alt className="text-blue-500 text-5xl mb-2" />,
    title: "CSS3",
    desc: "Animations, Flex/Grid, media queries",
  },
  {
    icon: <SiRedux className="text-purple-400 text-5xl mb-2" />,
    title: "Redux",
    desc: "State management for large apps",
  },
  {
    icon: <FaGitAlt className="text-red-400 text-5xl mb-2" />,
    title: "Git",
    desc: "Version control & collaborative workflow",
  },
];

const Skills = () => {
  return (
    <section className="w-full bg-gradient-to-tr from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white py-[55.5px] px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold 
                       bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                       bg-clip-text text-transparent drop-shadow-lg">
          Skills & Tools
        </h2>
        <p className="text-gray-300 mt-4 text-base md:text-lg">
          Here are some technologies I work with regularly
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-md border flex flex-col items-center border-white/10 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center"
          >
            {skill.icon}
            <h4 className="text-lg font-semibold text-white mt-2">{skill.title}</h4>
            <p className="text-gray-400 text-sm mt-1">{skill.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
