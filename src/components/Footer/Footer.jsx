import React from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { CiLinkedin } from "react-icons/ci"
import { FaGithub, FaInstagram, FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <div id='Footer' className='flex flex-col md:flex-row justify-around bg-[#465697] text-white min-h-[180px] p-6 md:p-12 items-center gap-6 md:gap-0'>
      
      {/* Contact Heading */}
      <div className='text-center md:text-left'>
        <h1 className='text-2xl md:text-5xl font-bold'>Contact</h1>
        <h3 className='text-sm md:text-xl font-normal'>Feel free to reach out!</h3>
      </div>

      {/* Links */}

      <div className='flex flex-row md:gap-16 gap-4'>
        <ul className='text-sm md:text-lg space-y-2'>
        <li className='flex items-center gap-2'>
          <MdOutlineEmail size={20} />
          <a href="mailto:vipinranavip97@gmail.com" className="hover:underline">
            vipinranavip97@gmail.com
          </a>
        </li>

        <li className='flex items-center gap-2'>
          <CiLinkedin size={20} />
          <a href="https://www.linkedin.com/in/vipin-rana" target="_blank" rel="noopener noreferrer" className="hover:underline">
            vipin-rana
          </a>
        </li>

        <li className='flex items-center gap-2'>
          <FaGithub size={20} />
          <a href="https://github.com/DevloperVipinRana" target="_blank" rel="noopener noreferrer" className="hover:underline">
            DevloperVipinRana
          </a>
        </li>
      </ul>

      <ul className='text-sm md:text-lg space-y-2'>
        <li className='flex items-center gap-2'>
          <FaInstagram size={20} />
          <a href="https://www.instagram.com/vipinrana9" target="_blank" rel="noopener noreferrer" className="hover:underline">
            @vipinrana9
          </a>
        </li>

        <li className='flex items-center gap-2'>
          <FaPhoneAlt size={18} />
          <a href="tel:+918865013373" className="hover:underline">
            +91 8865013373
          </a>
        </li>
      </ul>
      </div>

    </div>
  )
}

export default Footer
