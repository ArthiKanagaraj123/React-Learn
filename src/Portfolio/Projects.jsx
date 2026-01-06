import React from 'react';
import hospitalImg from "./Assets/hospital project image.jpg";
import encryptImg from "./Assets/image encryption and decryption project image.png";
import portfolioImg from "./Assets/portfolio project image.jpg";
import "./Style1.css";

const Projects = () => {
  return (
    <>
      <section id="projects" className="projects-page">
        <div className="project-container">
          <h1>My Projects</h1>

          <div className="project">

            <div className="box">
              <img src={hospitalImg} alt="Hospital Management System" />
              <p>Hospital Management System</p>
              
              <a 
                className="btn" 
                href="https://github.com/Arthikanagaraj/Hospital_Management_System"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
             
            </div>

            <div className="box">
              <img src={encryptImg} alt="Image Encryption & Decryption" />
              <p>Image Encryption & Decryption</p>

              
              <a 
                className="btn"
                href="https://github.com/Arthikanagaraj/Image-Encryption-and-Decryption"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
             
            </div>

            <div className="box">
              <img src={portfolioImg} alt="Portfolio Website" />
              <p>Portfolio Website</p>

              
              <a 
                className="btn"
                href="https://github.com/your-username/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
             
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
