import React from "react";
import { motion } from "framer-motion";
import services from "./ServicesArray.jsx";
import "./Services.css";

const MyServices = () => {

  const handleHire = ()=>{
    document.getElementById("contact").scrollIntoView({behavior: "smooth"});
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="gradient-text">Services I Offer</p>
      <div className="services-container">
        {services.map((serve, idx) => (
          <div key={idx} className="service-card">
            <p className="service-title">{serve.title}</p>
            <p className="service-details">{serve.description}</p>
          </div>
        ))}
      </div>
      <motion.button
        className="hire-btn"
        onClick={handleHire}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
      >
        Hire Me
      </motion.button>
    </motion.div>
  );
};

export default MyServices;
