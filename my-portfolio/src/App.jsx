import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { Skills } from "./components/Skills/Skills.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import ContactMe from "./components/ContactMe/ContactMe.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {

  return(
    <div>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <Projects/>
        <ContactMe />
      </div>
      <Footer />
      
    </div>
  )
}

export default App