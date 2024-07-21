const handleDownloadResume = () => {
  const url = 'https://drive.google.com/uc?export=download&id=1lYeu97qx4Fx2DFh8-OOg3NPNHZlIZccJ';
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = 'resume.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const Intro = () => {
  return (
    <div className="w-full mx-auto px-4 pt-36 pb-28 text-center bg-black text-white">
      <div className="hidden md:mt-40 md:p-4 md:block text-4xl md:text-5xl lg:text-8xl font-bold gradient-about">Hi, I'm Naveen Prajapati</div>
      <h1 className="md:hidden text-4xl md:text-5xl lg:text-7xl font-bold mb-2 gradient-about p-4">Hi, I'm <br></br> Naveen Prajapati</h1>
      <h2 className="text-3xl md:text-4xl lg:text-4xl mb-8 md:mb-10 lg:mb-10 gradient-about">UI/UX Designer</h2>
      {/* <p className="text-lg md:leading-loose md:text-2xl px-10 lg:text-3xl text-center mb-6 md:mb-8 lg:mb-12 text-textColor w-full max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
        My self Naveen Prajapati. I am a Passionate UI/UX Designer.
        Proficient in creating visually stunning designs that prioritize user
        satisfaction and engagement. Efficacious problem-solver with a keen eye for
        detail.
      </p> */}
      <p className="leading-relaxed text-3xl text-center mb-12 text-textColor w-full max-w-5xl mx-auto">
        My self Naveen Prajapati. I am a Passionate UI/UX Designer.<br/>
        Proficient in creating visually stunning designs that prioritize user<br/>
        satisfaction and engagement. Efficacious problem-solver with a <br/>
        keen eye for detail.
      </p>
      <div className="flex justify-center gap-12">
        <a href="mailto:naveen1043.me@gmail.com">
          <button className="bg-white font-semibold text-black px-6 py-3 rounded-lg transform transition-transform hover:scale-105">
            Get in Touch
          </button>
        </a>
        <button onClick={handleDownloadResume} className="bg-black text-white px-6 py-3 font-semibold border rounded-lg border-white transform transition-transform hover:scale-105">
          Download CV
        </button>
      </div>
    </div>
  );
}

export default Intro;
