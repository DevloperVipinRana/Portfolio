import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import avatarImg from "../../assets/Vipin.jpg";
import TextChange from "../../TextChange";

const Home = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/profileanimation.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, []);

  return (
    <div className="relative text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20 overflow-hidden">
      {/* Lottie Background Animation */}
      {animationData && (
        <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" style={{ zIndex: 0 }}>
          <Lottie 
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      )}

      <div className="relative md:w-2/4 md:pt-10 text-center md:text-left" style={{ zIndex: 1 }}>
        <h2 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter justify-center md:justify-start bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          <TextChange />
        </h2>
        <p className="text-lg md:text-2xl tracking-tight mt-4 mb-2 text-gray-300">
          I build scalable, user-friendly web apps.
        </p>
        <p className="text-sm md:text-lg tracking-tight mt-2 text-gray-400">
          Passionate Full Stack Web Developer (MERN) with hands-on experience in
          building end-to-end web applications, RESTful APIs, and responsive
          user interfaces using React, Node.js, Express, MongoDB and PostgreSQL.
        </p>
        <div className="flex flex-row md:flex-row gap-3 md:gap-4 justify-center md:justify-start">
          <a href="#Footer">
            <button className="mt-2 md:mt-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-4 py-2 text-sm md:text-base md:px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 cursor-pointer">
              Contact Me
            </button>
          </a>
          <a href="/VipinCV.pdf" download>
            <button className="mt-2 md:mt-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-4 py-2 text-sm md:text-base md:px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 cursor-pointer">
              Download Resume
            </button>
          </a>
        </div>
      </div>

      <div className="relative mt-10 md:mt-0" style={{ zIndex: 1 }}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
        <img
          className="relative w-40 h-40 md:w-[280px] md:h-[280px] rounded-full object-cover ring-4 ring-purple-500/50"
          src={avatarImg}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Home;

