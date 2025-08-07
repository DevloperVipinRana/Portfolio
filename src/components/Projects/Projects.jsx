import React from 'react'
import ProjectCard from './ProjectCard'
import flavoro from '../../assets/flavoro.png'
import empmgtsys from '../../assets/empmgtsys.png'
import todolist from '../../assets/todolist.png'
import music from '../../assets/music.png'
import chatapp from '../../assets/chatapp.png'

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-12 px-8 flex flex-wrap gap-5'>
        <ProjectCard title="Syncronus-Real time Chat App" main="A real time Chat app. Tech stack used: React.js, TailwindCSS, Zustand, Socket.io, Node.js, Express, MongoDB" link="https://fullstack-chat-app-teal.vercel.app" github="https://github.com/DevloperVipinRana/fullstack-chat-app" img={chatapp} />
        <ProjectCard title="Flavoro-Food Ordering App" main="This is a food ordering app. Tech stack used: React.js, tailwindCSS" link="https://flavoro-food-app-tau.vercel.app" github="https://github.com/DevloperVipinRana/FlavoroFoodApp" img={flavoro} />
        <ProjectCard title="Employee Management System" main="This is a Employee management system App. Tech stack used: React.js, tailwindCSS" link="https://silly-florentine-125169.netlify.app" github="https://github.com/DevloperVipinRana/EmployeeManagementSystem" img={empmgtsys} />
        <ProjectCard title="Todo List App" main="This is a Todo List app. Tech stack used: React.js, tailwindCSS" link="https://todoooolisttt.netlify.app" github="https://github.com/DevloperVipinRana/TodoList" img={todolist} />
        <ProjectCard title="Music App" main="This is a Spotify like music app. Tech stack used: HTML, CSS, JavaScript" link=" https://rainbow-pavlova-2fb30c.netlify.app" github="https://github.com/DevloperVipinRana/spotify" img={music} />
      </div>
    </div>
  )
}

export default Projects
