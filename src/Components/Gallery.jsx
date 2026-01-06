import React from 'react'
import './Main.css'
import b from '../Assets/img1.jfif'
import c from '../Assets/img2.jfif'

const Gallery = () => {
  return (
    <section className="gallery">
      <img src={b} alt=""/>
      <img src={c} alt=""/>
    </section>
  )
}

export default Gallery
