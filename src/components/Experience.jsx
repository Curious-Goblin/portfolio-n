const experiences = [
  {
    index: 1,
    title: "UI/UX Designer at Zidio Development",
    duration: "Jun 2024 - Present",
    description: [
      "My internship at Zidio Development, I'm assisting the development and implementation of design solutions, collaborating closely with senior designers and developers.",
      "I'm working with team members to design, and test new features, ensuring high-quality user experiences. Additionally, I participated in project planning and review meetings, contributing valuable insights and feedback."
    ],
    logo: "https://res.cloudinary.com/dgp2hrhld/image/upload/v1720356381/e1_ha2cse.png"
  },
  {
    index: 2,
    title: "Web Designer at DeepShape",
    duration: "Dec 2023 - Jan 2024",
    description: [
      "Designed the whole website from scratch. Developed a comprehensive style guide to maintain consistency in design elements, typography, colors, and layouts across the website.",
      "Created and component sets to streamline the design process."
    ],
    logo: "https://res.cloudinary.com/dgp2hrhld/image/upload/v1720356987/deep_ouyw6l.png"

  },
  {
    index: 3,
    title: "UI Designer at Quant Brain",
    duration: "Feb 2024 - Mar 2024",
    description: [
      "Quant Brain is an AI Trading Application. Designed the landing page UI from scratch.",
      "Incorporating modern design & user-centric approaches. Developed a comprehensive style guide, Created mobile interface as well."
    ],
    logo: "https://res.cloudinary.com/dgp2hrhld/image/upload/c_crop,w_300,h_300,ar_1:1/v1720356409/e2_wfqyef.png"
  },
  {
    index: 4,
    title: "UI/UX Designer at CodeWars",
    duration: "Jun 2023 - Aug 2023",
    description: [
      "CodeWars is coding platform plus a community. I did heuristic evaluation and created user flow, information architecture, site mapping, card sorting, mood board, Wire frames, style guide, user persona."
    ],
    logo: "https://res.cloudinary.com/dgp2hrhld/image/upload/v1720356944/code_eexugs.png"
  }
];

const Experience = () => {
  return (
    <div>
      <div id="experience" className="hidden md:block w-full text-white text-left mx-auto px-36 pt-36">
        <h2 className="text-6xl font-bold mb-24">Experience</h2>
        {experiences.map((experience) => (
          <div key={experience.index} className="mb-16">
            <div className="flex justify-between items-center mb-4">
              <div className="flex justify-center items-center">
                {experience.index == 1 &&
                  <img
                    src={experience.logo}
                    alt={`${experience.title} logo`}
                    className="w-16 h-12 mr-4"
                  />}
                {experience.index == 2 &&
                  <img
                    src={experience.logo}
                    alt={`${experience.title} logo`}
                    className="w-10 h-10 mr-10"
                  />}
                {experience.index == 3 &&
                  <img
                    src={experience.logo}
                    alt={`${experience.title} logo`}
                    className="w-14 h-10 mr-6"
                  />}
                {experience.index == 4 &&
                  <img
                    src={experience.logo}
                    alt={`${experience.title} logo`}
                    className="w-10 h-10 mr-10"
                  />}
                <h3 className="text-4xl font-semibold">{experience.title}</h3>
              </div>
              <span className="text-white font-medium">{experience.duration}</span>
            </div>
            <ul className="pl-5 space-y-2 text-gray-400 text-xl">
              {experience.description.map((desc, idx) => (
                <li key={idx} className="flex">
                  <div className="mr-2">•</div>
                  <div>{desc}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div id="experience" className="md:hidden w-full text-white text-left mx-auto px-10 pt-36">
        <h2 className="text-3xl font-bold mb-12">Experience</h2>
        {experiences.map((experience, index) => (
          <div key={index} className="rounded-lg mb-16">
            <div className=" justify-between items-center mb-4">
              <div className="flex items-center mb-4">
              {experience.index == 1 &&
                  <img
                    src={experience.logo}
                    alt={`${experience.title} logo`}
                    className="w-14 h-10 mr-4"
                  />}
                {experience.index == 2 &&
                  <img
                    src={experience.logo}
                    alt={`${experience.title} logo`}
                    className="w-10 h-8 mr-4"
                  />}
                {experience.index == 3 &&
                  <img
                    src={experience.logo}
                    alt={`${experience.title} logo`}
                    className="w-12 h-8 mr-4"
                  />}
                {experience.index == 4 &&
                  <img
                    src={experience.logo}
                    alt={`${experience.title} logo`}
                    className="w-7 h-7 mr-4"
                  />}
                <h3 className="text-xl font-semibold">{experience.title}</h3>
              </div>
              <span className="">{experience.duration}</span>
            </div>
            <ul className="space-y-2 text-textColor text-xl">
              {experience.description.map((desc, idx) => (
                <li key={idx} className="flex">
                  <div className="mr-2">•</div>
                  <div>{desc}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
