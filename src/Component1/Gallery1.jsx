import React from 'react'
import Content1 from './Content1'
import './Main1.css'
import b from '../Assets/img1.jfif'
import c from '../Assets/img2.jfif'
const Gallery1 = () => {
  return (
    <div>
        <section className="gallery">
           <img src={b} alt=""/>
           <img src={c} alt=""/>
         </section>
          <Content1/>
    </div>
  )
}

export default Gallery1
