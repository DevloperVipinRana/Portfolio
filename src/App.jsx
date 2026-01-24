import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"

function App() {

  return (
    <>
      <Navbar />
      <div className="bg-[#171d32] h-auto w-full overflow-x-hidden">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default App
