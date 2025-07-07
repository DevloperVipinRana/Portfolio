import React from 'react'
import avatarImg from "../../assets/Vipin.jpg"
import TextChange from '../../TextChange'

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20">
  <div className="md:w-2/4 md:pt-10 text-center md:text-left">
    <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter justify-center md:justify-start">
      <TextChange />
    </h1>
    <p className="text-sm md:text-2xl tracking-tight mt-4">
      Passionate Frontend Web Developer skilled in JavaScript and React.js, with a strong focus
      on creating responsive and dynamic web applications. Familiar with backend development,
      ensuring full-stack collaboration and efficient project delivery.
    </p>
    <a href="#Footer">
      <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl cursor-pointer bg-[#465697]">
      Contact me
    </button>
    </a>
    <a href="../../src/assets/VipinRanaCV.pdf" download>
      <button className="ml-4 mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl cursor-pointer bg-[#465697]">
        Download Resume
      </button>
    </a>
  </div>

  <div className="mt-10 md:mt-0">
    <img
      className="w-40 h-40 md:w-[280px] md:h-[280px] rounded-full object-cover"
      src={avatarImg}
      alt="Avatar"
    />
  </div>
</div>

  )
}

export default Home
