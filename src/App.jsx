import React from 'react';
import Navbar from './sections/Navbar'; // Adjust the path if Navbar is in a different directory
import Hero from "./sections/Hero.jsx";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Experiences from "./sections/Experiences";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Experiences/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
