// AboutMe.js

const AboutMe = () => {
    return (
      <div id="about" className="w-full text-white text-left mx-auto pt-36 bg-black">
        <div className="flex flex-col md:flex-row md:items-start">
          <div className="md:w-2/3 md:px-36">
            <h1 className="text-6xl font-bold text-white mb-12">About Me</h1>
            <p className="text-3xl font-light text-white mb-8 max-w-2xl">
              With over 2 years of experience in digital product design, I'm passionate about creating engaging and functional solutions that meet users' needs. My focus on user research and usability ensures that each design not only looks great but also delivers an exceptional experience.
            </p>
          </div>
          <div className="flex flex-col items-center md:w-1/3">
            <img 
              src="https://res.cloudinary.com/dgp2hrhld/image/upload/v1720355827/Group_1948754640_ibfuva.png" 
              alt="Profile" 
              className="mb-4"
              style={{ width: '340px', height: '450px' }}
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default AboutMe;
  