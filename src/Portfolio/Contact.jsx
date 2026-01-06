import React from 'react';
import "./Style1.css";

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <h1>Contact Me</h1>
          <div className="wrapper">

            <div className="info">
              <div className="item">
               <i class="fa fa-map-marker-alt"></i>
                <span>Kanakiliyanallur, Trichy</span>
              </div>

              <div className="item">
                <i className="fa fa-envelope"></i>
                <span>arthik2718@gmail.com</span>
              </div>

              <div className="item">
                <i className="fa fa-phone"></i>
                <span>+91 9345758601</span>
              </div>
            </div>

            <div className="form">
              <form>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <input type="text" name="subject" placeholder="Subject" required />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>

                <button type="submit">Send Message</button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">

          <p>&copy; 2025 MyPortfolio. All Rights Reserved</p>

          <div className="social">
            <a
              href="https://github.com/Arthikanagaraj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/arthikanagaraj-k/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>

          </div>

        </div>
      </footer>
    </>
  );
};

export default Contact;
