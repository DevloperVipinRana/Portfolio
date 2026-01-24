import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["About", "Experience", "Projects", "Footer"];
      let current = "";
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Find the section whose top is closest to the viewport top (within reasonable range)
          if (rect.top < 200 && rect.top > -rect.height) {
            const distance = Math.abs(rect.top - 100);
            if (distance < closestDistance) {
              closestDistance = distance;
              current = section;
            }
          }
        }
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex flex-wrap justify-between md:items-center px-6 py-4 md:px-12 fixed z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "top-4 left-4 right-4 md:left-100 md:right-100 md:px-4 md:py-3 bg-white/95 backdrop-blur-md shadow-2xl shadow-purple-500/30 rounded-full text-gray-800"
          : "top-0 left-0 right-0 bg-transparent text-white"
      }`}
    >
      <span
        className={`text-xl font-bold tracking-wide transition-all duration-500 ${
          scrolled
            ? "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            : "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        }`}
      >
        Vipin Rana
      </span>

      <div className="flex items-center gap-4">
        <ul
          className={`${
            menu ? "block" : "hidden"
          } absolute md:static left-0 right-0 top-full mt-4 md:mt-0 mx-4 md:mx-0 p-4 md:p-0 font-semibold rounded-2xl md:rounded-none text-center md:flex gap-6 transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-xl shadow-purple-500/20 text-gray-800 md:bg-transparent md:backdrop-blur-none md:shadow-none"
              : "bg-black/80 backdrop-blur-md md:bg-transparent md:backdrop-blur-none text-white"
          }`}
        >
          <a href="#About" onClick={() => { openMenu(false); setShowmenu(true); }}>
            <li
              className={`text-md transition-all duration-300 p-2 md:p-0 rounded-lg md:rounded-none md:bg-transparent ${
                scrolled ? "hover:text-purple-600 hover:bg-purple-50 md:hover:bg-transparent" : "hover:text-purple-400 hover:bg-white/10 md:hover:bg-transparent"
              } ${
                activeSection === "About"
                  ? scrolled
                    ? "text-purple-600 underline decoration-2 underline-offset-4"
                    : "text-purple-400 underline decoration-2 underline-offset-4"
                  : ""
              }`}
            >
              About
            </li>
          </a>
          <a href="#Experience" onClick={() => { openMenu(false); setShowmenu(true); }}>
            <li
              className={`text-md transition-all duration-300 p-2 md:p-0 rounded-lg md:rounded-none md:bg-transparent ${
                scrolled ? "hover:text-purple-600 hover:bg-purple-50 md:hover:bg-transparent" : "hover:text-purple-400 hover:bg-white/10 md:hover:bg-transparent"
              } ${
                activeSection === "Experience"
                  ? scrolled
                    ? "text-purple-600 underline decoration-2 underline-offset-4"
                    : "text-purple-400 underline decoration-2 underline-offset-4"
                  : ""
              }`}
            >
              Experience
            </li>
          </a>
          <a href="#Projects" onClick={() => { openMenu(false); setShowmenu(true); }}>
            <li
              className={`text-md transition-all duration-300 p-2 md:p-0 rounded-lg md:rounded-none md:bg-transparent ${
                scrolled ? "hover:text-purple-600 hover:bg-purple-50 md:hover:bg-transparent" : "hover:text-purple-400 hover:bg-white/10 md:hover:bg-transparent"
              } ${
                activeSection === "Projects"
                  ? scrolled
                    ? "text-purple-600 underline decoration-2 underline-offset-4"
                    : "text-purple-400 underline decoration-2 underline-offset-4"
                  : ""
              }`}
            >
              Projects
            </li>
          </a>
          <a href="#Footer" onClick={() => { openMenu(false); setShowmenu(true); }}>
            <li
              className={`text-md transition-all duration-300 p-2 md:p-0 rounded-lg md:rounded-none md:bg-transparent ${
                scrolled ? "hover:text-purple-600 hover:bg-purple-50 md:hover:bg-transparent" : "hover:text-purple-400 hover:bg-white/10 md:hover:bg-transparent"
              } ${
                activeSection === "Footer"
                  ? scrolled
                    ? "text-purple-600 underline decoration-2 underline-offset-4"
                    : "text-purple-400 underline decoration-2 underline-offset-4"
                  : ""
              }`}
            >
              Contact
            </li>
          </a>
        </ul>

        <a href="#Footer" className="hidden md:block">
          <button
            className={`font-semibold px-6 py-2 rounded-full transition-all duration-500 hover:scale-105 cursor-pointer ${
              scrolled
                ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:shadow-lg hover:shadow-purple-600/50"
                : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/50"
            }`}
          >
            Hire Me
          </button>
        </a>

        <div className="md:hidden">
          {showMenu ? (
            <RiMenu2Line
              size={30}
              className={`transition-all duration-300 cursor-pointer ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
              onClick={() => {
                openMenu(!menu);
                setShowmenu(!showMenu);
              }}
            />
          ) : (
            <RiCloseLine
              size={30}
              className={`transition-all duration-300 cursor-pointer ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
              onClick={() => {
                openMenu(!menu);
                setShowmenu(!showMenu);
              }}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;