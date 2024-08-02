import AboutMe from "./components/About"
import Experience from "./components/Experience"
import Intro from "./components/Intro"
import Contact from "./components/LetsTalk"
import Work from "./components/MyWork"
import { Navbar } from "./components/Navbar"
import ScrollDown from "./components/ScrollDown"
import Skills from "./components/Skills"
import './components/style.css'

function App() {

  return (
    <div className="bg-bgColor font-sans">
      <div className='absolute z-50 w-full hidden md:block'>
        <svg width="1512" height="1291" viewBox="0 0 1512 1291" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_1_36)">
            <path d="M880.5 819C731.5 920.5 388.5 959 258 867C127.5 775 207.5 632 277 530.363C346.5 428.726 1263.79 -648.5 1407 -648.5C1550.21 -648.5 1029.5 717.5 880.5 819Z" fill="url(#paint0_linear_1_36)" />
          </g>
          <defs>
            <filter id="filter0_f_1_36" x="-182.924" y="-1019.68" width="1985.77" height="2309.96" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="185.59" result="effect1_foregroundBlur_1_36" />
            </filter>
            <linearGradient id="paint0_linear_1_36" x1="1148.15" y1="-386.314" x2="374.133" y2="813.952" gradientUnits="userSpaceOnUse">
              <stop stop-color="#D9D9D9" stop-opacity="0.06" />
              <stop offset="1" stop-color="#D9D9D9" stop-opacity="0.01" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute z-50 w-screen md:hidden overflow-hidden">
        <svg width="393" height="678" viewBox="0 0 393 678" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_1_1245)">
            <path d="M236.595 510.598C164.576 559.678 -1.21268 578.294 -64.2897 533.808C-127.367 489.322 -88.6987 420.176 -55.106 371.03C-21.5133 321.884 421.857 -199 491.078 -199C560.298 -199 308.614 461.519 236.595 510.598Z" fill="url(#paint0_linear_1_1245)" />
          </g>
          <defs>
            <filter id="filter0_f_1_1245" x="-216.81" y="-317.81" width="838.62" height="995.62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="59.4051" result="effect1_foregroundBlur_1_1245" />
            </filter>
            <linearGradient id="paint0_linear_1_1245" x1="365.962" y1="-72.2219" x2="-8.36892" y2="508.02" gradientUnits="userSpaceOnUse">
              <stop stop-color="#D9D9D9" stop-opacity="0.06" />
              <stop offset="1" stop-color="#D9D9D9" stop-opacity="0.01" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Navbar />
      <Intro />
      <ScrollDown />
      <Work />
      <AboutMe />
      <Experience />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
