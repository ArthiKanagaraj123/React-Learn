import React from "react";
import "./Style1.css";

const Home = () => {
  return (
    <section id="home" className="hero">
      <p>Hello I'm</p>
      <h1>Arthi Kanagaraj</h1>
      <p>Full Stack Developer</p>

      <div className="links">
        <a
          href="https://github.com/Arthikanagaraj"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        ></a>

        <a
          href="https://www.linkedin.com/in/arthikanagaraj-k/"
          className="linkedin"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
    </section>
  );
};

export default Home;
