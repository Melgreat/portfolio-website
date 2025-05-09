import HeaderPage from "./Header";
import FooterPage from "./Footer";
import HomePage from "./Home";
import AboutPage from "./About";
import Projects from "./Projects";
import ContactSection from "./Contact";
import React, { useState } from "react";
import "./App.css";
import MyServices from "./Services.jsx";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme} className="theme-toggle-btn">
       {theme === "light" ? "🌙" : "🔆"} 
      </button>

      <>
        <HeaderPage />
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
