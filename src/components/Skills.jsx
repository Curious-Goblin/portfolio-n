const skills = [
  "User Interface (UI) Design",
  "User Experience (UX) Design",
  "Interactive Prototyping",
  "User Research",
  "Interaction Design",
  "Responsive Design",
  "Adobe XD, Sketch, Figma",
  "Team Collaboration"
];

const Skills = () => {
  const firstColumnSkills = skills.slice(0, 4);
  const secondColumnSkills = skills.slice(4);

  return (
    <div>
      <div className="hidden md:block w-full text-white text-left mx-auto px-36 pt-8">
        <h2 className="text-4xl font-bold mb-10">My skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-36 gap-y-6 w-full max-w-fit text-2xl text-textColor">
          <div>
            {firstColumnSkills.map((skill, index) => (
              <div key={index} className="flex items-center p-4 pl-2">
                <span className="text-purple-500 mr-2 flex items-center">•</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
          <div>
          {secondColumnSkills.map((skill, index) => (
              <div key={index} className="flex items-center p-4">
                <span className="text-purple-500 mr-2 flex items-center">•</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden w-full text-white text-left mx-auto px-8 pt-16 bg-black">
        <h2 className="text-3xl font-bold mb-12">My skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 text-xl">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center">
              <span className="text-purple-500 mr-2">•</span>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
