import React from 'react'
import "./Style1.css"
const Skills = () => {
  return (
    <>
    <section id="skills" className="skills-page">
      <div className="skills-container">
        <h1>My Skills</h1>

        <div className="skills">
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML"
            />
            <p>HTML</p>
          </div>

          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
            />
            <p>CSS</p>
          </div>

          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              alt="Java"
            />
            <p>Java</p>
          </div>

          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              alt="SQL"
            />
            <p>SQL</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Skills
