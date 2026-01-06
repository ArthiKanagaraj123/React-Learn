import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Router3 = () => {
  return (
    <div>
       <h1>This is my third page</h1>
       <nav>
        <Link to='Router4'>Router4</Link>
        <Link to='Router5'>Router5</Link>
       </nav>
       <Outlet/>
    </div>
  )
}

export default Router3
