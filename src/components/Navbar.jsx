import { useState } from 'react';
import './style.css';

const Navbar = () => {
    const [activeButton, setActiveButton] = useState('about');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    return (
        <nav className="sticky top-0 z-20 flex justify-center items-center bg-black p-12">
            <ul className="flex gap-8 text-md font-medium text-white">
                <li>
                    <a href="#about" onClick={() => { handleButtonClick('about') }} className={`${activeButton == 'about' ? 'border-customBg border p-3 rounded-lg' : ''}`}>
                        About
                    </a>
                </li>
                <li>
                    <a href="#experience" onClick={() => { handleButtonClick('work') }}
                        className={`${activeButton == 'work' ? 'border-customBg border p-3 rounded-lg' : ''}`}>
                        Work
                    </a>
                </li>
                <li>
                    <a href="#work" onClick={() => { handleButtonClick('projects') }} className={`${activeButton == 'projects' ? 'border-customBg border p-3 rounded-lg' : ''}`}>
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={() => { handleButtonClick('contact') }} className={`gradient-text ${activeButton == 'contact' ? 'border-customBg border p-3 rounded-lg' : ''}`}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
