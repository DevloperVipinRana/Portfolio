import React from 'react'
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa"
import { SiRedis, SiReact, SiMongodb } from "react-icons/si"

const Experience = () => {
  return (
    <div id='Experience' className='p-6 md:p-24'>
      <h1 className='text-2xl md:text-4xl text-white font-bold mb-8'>Experience</h1>
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        
        {/* Tech stack icons */}
        <div className='flex flex-wrap justify-center md:justify-start md:w-2/5 gap-6 md:p-12 py-10'>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaHtml5 color='#D34F26' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaCss3 color='#1572b6' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaReact color='#61DAFB' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaJs color='#F7DF1E' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaFigma color='#F24D1E' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <SiMongodb color='#47A248' size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <SiRedis color='#FF4438' size={50} />
          </span>
        </div>

        {/* Text section */}
        <div className='w-full md:w-[500px]'>
          <div className='text-white bg-slate-950 bg-opacity-45 rounded-lg p-4'>
            <p className="text-sm md:text-base leading-relaxed">
              I'm a frontend developer with over a year of hands-on experience in building responsive and user-friendly web applications using HTML, CSS, JavaScript, Tailwind CSS, and React.js. I’ve developed multiple real-world projects and have a solid understanding of backend technologies like Node.js, Express, and MongoDB, giving me a full-stack development perspective.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Experience
