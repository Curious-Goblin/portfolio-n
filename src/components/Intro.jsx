const handleDownloadResume = () => {
  const url = 'https://drive.google.com/uc?export=download&id=1lYeu97qx4Fx2DFh8-OOg3NPNHZlIZccJ'; // Replace YOUR_FILE_ID with the actual file ID from Google Drive
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = 'resume.pdf'; // Replace with the desired file name
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};



const Intro = () => {
  return (
    <div className="w-full mx-auto px-4 py-28 text-center bg-black text-white">
      <h1 className="text-7xl font-bold mb-2 gradient-about p-4">Hi, I'm Naveen Prajapati</h1>
      <h2 className="text-5xl mb-14 gradient-about p-4">UI/UX Designer</h2>
      <p className="text-3xl text-center mb-12 text-textColor w-full max-w-5xl mx-auto">
        My self Naveen Prajapati. I am a Passionate UI/UX Designer.
        Proficient in creating visually stunning designs that prioritize user
        satisfaction and engagement. Efficacious problem-solver with a keen eye for
        detail.
      </p>
      <div className="flex justify-center gap-4">
      <button className="bg-white font-bold text-black px-6 py-3 rounded-md transform transition-transform hover:scale-105">
          Get in Touch
        </button>
        <button onClick={handleDownloadResume} className="bg-black text-white px-6 py-3 rounded-md border rounded-lg border-white transform transition-transform hover:scale-105">
          Download CV
        </button>
      </div>
    </div>
  );
}

export default Intro;
