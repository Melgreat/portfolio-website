import HeaderPage from "./Header";
import FooterPage from "./Footer";
import HomePage from "./Home";
import AboutPage from "./About";
import Projects from "./Projects";
import ContactSection from "./Contact";
import React, { useState, useEffect } from "react";
import "./App.css";
import MyServices from "./Services.jsx";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() =>{
    document.body.classname = theme;
  }, [theme])

  return (
    <div className={`app ${theme}`}>
      

      <>
        
        <HeaderPage toggleTheme={toggleTheme} theme={theme}/>
        <main>
          <section id="home">
            <HomePage />
          </section>
          <section id="about">
            <AboutPage />
          </section>
          <section id="about">
            <MyServices />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <ContactSection />
          </section>
        </main>
        <FooterPage />
      </>
    </div>
  );
}

export default App;
