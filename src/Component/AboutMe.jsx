"use client"
import { motion } from "framer-motion";
import { FaCode, FaReact, FaDumbbell, FaSpa } from "react-icons/fa";
import { SiJavascript, SiTailwindcss,  SiHtml5, SiCss3 } from "react-icons/si";


const AboutMe = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-20 px-6 flex justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-6xl w-full grid md:grid-cols-2 gap-10 md:gap-16 items-start 
                   backdrop-blur-md bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl 
                   shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
      >
        {/* Left Section - About Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 
                         bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                         bg-clip-text text-transparent drop-shadow-md">
            <FaCode className="inline-block mr-3 text-blue-400" />
            About Me
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
            I'm <span className="text-blue-400 font-semibold">Akash Kumar</span> — a frontend developer from Bihar, merging modern design with clean code. I love creating immersive UI experiences using <span className="text-purple-400 font-medium">React</span> and <span className="text-blue-400 font-medium">Tailwind</span>.
          </p>

          <p className="text-gray-400 text-sm md:text-base">
            My day starts with <FaSpa className="inline mx-1 text-purple-300" /> meditation, followed by a powerful <FaDumbbell className="inline mx-1 text-blue-400" /> gym session, then deep focus on coding and designing clean, animated, responsive interfaces.
          </p>
        </div>

        {/* Right Section - Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="grid gap-4"
        >
          {/* Tech Stack Card */}
          <div
            className="
              bg-gradient-to-tr from-blue-900/40 to-blue-700/30
              backdrop-blur-lg
              border border-blue-400/40
              p-6 rounded-xl
              shadow-lg shadow-blue-600/30
              hover:scale-[1.05] hover:shadow-blue-500/60
              transition-transform duration-300 ease-out
              group
            "
          >
            <h4 className="text-blue-300 font-semibold text-lg mb-3 flex items-center">
              <FaReact className="mr-2 text-cyan-400" />
              Tech Stack
            </h4>
            <ul className="text-blue-100 text-sm list-disc list-inside leading-relaxed space-y-1">
              <li><SiJavascript className="inline text-yellow-400 mr-2" /> JavaScript</li>
              <li><FaReact className="inline text-cyan-400 mr-2" /> React</li>
              <li><SiTailwindcss className="inline text-sky-400 mr-2" /> Tailwind CSS</li>
              <li><SiHtml5 className="inline text-orange-500 mr-2" /> HTML5</li>
              <li><SiCss3 className="inline text-blue-500 mr-2" /> CSS3</li>
            </ul>

          </div>

          {/* Currently Card */}
          <div
            className="
              bg-gradient-to-tr from-blue-900/40 to-blue-700/30
              backdrop-blur-lg
              border border-blue-400/40
              p-6 rounded-xl
              shadow-lg shadow-blue-600/30
              hover:scale-[1.05] hover:shadow-blue-500/60
              transition-transform duration-300 ease-out
              group
            "
          >
            <h4 className="text-blue-300 font-semibold text-lg mb-3 flex items-center">
              <FaSpa className="mr-2 text-blue-400" />
              Currently
            </h4>
            <ul className="text-pink-100 text-sm list-disc list-inside leading-relaxed space-y-1">
              <li>Building full React UI apps</li>
              <li>Practicing typing for speed</li>
              <li>Studying UX & design systems</li>
              <li>Staying consistent with routine</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
