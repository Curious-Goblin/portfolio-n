import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeButton, setActiveButton] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionsRef = useRef({
    work: null,
    about: null,
    experience: null,
    contact: null,
  });

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    function updateSize() {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveButton(entry.target.id);
        }
      });
    }, options);

    Object.keys(sectionsRef.current).forEach((key) => {
      const section = document.getElementById(key);
      if (section) {
        sectionsRef.current[key] = section;
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const menuVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 }
  };

  return (
    <div className={`fixed z-50 w-screen bg-bgColor ${isScrolling ? isOpen ? '' : 'transition-all duration-500 ease-in-out bg-bgColor/10 backdrop-blur-md' : ''}`}>
      <div className="flex justify-center items-center md:px-8 w-full">
        <div className="hidden md:flex gap-12 items-center justify-center h-28 2xl:h-36 text-stone-200 z-10 text-lg transition-all duration-500 ease-in-out">
          <a href="#work">
            <div
              onClick={() => handleButtonClick('work')}
              className={`${activeButton === 'work' ? 'border-gray-700 border px-3 py-2 rounded-lg' : ''}`}
            >
              Work
            </div>
          </a>
          <a href="#about">
            <div
              onClick={() => handleButtonClick('about')}
              className={`${activeButton === 'about' ? 'border-gray-700 border px-3 py-2 rounded-lg' : ''}`}
            >
              About
            </div>
          </a>
          <a href="#experience">
            <div
              onClick={() => handleButtonClick('experience')}
              className={`${activeButton === 'experience' ? 'border-gray-700 border px-3 py-2 rounded-lg' : ''}`}
            >
              Experience
            </div>
          </a>
          <a href="#contact">
            <div
              onClick={() => handleButtonClick('contact')}
              className={`gradient-text ${activeButton === 'contact' ? 'border-gray-700 border px-3 py-2 rounded-lg' : ''}`}
            >
              Contact
            </div>
          </a>
        </div>
        <div className="md:hidden h-28 flex items-end justify-end w-full p-4">
          <button onClick={handleOpen} aria-label="Toggle menu" className="mb-4">
            {isOpen ? (
              <svg width="38" height="29" viewBox="0 0 38 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4.40643" y="26.6379" width="37.333" height="3" transform="rotate(-45 4.40643 26.6379)" fill="#D9D9D9" />
                <rect x="7.66577" y="0.711182" width="36" height="3" transform="rotate(45 7.66577 0.711182)" fill="#D9D9D9" />
              </svg>
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
      {isMobile && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="flex flex-col gap-6 bg-bgColor absolute top-full w-full left-0 z-20 p-4"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <a href="#work" className="z-10">
                <div
                  onClick={() => handleButtonClick('work')}
                  className={`inline-block text-white px-3 py-2 ${activeButton === 'work' ? 'border-gray-700 border px-3 py-2 rounded-lg' : ''}`}>
                  Work
                </div>
              </a>
              <a href="#about-1" className="z-10" >
                <div
                  onClick={() => handleButtonClick('about-1')}
                  className={`inline-block text-white px-3 py-2 ${activeButton === 'about-1' ? 'border-gray-700 border px-3 py-2 rounded-lg' : ''}`}>
                  About
                </div>
              </a>
              <a href="#experience-1" className="z-10" >
                <div
                  onClick={() => handleButtonClick('experience-1')}
                  className={`inline-block text-white px-3 py-2 ${activeButton === 'experience-1' ? 'border-gray-700 border px-3 py-2 rounded-lg' : ''}`}>
                  Experience
                </div>
              </a>
              <a href="#contact-1" className="z-10" >
                <div
                  onClick={() => handleButtonClick('contact-1')}
                  className={`inline-block gradient-text px-3 py-2 ${activeButton === 'contact-1' ? 'border-gray-700 border px-3 py-2 rounded-lg' : ''}`}>
                  Contact
                </div>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

      )}
    </div>
  );
}