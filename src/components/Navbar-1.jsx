import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style.css';
import { IoMdClose } from 'react-icons/io';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const checkSmallScreen = () => window.innerWidth < 768;
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    function updateSize() {
      if (!checkSmallScreen()) {
        setIsOpen(false);
      }
    }

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize); // Clean up the event listener
  }, []);

  const menuVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 }
  };

  return (
    <div className="fixed z-50 md:pt-20 md:pb-6 w-screen bg-black flex items-center justify-center h-fit transition-all duration-500 ease-in-out">
      <div className="px-4 md:px-8 flex justify-between items-center mx-auto">
        <div className="hidden md:flex gap-2 md:gap-6 lg:gap-8 items-center justify-center text-stone-200 z-10 text-lg transition-all duration-500 ease-in-out">
          <a href="#experience">
            <div
              onClick={() => handleButtonClick('work')}
              className={`${activeButton === 'work' ? 'border-customBg border px-3 py-2 rounded-lg' : ''}`}
            >
              Work
            </div>
          </a>
          <a href="#about">
            <div
              onClick={() => handleButtonClick('about')}
              className={`${activeButton === 'about' ? 'border-customBg border px-3 py-2 rounded-lg' : ''}`}
            >
              About
            </div>
          </a>
          <a href="#work">
            <div
              onClick={() => handleButtonClick('projects')}
              className={`${activeButton === 'projects' ? 'border-customBg border px-3 py-2 rounded-lg' : ''}`}
            >
              Projects
            </div>
          </a>
          <a href="#contact">
            <div
              onClick={() => handleButtonClick('contact')}
              className={`gradient-text ${activeButton === 'contact' ? 'border-customBg border px-3 py-2 rounded-lg' : ''}`}
            >
              Contact
            </div>
          </a>
        </div>
        <div className="md:hidden w-screen opacity-50 h-36 bottom-0 right-0">
          <button onClick={handleOpen} aria-label="Toggle menu">
            {isOpen ? (
              <IoMdClose className="w-8 h-8 text-stone-200" />
            ) : (
              <svg width="38" height="26" viewBox="0 0 38 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.666992" y="0.5" width="37.333" height="3" fill="#D9D9D9" />
                <rect x="6.88916" y="11.5" width="31.1108" height="3" fill="#D9D9D9" />
                <rect x="2" y="22.5" width="36" height="3" fill="#D9D9D9" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed flex flex-col gap-6 bg-black absolute top-full w-full left-0 z-20 p-4"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <a href="#experience" className="z-10">
              <div
                onClick={handleOpen}
                onMouseEnter={() => setActiveButton('work')}
                onMouseLeave={() => setActiveButton(null)}
                className={`inline block text-white px-3 py-2 ${activeButton === 'work' ? 'border-customBg border px-3 py-2 rounded-lg' : ''}`}
              >
                Work
              </div>
            </a>
            <a href="#about" className="z-10">
              <div
                onClick={handleOpen}
                onMouseEnter={() => setActiveButton('about')}
                onMouseLeave={() => setActiveButton(null)}
                className={`inline block text-white px-3 py-2 ${activeButton === 'about' ? 'border-customBg border px-3 py-2 rounded-lg' : ''}`}
              >
                About
              </div>
            </a>
            <a href="#work" className="z-10">
              <div
                onClick={handleOpen}
                onMouseEnter={() => setActiveButton('projects')}
                onMouseLeave={() => setActiveButton(null)}
                className={`inline block text-white px-3 py-2 ${activeButton === 'projects' ? 'border-customBg border px-3 py-2 rounded-lg' : ''}`}
              >
                Projects
              </div>
            </a>
            <a href="#contact" className="z-10">
              <div
                onClick={handleOpen}
                onMouseEnter={() => setActiveButton('contact')}
                onMouseLeave={() => setActiveButton(null)}
                className={`inline block px-3 py-2 gradient-text-1 ${activeButton === 'contact' ? 'border-customBg border px-3 py-2 rounded-lg' : ''}`}
              >
                Contact
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
