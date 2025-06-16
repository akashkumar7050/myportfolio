"use client"
import { motion } from "framer-motion"
import { FaCode } from "react-icons/fa";
import img from './imges/Porfolioimg.jpg'



const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] w-full min-h-[650px] px-6 py-20 gap-16 md:gap-0 text-white overflow-hidden">

      {/* Image Container with Glassmorphism */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
      >
        <img
          className="rounded-full h-72 w-72 border-b-4 border-b-blue-500 shadow-[0_8px_20px_rgba(59,130,246,0.4)]"
          src={img}
          alt="Profile"
        />
     
      </motion.div>

      {/* Text Content with Neon Glow & Smooth Fade */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="max-w-xl text-center md:text-left backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Welcome to My <span className="text-blue-400 drop-shadow-lg">Developer Space <FaCode className="inline-block mr-3 text-blue-400" /></span>
        </h1>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed tracking-wide">
          I craft immersive web experiences using modern frontend magic. Whether it’s a clean dashboard or a glowing Web3 UI — this is where design meets innovation.
        </p>
      </motion.div>
  
    </div>
  )
}

export default Home
