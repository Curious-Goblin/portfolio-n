import { useState } from "react";

export function ProjectCard({ title, year, description, image, buttonText, caseLink }) {
    const [isOpen, setIsOpen] = useState(false);

    function togglebar() {
        setIsOpen((prev) => !prev);
    }

    return (
        <div>
            <div className="hidden lg:block">
                <div className="flex justify-between gap-4 bg-workColor border border-card px-16 py-16 rounded-3xl shadow-md mb-10">
                    <div className="flex flex-col justify-between">
                        <div className="mr-10">
                            <h2 className="text-3xl font-bold text-white mb-6">{title}</h2>
                            <p className="text-white mb-6">{year}</p>
                            <p className="text-textColor lg:text-sm 2xl:text-xl text-left w-full max-w-lg mb-4">{description}</p>
                        </div>
                        <div className="mb-8">
                            <a href={caseLink} target="_blank" rel="noopener noreferrer">
                                <button className="bg-workColor border border-white font-semibold text-white py-3 px-4 text-xs 2xl:text-lg rounded-lg">
                                    {buttonText}
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="2xl:hidden">
                        <img src={image} alt={title} style={{ width: '900px', height: '400px' }} className="border-card rounded-2xl shadow-md" />
                    </div>
                    <div className="hidden 2xl:block">
                        <img src={image} alt={title} style={{ width: '700px', height: '500px' }} className="border-card rounded-2xl shadow-md" />
                    </div>
                </div>
            </div>
            <div className="lg:hidden w-full bg-zinc-900 border border-card px-5 py-5 rounded-xl shadow-md mb-8">
                <div className="flex items-center justify-center w-full">
                    <img src={image} alt={title} style={{ width: '700px', height: '170px' }} className=" border-card rounded-lg shadow-md" />
                </div>
                <div className="flex justify-between gap-4">
                    <div className="flex flex-col justify-between pt-5">
                        <div>
                            <h2 className="text-lg font-bold text-white mb-1">{title}</h2>
                            <p className="text-white text-sm">{year}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-10">
                        <button onClick={togglebar} className="flex items-center justify-center text-white focus:outline-none border border-customBg rounded-full w-7 h-7">
                            <svg className={`w-6 h-6 p-1 transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform`} fill="none" stroke="#3B3B3B" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
                >
                    <p className="text-gray-300 text-sm text-left w-full pt-4">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
