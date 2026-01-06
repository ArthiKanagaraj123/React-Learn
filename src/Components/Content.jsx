import React from 'react'
import './Main.css'
import d from '../Assets/content.jfif'

const Content = () => {
  return (
     <section className="content">
      <div className="image">
        <img src={d} alt=""/>
      </div>
      <div className="text">
        <h1>Our Work</h1>
        <p>
          We focus on delivering visually appealing and user-friendly web
          pages. Our team works hard to ensure that every detail is perfect,
          from layout to color scheme.
        </p>
      </div>
    </section>
  )
}

export default Content
