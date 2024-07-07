import AboutMe from "./components/About"
import Experience from "./components/Experience"
import Intro from "./components/Intro"
import Contact from "./components/LetsTalk"
import Work from "./components/MyWork"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"

function App() {

  return (
    <div className="bg-black">
      <Navbar/>
      <Intro/>
      <Work/>
      <AboutMe/>
      <Experience/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App
