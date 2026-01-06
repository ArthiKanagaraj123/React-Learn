import React from 'react'
import Gallery1 from './Gallery1'
import './Main1.css'
import a from '../Assets/girl.jpg'

const About1 = () => {
  return (
    <div>
      <section className="about">
            <div className="text">
              <h1>About Us</h1>
              <p>
                Welcome to our website! We are passionate about creating beautiful and
                functional web designs. Our mission is to provide quality services
                that meet the expectations of our clients.
              </p>
            </div>
            <div className="image">
              <img src={a} alt=""/>
            </div>
          </section>
          <Gallery1/>
    </div>
  )
}

export default About1
