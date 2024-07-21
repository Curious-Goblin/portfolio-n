import { useState } from "react";

export function ProjectCard({ title, year, description, image, buttonText, caseLink }) {
    const [isOpen, setIsOpen] = useState(false)
    function togglebar() {
        setIsOpen(prev => prev = !prev)
    }
    return (
        <div>
            <div className="hidden lg:block ">
                <div className="flex justify-between gap-4 bg-workColor border border-card px-16 py-16 rounded-3xl shadow-md mb-10">
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">{title}</h2>
                            <p className="text-white mb-6">{year}</p>
                            <p className="text-textColor text-xl text-left w-full max-w-lg mb-4">{description}</p>
                        </div>
                        <div className="mb-10">
                            <a href={caseLink} target="_blank" rel="noopener noreferrer">
                                <button className="bg-workColor border border-white font-semibold text-white py-3 px-4 rounded-lg">
                                    {buttonText}
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <img src={image} alt={title} style={{ width: '700px', height: '500px' }} className="border-card rounded-2xl shadow-md" />
                    </div>
                </div>
            </div>
            <div className="lg:hidden w-full flex flex-col justify-between gap-4 bg-zinc-900 border border-card px-6 py-6 rounded-xl shadow-md mb-8">
                <div className="flex items-center justify-center">
                    <img src={image} alt={title} style={{ width: '99%', height: '80%' }} className=" border-card rounded-lg shadow-md" />
                </div>
                <div className="flex justify-between gap-4">
                    <div className="flex flex-col justify-between pt-10">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
                            <p className="text-white text-lg">{year}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <button onClick={() => { togglebar() }} className="flex items-center justify-center text-white focus:outline-none border border-customBg rounded-full w-10 h-10">
                            <svg className={`w-6 h-6 transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div>
                    <p className={`${isOpen == true ? '' : 'hidden'} text-gray-300 text-lg text-left w-full max-w-fit`}>{description}</p>
                </div>
                {isOpen &&
                    <div className="mt-auto">
                        <a href={caseLink} target="_blank" rel="noopener noreferrer">
                            <button className="bg-zinc-900 border border-card font-semibold text-white font-bold py-2 px-4 rounded-lg">
                                {buttonText}
                            </button>
                        </a>
                    </div>}
            </div>
        </div>
    );
}