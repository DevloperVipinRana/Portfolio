import React, { useRef } from 'react'
import { IoArrowForward } from "react-icons/io5"
import { FaGraduationCap, FaCode } from "react-icons/fa"

const About = () => {
  const videoRef = useRef(null);

  return (
    <div id='About' className='relative text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-slate-900 shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 min-h-[500px]'>
      {/* Background Video */}
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
        className='absolute inset-0 w-full h-full object-cover rounded-lg opacity-30'
        style={{ zIndex: 0 }}
      >
        <source src="/bgvideo2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className='relative w-full' style={{ zIndex: 1 }}>
        <h2 className='text-3xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
          About Me
        </h2>
        
        <div className='flex flex-col gap-6 max-w-4xl mx-auto'>
          {/* Education Card */}
          <div className='group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02]'>
            <div className='flex gap-4 items-start'>
              <div className='bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300'>
                <FaGraduationCap size={28} className="text-white" />
              </div>
              <div className='flex-1'>
                <h3 className='text-xl md:text-2xl font-semibold mb-2 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent'>
                  B.Tech in Computer Science & Engineering
                </h3>
                <p className='text-sm md:text-base text-gray-300 leading-relaxed'>
                  Undergraduate student with a strong foundation in computer science fundamentals, algorithms, and software development principles.
                </p>
              </div>
            </div>
          </div>

          {/* Full Stack Developer Card */}
          <div className='group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02]'>
            <div className='flex gap-4 items-start'>
              <div className='bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300'>
                <FaCode size={28} className="text-white" />
              </div>
              <div className='flex-1'>
                <h3 className='text-xl md:text-2xl font-semibold mb-2 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent'>
                  Full Stack Developer (MERN + PostgreSQL)
                </h3>
                <p className='text-sm md:text-base text-gray-300 leading-relaxed'>
                  Proficient in building end-to-end web applications using <span className='text-purple-400 font-semibold'>MongoDB</span>, <span className='text-purple-400 font-semibold'>Express.js</span>, <span className='text-purple-400 font-semibold'>React</span>, <span className='text-purple-400 font-semibold'>Node.js</span>, and <span className='text-purple-400 font-semibold'>PostgreSQL</span>. Experienced in creating RESTful APIs, managing databases, and deploying scalable applications.
                </p>
              </div>
            </div>
          </div>

          {/* Centered Text Section */}
          <div className='text-center mt-6 space-y-4'>
            <p className='text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto'>
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold'>
                I enjoy solving real-world problems and building clean, scalable user interfaces that deliver exceptional user experiences.
              </span>
            </p>
            <p className='text-sm md:text-base text-gray-400 italic leading-relaxed max-w-2xl mx-auto'>
              When not coding, you'll find me exploring new tech, brainstorming startup ideas, or debugging things that worked perfectly yesterday.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
