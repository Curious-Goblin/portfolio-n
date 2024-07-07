
const Intro = () => {
  return (
    <div className="w-full mx-auto px-4 py-28 text-center bg-black text-white">
      <h1 className="text-8xl font-bold mb-2 gradient-about p-2">Hi, I'm Naveen Prajapati</h1>
      <h2 className="text-6xl mb-14 gradient-about p-2">UI/UX Designer</h2>
      <p className="text-4xl text-center mb-12 text-textColor w-full max-w-5xl mx-auto">
        My self Naveen Prajapati. I am a Passionate UI/UX Designer.
        Proficient in creating visually stunning designs that prioritize user
        satisfaction and engagement. Efficacious problem-solver with a keen eye for
        detail.
      </p>
      <div className="flex justify-center gap-4">
      <button className="bg-white text-black px-6 py-3 rounded-md transform transition-transform hover:scale-105">
          Get in Touch
        </button>
        <button className="bg-black text-white px-6 py-3 rounded-md border rounded-lg border-white transform transition-transform hover:scale-105">
          Download CV
        </button>
      </div>
    </div>
  );
}

export default Intro;
