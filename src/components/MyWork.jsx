import { useInView } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

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
  }
];

const projectsa = [
  {
    title: 'AI Website',
    year: '2024 - User Interface Design',
    description: "Redesigned deepshape.tech with a modern UI, enhancing brand identity and improving user engagement, readability, and visual experience.",
    image:
      'https://res.cloudinary.com/dgp2hrhld/image/upload/v1720353086/file_cover_-_2_g3vlki.png',
    buttonText: 'Read case study',
    caseLink:
      'https://www.behance.net/gallery/190880591/Web-UI-Design-Deespshape-(Artificial-intelligence)',
  },
  {
    title: 'Food Delivery App',
    year: '2023 - Product Design',
    description: 'Designed a user-friendly food delivery app for effortless meal ordering, seamless restaurant browsing, dish selection, & order management.',
    image:
      'https://res.cloudinary.com/dgp2hrhld/image/upload/v1720353108/Frame_3_k52oa9.png',
    buttonText: 'Read case study',
    caseLink:
      'https://www.behance.net/gallery/179536033/UIUX-Case-Study-on-Food-Delivery-App',
  },
  {
    title: 'AI Trading Web App',
    year: '2024 - Web/App design',
    description: 'Developed an intuitive AI-powered trading platform UI for QuantBrian, enhancing market data access, trade execution, and personalized recommendations.',
    image:
      'https://res.cloudinary.com/dgp2hrhld/image/upload/v1720353070/4_tghoji.png',
    buttonText: 'Read case study',
    caseLink:
      'https://www.figma.com/design/gb97IsFHIJOwYY9g5sAMST/QuantBrain?node-id=0-1&t=f3O5u1EtAbyPzdDx-1',
  },
  {
    title: 'Food Delivery App',
    year: '2023 - Product Design',
    description: 'Designed a user-friendly food delivery app for effortless meal ordering, seamless restaurant browsing, dish selection, & order management.',
    image:
      'https://res.cloudinary.com/dgp2hrhld/image/upload/v1720353108/Frame_3_k52oa9.png',
    buttonText: 'Read case study',
    caseLink:
      'https://www.behance.net/gallery/179536033/UIUX-Case-Study-on-Food-Delivery-App',
  },
  {
    title: 'AI Trading Web App',
    year: '2024 - Web/App design',
    description: 'Developed an intuitive AI-powered trading platform UI for QuantBrian, enhancing market data access, trade execution, and personalized recommendations.',
    image:
      'https://res.cloudinary.com/dgp2hrhld/image/upload/v1720353070/4_tghoji.png',
    buttonText: 'Read case study',
    caseLink:
      'https://www.figma.com/design/gb97IsFHIJOwYY9g5sAMST/QuantBrain?node-id=0-1&t=f3O5u1EtAbyPzdDx-1',
  }
];

const Work = () => {
  const refs = useRef([]);
  const [inView, setInView] = useState([]);
  const [toShow, setToShow] = useState([])
  const titleRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isTitleInView, setIsTitleInView] = useState(false);

  const enterTransition = {
    duration: 0.2,
    ease: [0, 0.71, 0.2, 1.01],
  };

  const exitTransition = {
    duration: 0.5,
    ease: [0.4, 0.0, 0.2, 1],
  };

  const transition = {
    enter: enterTransition,
    exit: exitTransition,
  };

  const initialProjectsCount = 3;

  useEffect(() => {
    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);

          setInView((prevInView) => {
            const updatedInView = [...prevInView];
            updatedInView[index] = entry.isIntersecting;
            return updatedInView;
          });

          if (entry.isIntersecting) {
            setToShow((prevToShow) => {
              if (!prevToShow[index]) {
                const updatedToShow = [...prevToShow];
                updatedToShow[index] = true;
                return updatedToShow;
              }
              return prevToShow;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsTitleInView(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    refs.current.forEach((ref) => ref && projectObserver.observe(ref));
    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    return () => {
      refs.current.forEach((ref) => ref && projectObserver.unobserve(ref));
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current);
      }
    };
  }, [isOpen,toShow]);

  useEffect(() => {
    if (isTitleInView) {
      setToShow((prevToShow) => prevToShow.map(() => false));
    }
  }, [isTitleInView,isOpen]);

  const renderProjectCards = (projectsToRender) => {
    return projectsToRender.map((project, index) => (
      <motion.div
        key={index}
        ref={(el) => (refs.current[index] = el)}
        data-index={index}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={toShow[index] ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={toShow[index] ? transition.enter : transition.exit}
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
      <h1 ref={titleRef} className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-6 md:mb-8 lg:mb-9">
        My Work
      </h1>
      <p className="text-textColor text-base md:text-lg lg:text-xl w-full max-w-2xl md:max-w-3xl lg:max-w-5xl mr-10 mb-10 md:mb-14 lg:mb-16">
        Here's a glimpse of some of my recent and exciting projects. Each of them
        reflects my focus on user-centered design and my commitment to excellence in user
        experience.
      </p>
      <div className=''>
        {renderProjectCards(projects.slice(0, initialProjectsCount))}
        {isOpen && renderProjectCards(projects.slice(initialProjectsCount))}
      </div>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`cursor-pointer font-bold pt-6 pb-16 text-center underline underline-offset-4 text-white`}
      >
        {isOpen ? 'See less' : 'See all projects'}
      </div>
    </div>
  );
};

export default Work;