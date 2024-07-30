import AboutMe from "./components/About"
import Experience from "./components/Experience"
import Intro from "./components/Intro"
import Contact from "./components/LetsTalk"
import Work from "./components/MyWork"
import { Navbar } from "./components/Navbar"
import ScrollDown from "./components/ScrollDown"
import Skills from "./components/Skills"

function App() {

  return (
    <div className="bg-bgColor font-sans">
      <Navbar/>
      <Intro/>
      <ScrollDown/>
      <Work/>
      <AboutMe/>
      <Experience/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App
