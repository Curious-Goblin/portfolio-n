// Skills.js

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
    return (
      <div className="w-full text-white text-left mx-auto px-36 pt-36 bg-black">
        <h2 className="text-6xl font-bold mb-12">My skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 text-xl">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center">
              <span className="text-purple-500 mr-2">•</span>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Skills;
  