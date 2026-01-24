import React, { useState, useEffect } from 'react'
import Lottie from 'lottie-react'
import { MdOutlineEmail } from "react-icons/md"
import { CiLinkedin } from "react-icons/ci"
import { FaGithub, FaInstagram, FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/contact.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, []);

  const contactCards = [
    {
      icon: <MdOutlineEmail size={24} />,
      title: "Email",
      value: "vipinranavip97@gmail.com",
      link: "mailto:vipinranavip97@gmail.com",
      label: "Send message"
    },
    {
      icon: <CiLinkedin size={24} />,
      title: "LinkedIn",
      value: "vipin-rana",
      link: "https://www.linkedin.com/in/vipin-rana-6478a224a/",
      label: "Connect"
    },
    {
      icon: <FaGithub size={24} />,
      title: "GitHub",
      value: "DevloperVipinRana",
      link: "https://github.com/DevloperVipinRana",
      label: "View code"
    },
    {
      icon: <FaInstagram size={24} />,
      title: "Instagram",
      value: "@vpnxrana",
      link: "https://www.instagram.com/vpnxrana",
      label: "Follow"
    },
    {
      icon: <FaPhoneAlt size={20} />,
      title: "Phone",
      value: "+91 8865013373",
      link: "tel:+918865013373",
      label: "Call me"
    }
  ];

  return (
    <div id='Footer' className='relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white py-12 md:py-20 px-6 md:px-12 overflow-hidden'>
      {/* Lottie Background Animation */}
      {animationData && (
        <div className="absolute inset-0 w-full h-full opacity-15 pointer-events-none flex items-center justify-center" style={{ zIndex: 0 }}>
          <Lottie 
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: '80%', height: '80%', maxWidth: '800px' }}
          />
        </div>
      )}

      <div className='relative max-w-7xl mx-auto' style={{ zIndex: 1 }}>
        {/* Header Section */}
        <div className='text-center mb-8 md:mb-12'>
          <h1 className='text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
            Connect / Get in Touch
          </h1>
          <p className='text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed px-4'>
            I&apos;m always open to discussing new ideas, projects, or opportunities. If you&apos;d like to collaborate or just say hello, my inbox is always open — I&apos;d love to connect!
          </p>
        </div>

        {/* Contact Cards Grid - Arranged to show center animation */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 mb-8 md:mb-10'>
          {contactCards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              target={card.link.startsWith('http') ? '_blank' : '_self'}
              rel={card.link.startsWith('http') ? 'noopener noreferrer' : ''}
              className='group relative bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:scale-105 cursor-pointer overflow-hidden'
            >
              {/* Gradient overlay on hover */}
              <div className='absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-300 rounded-xl'></div>
              
              <div className='relative z-10'>
                {/* Icon */}
                <div className='bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 mx-auto'>
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className='text-base md:text-lg font-bold mb-1 text-center bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent'>
                  {card.title}
                </h3>

                {/* Value */}
                <p className='text-xs md:text-sm text-gray-300 mb-2 break-words text-center'>
                  {card.value}
                </p>

                {/* Label with arrow */}
                <div className='flex items-center justify-center gap-1 text-xs font-semibold text-purple-400 group-hover:text-pink-400 transition-colors duration-300'>
                  <span>{card.label}</span>
                  <svg 
                    className='w-3 h-3 group-hover:translate-x-1 transition-transform duration-300' 
                    fill='none' 
                    stroke='currentColor' 
                    viewBox='0 0 24 24'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Section */}
        <div className='text-center pt-6 border-t border-purple-500/20'>
          <p className='text-xs md:text-sm text-gray-400'>
            © {new Date().getFullYear()} Vipin Rana. Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer