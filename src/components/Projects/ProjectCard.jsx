import React from 'react'
import bannerImg from "../../assets/bannerImg.jpeg"

const ProjectCard = (props) => {
  return (
    <div className='p-3 md:p-6 flex flex-col w-80 md:h-110 h-106 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl'>
      <img className='p-4' src={props.img} alt="" />
      <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>
        {props.title}
      </h3>
      <p className='px-4 text-sm md:text-md leading-tight py-2'>{props.main}</p>

      {/* <div className='p-2 md:p-4 flex flex-wrap gap-2 md:gap-4'>
        <a className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]' href={props.link}>Demo</a>
        <a className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]' href={props.github}>Source code</a>
      </div> */}
      <div className='mt-auto p-2 md:p-4 flex flex-wrap gap-2 md:gap-4'>
        <a className='text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]' href={props.link}>Demo</a>
        <a className='text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]' href={props.github}>Source code</a>
      </div>
    </div>
  )
}

export default ProjectCard
