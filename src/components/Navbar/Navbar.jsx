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
          } mx-24 p-y2 mt-4 font-semibold md:mt-0 px-2 rounded-xl text-center md:static md:mx-0 md:flex gap-6 ${
            scrolled
              ? "bg-gray-100 md:bg-transparent"
              : "bg-black bg-opacity-30 md:bg-transparent"
          }`}
        >
          <a href="#About">
            <li
              className={`text-md transition-all duration-300 p-1 md:p-0 ${
                scrolled ? "hover:text-purple-600" : "hover:text-purple-400"
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
          <a href="#Experience">
            <li
              className={`text-md transition-all duration-300 p-1 md:p-0 ${
                scrolled ? "hover:text-purple-600" : "hover:text-purple-400"
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
          <a href="#Projects">
            <li
              className={`text-md transition-all duration-300 p-1 md:p-0 ${
                scrolled ? "hover:text-purple-600" : "hover:text-purple-400"
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
          <a href="#Footer">
            <li
              className={`text-md transition-all duration-300 p-1 md:p-0 ${
                scrolled ? "hover:text-purple-600" : "hover:text-purple-400"
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

        {showMenu ? (
          <RiMenu2Line
            size={30}
            className={`md:hidden absolute right-6 top-6 transition-all duration-300 ${
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
            className={`md:hidden absolute right-6 top-6 transition-all duration-300 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
            onClick={() => {
              openMenu(!menu);
              setShowmenu(!showMenu);
            }}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;