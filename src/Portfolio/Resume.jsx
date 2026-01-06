import React from "react";
import "./Style1.css";

const Resume = () => {
  return (
    <section id="resume">
      <div className="resume-container">
        <h1>Resume</h1>

        <div className="details">

          {/* Education Section */}
          <div className="resume-item">
            <h2>Education</h2>

            <p><strong>B.Tech in IT</strong></p>
            <p className="small">
              Karpagam College of Engineering, Coimbatore | 2021 - 2025
            </p>
            <p>CGPA: 8.26</p>

            <p><strong>HSC & SSLC</strong></p>
            <p className="small">
              Govt. Hr. Sec. School, Kanakiliyanallur | 2018 - 2021
            </p>
            <p>HSC: 86.5% | SSLC: 81.5%</p>
          </div>

          {/* Certificates Section */}
          <div className="resume-item">
            <h2>Certificates</h2>

            <div className="certificates-wrapper">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://drive.google.com/file/d/15-uujXHX8zRSVpOG9c6UBApYu-BRhp4F/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        DSA using Java - NPTEL
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        href="https://www.freecodecamp.org/certification/fcc0ec1f0e7-c23d-4ace-a984-50a54a6db2a2/responsive-web-design"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Responsive Web Design - freeCodeCamp
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        href="https://drive.google.com/file/d/1WuGyOpZGJM8kO7shqtvagPSWq3a1XcKk/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        JavaScript Fundamentals - Udemy
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        href="https://drive.google.com/file/d/10mwabrqFCxX7ZhBQ3-nqVlPU12RrxJDu/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        CSS (Basic) - HackerRank
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        href="https://drive.google.com/file/d/1pwCjQvXGOqU1VIEfYW7emzTTt4dJuaxD/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        SQL (Basic) - HackerRank
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;
