import React, { useState, useEffect } from 'react';
import './style.css';

const ScrollDown = () => {
    const [isHide, setIsHide] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsHide(true);
            } else {
                setIsHide(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center relative">
            <div className="grid-pattern absolute inset-0"></div>
            <div className="flex flex-col items-center relative">
                <div className={`mouse-icon ${isHide ? 'fade-out' : 'fade-in'}`}>
                    <div className="mouse-wheel animate-scroll mb-10"></div>
                </div>
                <div className={`pt-2 text-xs text-textColor ${isHide ? 'fade-out' : 'fade-in'}`}>Scroll Down</div>
            </div>
        </div>
    );
};

export default ScrollDown;
