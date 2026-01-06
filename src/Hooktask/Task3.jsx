import React, { useEffect, useState } from 'react'

const Task3 = () => {
    const[msg,setMsg]=useState(" ")
    const[res,setRes]=useState(false)
    useEffect(()=>{
      if(res)
      {
        setMsg("Loading...");
        setTimeout(()=>{
          setMsg("Done");
          setRes(false);
      },2000)
      }
    },[res])
  return (
    <div>
      <button onClick={()=>{setRes(true)}}>Show</button>
      <h2>{msg}</h2>
    </div>
  )
}

export default Task3
