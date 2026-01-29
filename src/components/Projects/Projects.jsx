import React, { useRef } from 'react'
import ProjectCard from './ProjectCard'
import flavoro from '../../assets/flavoro.png'
import empmgtsys from '../../assets/empmgtsys.png'
import todolist from '../../assets/todolist.png'
import music from '../../assets/music.png'
import chatapp from '../../assets/chatapp.png'
import foodview from '../../assets/food-view.png'

const Projects = () => {
  const videoRef = useRef(null);

  return (
    <div id='Projects' className='relative p-10 md:p-24 text-white overflow-hidden min-h-screen'>
      {/* Background Video */}
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
        className='absolute inset-0 w-full h-full object-cover opacity-20'
        style={{ zIndex: 0 }}
      >
        <source src="/projects2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className='relative' style={{ zIndex: 1 }}>
        <h1 className='text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
          Projects
        </h1>
        <div className='py-12 px-0 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          <ProjectCard 
            title="Syncronus-Real time Chat App" 
            main="A real time Chat app. Tech stack used: React.js, TailwindCSS, Zustand, Socket.io, Node.js, Express, MongoDB" 
            link="https://fullstack-chat-app-teal.vercel.app" 
            github="https://github.com/DevloperVipinRana/fullstack-chat-app" 
            img={chatapp} 
          />
          <ProjectCard 
            title="Flavoro-Food Ordering App" 
            main="This is a food ordering app. Tech stack used: React.js, tailwindCSS" 
            link="https://flavoro-food-app-tau.vercel.app" 
            github="https://github.com/DevloperVipinRana/FlavoroFoodApp" 
            img={flavoro} 
          />
          <ProjectCard 
            title="Employee Management System" 
            main="This is a Employee management system App. Tech stack used: React.js, tailwindCSS" 
            link="https://silly-florentine-125169.netlify.app" 
            github="https://github.com/DevloperVipinRana/EmployeeManagementSystem" 
            img={empmgtsys} 
          />
          <ProjectCard 
            title="Todo List App" 
            main="This is a Todo List app. Tech stack used: React.js, tailwindCSS" 
            link="https://todoooolisttt.netlify.app" 
            github="https://github.com/DevloperVipinRana/TodoList" 
            img={todolist} 
          />
          <ProjectCard 
            title="Music App" 
            main="This is a Spotify like music app. Tech stack used: HTML, CSS, JavaScript" 
            link="https://rainbow-pavlova-2fb30c.netlify.app" 
            github="https://github.com/DevloperVipinRana/spotify" 
            img={music} 
          />
          <ProjectCard 
            title="Food View" 
            main="This is a Reel style food view app. Tech stack used: React.js, CSS, Node.js, MongoDB" 
            link="" 
            github="https://github.com/DevloperVipinRana/Food-View" 
            img={foodview} 
          />
        </div>
      </div>
    </div>
  )
}

export default Projects