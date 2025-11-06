import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import NameScroll from './components/NameScroll';
import Hero from './components/Hero';
import { useRef, useState, useEffect } from 'react';
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function App() {
  const location = useLocation();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home")
  

  // const scrollToHome = () => {
  //   homeRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // const scrollToAbout = () => {
  //   aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const homeTop = homeRef.current?.getBoundingClientRect().top;
  //     const aboutTop = aboutRef.current?.getBoundingClientRect().top;

  //     if (homeTop >= 0 && homeTop < window.innerHeight / 2) {
  //       setActiveSection("home");
  //     } else if (aboutTop >= 0 && aboutTop < window.innerHeight / 2) {
  //       setActiveSection("about");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);



  

  return (
    <div className="App overflow-x-hidden">
      <NavBar />
      <Hero></Hero>
      <NameScroll className="namescroll"></NameScroll>

      <About ></About>
      
    </div>
  );
}

export default App;
