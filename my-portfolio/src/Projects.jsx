import React, {useState, useEffect} from "react"
import projects from "./ProjectsArray.jsx"
import "./Projects.css"
import { motion } from 'framer-motion'


function Projects(){
    
    return (
        <motion.div 
          className="projects-section"
          id="projects"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="gradient-text">My Projects</h2>
          <div className="projects-grid">
            {projects.map((proj, idx) => (
              <div key={idx} className="project-card">
                <img src={proj.image} alt={proj.title} className="project-image" />
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="tech-stack">
                  {proj.tech.map((tech, i) => <span key={i}>{tech}</span>)}
                </div>
                {proj.github ? (
                  <a href={proj.github} target="_blank" rel="noopener noreferrer">View Code</a>
                ) : (
                  <span className="coming-soon">Coming Soon</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      );
}
export default Projects