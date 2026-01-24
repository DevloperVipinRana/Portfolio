import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className='group relative p-4 md:p-6 flex flex-col bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 shadow-xl rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.02] overflow-hidden'>
      {/* Gradient overlay on hover */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-300 rounded-2xl'></div>
      
      <div className='relative z-10'>
        {/* Image container */}
        <div className='overflow-hidden rounded-xl mb-4 bg-slate-800/50'>
          <img 
            className='w-full h-48 md:h-52 object-cover transform group-hover:scale-110 transition-transform duration-500' 
            src={props.img} 
            alt={props.title} 
          />
        </div>

        {/* Title */}
        <h3 className='text-lg md:text-xl font-bold leading-normal mb-3 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent'>
          {props.title}
        </h3>

        {/* Description */}
        <p className='text-sm md:text-base text-gray-300 leading-relaxed mb-4 line-clamp-3'>
          {props.main}
        </p>

        {/* Buttons */}
        <div className='flex flex-wrap gap-3 pt-2'>
          <a 
            className='flex-1 text-center text-white py-2 px-4 text-sm md:text-base font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105' 
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <a 
            className='flex-1 text-center text-white py-2 px-4 text-sm md:text-base font-semibold rounded-full border-2 border-purple-500 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105' 
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard