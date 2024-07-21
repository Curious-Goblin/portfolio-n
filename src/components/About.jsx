// AboutMe.js

const AboutMe = () => {
  return (
    <div>
      <div id="about" className="hidden md:block w-full text-white text-left mx-auto pt-36 md:px-36">
        <div className="flex flex-col md:items-start">
          <div className="text-6xl font-bold text-white mb-20">About Me</div>
          <div className="flex justify-between w-full">
            <div>
              <p className="text-4xl leading-relaxed font-light text-white max-w-6xl">
                With over 2 years of experience in digital product<br />
                design, I'm passionate about creating engaging and<br />
                functional solutions that meet users' needs. My focus<br />
                on user research and usability ensures that each<br />
                design not only looks great but also delivers an<br />
                exceptional experience.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/dgp2hrhld/image/upload/v1720355827/Group_1948754640_ibfuva.png"
                alt="Profile"
                style={{ width: '340px', height: '450px' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="md:hidden w-full text-white text-left mx-auto pt-36 bg-black">
        <div className="flex flex-col">
          <div className="flex flex-col items-center mb-16">
            <img
              src="https://res.cloudinary.com/dgp2hrhld/image/upload/v1720355827/Group_1948754640_ibfuva.png"
              alt="Profile"
              className="mb-4"
              style={{ width: '25%', height: '25%' }}
            />
          </div>
          <div className="px-8">
            <h1 className="text-3xl font-bold text-white mb-8">About Me</h1>
            <p className="text-xl font-light text-white mb-8 max-w-fit w-full">
              With over 2 years of experience in digital product design, I'm passionate about creating engaging and functional solutions that meet users' needs. My focus on user research and usability ensures that each design not only looks great but also delivers an exceptional experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
