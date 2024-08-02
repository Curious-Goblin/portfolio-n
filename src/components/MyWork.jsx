import { useInView } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Work = () => {
  const refs = useRef([]);
  const [inView, setInView] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const enterTransition = {
    duration: 0.2,
    ease: [0, 0.71, 0.2, 1.01],
  };

  const exitTransition = {
    duration: 0.5, // Slower duration for exiting
    ease: [0.4, 0.0, 0.2, 1], // Custom ease for a slower effect
  };

  const transition = {
    enter: enterTransition,
    exit: exitTransition,
  };

  const projects = [
    {
      title: 'AI Website',
      year: '2024 - User Interface Design',
      description:
        'Transformed an AI website deepshape.tech with a modern redesign, optimizing the User Interface of the website and elevating brand identity. Resulted in improved user engagement, increased Readability, and a seamless Visual experience.',
      image:
        'https://res.cloudinary.com/dgp2hrhld/image/upload/v1720353086/file_cover_-_2_g3vlki.png',
      buttonText: 'Read case study',
      caseLink:
        'https://www.behance.net/gallery/190880591/Web-UI-Design-Deespshape-(Artificial-intelligence)',
    },
    {
      title: 'Food Delivery App',
      year: '2023 - Product Design',
      description:
        'Designed a user-friendly food delivery app that enables users to effortlessly order their favourite meals. The app offers a seamless experience for browsing restaurants and also selecting dishes, and managing orders, making meal planning convenient and enjoyable.',
      image:
        'https://res.cloudinary.com/dgp2hrhld/image/upload/v1720353108/Frame_3_k52oa9.png',
      buttonText: 'Read case study',
      caseLink:
        'https://www.behance.net/gallery/179536033/UIUX-Case-Study-on-Food-Delivery-App',
    },
    {
      title: 'AI Trading Web App',
      year: '2024 - Web/App design',
      description:
        "Developed an intuitive AI-powered trading platform UI for QuantBrian. The platform offers a vast array of market data, seamless trade execution, and personalized AI-driven recommendations, significantly enhancing the user's trading experience.",
      image:
        'https://res.cloudinary.com/dgp2hrhld/image/upload/v1720353070/4_tghoji.png',
      buttonText: 'Read case study',
      caseLink:
        'https://www.figma.com/design/gb97IsFHIJOwYY9g5sAMST/QuantBrain?node-id=0-1&t=f3O5u1EtAbyPzdDx-1',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView((prevInView) => {
            const updatedInView = [...prevInView];
            updatedInView[entry.target.dataset.index] = entry.isIntersecting;
            return updatedInView;
          });
        });
      },
      { threshold: 0.5 }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      refs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  const renderProjectCards = (projectsToRender) => {
    return projectsToRender.map((project, index) => (
      <motion.div
        key={index}
        ref={(el) => (refs.current[index] = el)}
        data-index={index}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView[index] ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={inView[index] ? transition.enter : transition.exit}
      >
        <ProjectCard {...project} />
      </motion.div>
    ));
  };

  return (
    <div
      id="work"
      className="w-full text-left mx-auto px-10 md:px-20 lg:px-36 pt-36 md:pt-24 lg:pt-36"
    >
      <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-6 md:mb-8 lg:mb-9">
        My Work
      </h1>
      <p className="text-textColor text-base md:text-lg lg:text-xl w-full max-w-2xl md:max-w-3xl lg:max-w-5xl mr-10 mb-10 md:mb-14 lg:mb-16">
        Here's a glimpse of some of my recent and exciting projects. Each of them
        reflects my focus on user-centered design and my commitment to excellence in user
        experience.
      </p>
      <div className="">
        {renderProjectCards(projects)}
        {isOpen && renderProjectCards(projects)}
      </div>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${isOpen ? 'hidden' : 'block'
          } cursor-pointer font-bold pt-6 pb-16 text-center underline underline-offset-4 text-white`}
      >
        See all projects
      </div>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${isOpen ? 'block' : 'hidden'
          } cursor-pointer font-bold pt-6 pb-28 text-center underline underline-offset-8 text-white`}
      >
        See less
      </div>
    </div>
  );
};

export default Work;
