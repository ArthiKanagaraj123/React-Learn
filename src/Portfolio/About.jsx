import React from 'react';
import MyPhoto from "./Assets/Myphoto.jpg"; 
import "./Style1.css";

const About = () => {
  return (
    <>
      <section id="about" className="about-page">
        <div className="about-wrapper">

          <div className="profile-pic">
            <img src={MyPhoto} alt="Profile" />
          </div>

          <div className="about-text">
            <h1>About Me</h1>

            <p>
              Hello! I'm Arthi from Kanakiliyanallur. I am a graduate in Information
              Technology from Karpagam College of Engineering. I am proficient in Java,
              HTML, CSS, and SQL, and I hold certifications in Data Structures,
              JavaScript, and SQL.
            </p>

            <p>
              My strengths are my friendly nature and constant effort to learn new things.
              I aim to grow my career in a reputed company and achieve a responsible
              position in the future.
            </p>


            <a href="#contact" className="btn">Hire Me</a>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;
