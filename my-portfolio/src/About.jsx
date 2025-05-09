import "./About.css"
import { motion } from "framer-motion";

function AboutPage(){
    return (

        <motion.div
            className="tell-me"
            id="about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="gradient-text">About Me</h2>
            <p className="about-text">I'm Melvin Amaechi, a UI/UX designer turned full-stack developer with a passion for crafting seamless, intuitive digital experiences. With over a year of experience in design and development, I bridge the gap between beautiful interfaces and functional code, delivering products that are both user-friendly and technically sound.

                My journey into software development began with a deep curiosity for how things work, and how they could work better. That curiosity evolved into a self-taught path filled with code, late nights, countless iterations, and a relentless drive to learn. Today, I specialize in building responsive web applications using React on the front end and Django REST Framework on the back end.

                Design remains at the heart of everything I do. Whether it’s refining user flows or coding scalable backend APIs, I believe good design is not just about aesthetics, it's about clarity, usability, and empathy. I thrive on building products that solve real problems and resonate with users.

                When I’m not coding or designing, I’m exploring new tools, studying design patterns, or collaborating with others to bring creative ideas to life. I’m a team player, an idea explorer, and someone who genuinely enjoys turning ideas into digital experiences.
            </p>
        </motion.div>
        
    )
}
export default AboutPage