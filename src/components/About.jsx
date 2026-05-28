// components/About.jsx

import React from "react";
import profileImage from "../assets/Profile.jpeg";
const About = () => {
  return (
    <section className="section" id="about">
      <h2>About Me</h2>

       <img src={profileImage} alt="Pal Nilesh Ahir" />

      <p>
        I am a passionate web developer and IT student. I enjoy building
        responsive and user-friendly websites using HTML, CSS, JavaScript,
        and ReactJS.
      </p>
    </section>
  );
};

export default About;