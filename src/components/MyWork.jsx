import { ProjectCard } from './ProjectCard';

// src/WorkSection.js
import React from 'react';

const Work = () => {
  return (
    <div id="work" className="w-full text-left mx-auto px-8 md:px-20 lg:px-36 pt-28 md:pt-24 lg:pt-36 bg-black">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 md:mb-8 lg:mb-12">
        My Work
      </h1>
      <p className="text-gray-400 text-base md:text-lg lg:text-xl w-full max-w-2xl md:max-w-3xl lg:max-w-4xl mb-10 md:mb-14 lg:mb-20">
        Here's a glimpse of some of my recent and exciting projects. Each of them reflects my
        focus on user-centered design and my commitment to excellence in user experience.
      </p>

      <ProjectCard
        title="AI Website"
        year="2024 - User Interface Design"
        description="Transformed an AI website deepshape.tech with a modern redesign, optimizing the User Interface of the website and elevating brand identity. Resulted in improved user engagement, increased Readability, and a seamless Visual experience."
        image="https://res.cloudinary.com/dgp2hrhld/image/upload/v1720353086/file_cover_-_2_g3vlki.png"
        buttonText="Read Case Study"
        caseLink="https://www.behance.net/gallery/190880591/Web-UI-Design-Deespshape-(Artificial-intelligence)"
      />
      <ProjectCard
        title="Food Delivery App"
        year="2023 - Product Design"
        description="Designed a user-friendly food delivery app that enables users to effortlessly order their favourite meals. The app offers a seamless experience for browsing restaurants and also selecting dishes, and managing orders, making meal planning convenient and enjoyable."
        image="https://res.cloudinary.com/dgp2hrhld/image/upload/v1720353108/Frame_3_k52oa9.png"
        buttonText="Read Case Study"
        caseLink="https://www.behance.net/gallery/179536033/UIUX-Case-Study-on-Food-Delivery-App"
      />
      <ProjectCard
        title="AI  Tradind Web App"
        year="2024 - Web/App design"
        description="Developed an intuitive AI-powered trading platform UI for QuantBrian. The platform offers a vast array of market data, seamless trade execution, and personalized AI-driven recommendations, significantly enhancing the user's trading experience."
        image="https://res.cloudinary.com/dgp2hrhld/image/upload/v1720353070/4_tghoji.png"
        buttonText="Read Case Study"
        caseLink="https://www.figma.com/design/gb97IsFHIJOwYY9g5sAMST/QuantBrain?node-id=0-1&t=f3O5u1EtAbyPzdDx-1"
      />
      <div className='font-bold py-16 text-center underline underline-offset-8 text-white'>
        See all projects
      </div>
    </div>
  );
};

export default Work;

