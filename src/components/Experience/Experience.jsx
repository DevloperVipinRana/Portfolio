import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiPostman,
  SiCplusplus,
  SiC,
  SiVercel,
  SiNetlify,
  SiRender,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationData, setAnimationData] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Fetch Lottie animation
    fetch('/experience.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));

    // Intersection Observer for scroll animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const techStack = [
    { Icon: FaHtml5, color: "#E34F26", name: "HTML5" },
    { Icon: FaCss3, color: "#1572B6", name: "CSS3" },
    { Icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
    { Icon: FaReact, color: "#61DAFB", name: "React" },
    { Icon: TbBrandReactNative, color: "#61DAFB", name: "React Native" },
    { Icon: FaNodeJs, color: "#3C873A", name: "Node.js" },
    { Icon: SiExpress, color: "#ffffff", name: "Express.js" },
    { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
    { Icon: SiPostgresql, color: "#336791", name: "PostgreSQL" },
    { Icon: FaGitAlt, color: "#F1502F", name: "Git" },
    { Icon: SiPostman, color: "#FF6C37", name: "Postman" },
    { Icon: SiVercel, color: "#ffffff", name: "Vercel" },
    { Icon: SiNetlify, color: "#00C7B7", name: "Netlify" },
    { Icon: SiRender, color: "#46E3B7", name: "Render" },
    { Icon: SiCplusplus, color: "#00599C", name: "C++" },
    { Icon: SiC, color: "#A8B9CC", name: "C" },
    { Icon: FaFigma, color: "#F24E1E", name: "Figma" },
  ];

  const experiencePoints = [
    "Full Stack MERN Developer with 1+ year of hands-on experience in building responsive and scalable web applications.",
    "Completed a 4-month internship, working on real-world projects involving both frontend and backend development.",
    "Strong experience in React.js, JavaScript, HTML, CSS, and Tailwind CSS for building modern and user-friendly interfaces.",
    "Hands-on experience with Node.js, Express.js, MongoDB and PostgreSQL for developing RESTful APIs and backend logic.",
    "Implemented authentication, authorization, CRUD operations, and API integrations.",
    "Worked closely with UI/UX designs to ensure performance, responsiveness, and clean code structure.",
    "Experienced in debugging, optimizing performance, and collaborating in team-based development environments.",
  ];

  return (
    <div id="Experience" className="relative p-6 md:p-24 overflow-hidden" ref={sectionRef}>
      {/* Lottie Background Animation */}
      {animationData && (
        <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" style={{ zIndex: 0 }}>
          <Lottie 
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      )}

      <div className="relative" style={{ zIndex: 1 }}>
        <h1 className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Experience
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Tech stack icons */}
          <div className="flex flex-wrap justify-center md:justify-start md:w-2/5 gap-4 md:gap-5 md:p-12 py-10">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`group relative p-3 bg-zinc-950 rounded-2xl cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 hover:bg-gradient-to-br hover:from-purple-900/30 hover:to-pink-900/30 ${
                  isVisible ? "animate-slideUp" : "opacity-0 translate-y-10"
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <tech.Icon color={tech.color} size={40} />
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg z-10">
                  {tech.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                    <div className="border-4 border-transparent border-t-purple-600"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Text section */}
          <div className="w-full md:w-[500px]">
            <div className="text-white bg-slate-950 bg-opacity-45 rounded-lg p-4 border border-purple-500/20">
              <ul className="list-disc pl-5 text-sm md:text-base leading-relaxed space-y-2">
                {experiencePoints.map((point, index) => (
                  <li
                    key={index}
                    className={`transition-all duration-500 hover:text-purple-300 hover:translate-x-2 cursor-default ${
                      isVisible ? "animate-slideUp" : "opacity-0 translate-y-10"
                    }`}
                    style={{
                      animationDelay: `${index * 0.15}s`,
                    }}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Experience;