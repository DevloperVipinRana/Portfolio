import React from 'react'
import AboutImg from "../../assets/About.jpg"
import { IoArrowForward } from "react-icons/io5"

const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-slate-900 shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div>
        <h2 className='text-2xl md:text-4xl font-bold mb-8'>About</h2>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center gap-[200px]'>
            <img className='rounded md:h-80' src={AboutImg} alt="About img" />

            <ul>
                <div className='flex gap-3 py-4'>
                    <IoArrowForward size={30} className="mt-1" />

                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                        <p className='text-sm md:text-md leading-tight'>
                        Frontend Web Developer passionate about building responsive, user-friendly interfaces.
                        </p>
                    </span>
                </div>
                <div className='flex gap-3 py-4'>
                    <IoArrowForward size={30} className="mt-1" />

                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                        <p className='text-sm md:text-md leading-tight'>
                        Backend experience with Node.js, Express.js, and MongoDB for creating robust full-stack applications.
                        </p>
                    </span>
                </div>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
