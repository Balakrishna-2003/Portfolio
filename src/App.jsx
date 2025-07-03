import { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Heropage from './components/Heropage'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 10) {
        nav.classList.add("navbar-blur");
      } else {
        nav.classList.remove("navbar-blur");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Heropage />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
