import React from "react";
import "./Contact.css";
import {motion} from "framer-motion"

const ContactForm = () => {
  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      action="/thank-you"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="contact-form"
    >
      <h2 className="gradient-text">Contact</h2>
      {/* Hidden input for Netlify */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>Don’t fill this out: <input name="bot-field" /></label>
      </p>

      <label>
        Name
        <input type="text" name="name" required />
      </label>

      <label>
        Email
        <input type="email" name="email" required />
      </label>

      <label>
        Message
        <textarea name="message" required></textarea>
      </label>

      <button type="submit">Send Message</button>
    </motion.form>
  );
};

export default ContactForm;
