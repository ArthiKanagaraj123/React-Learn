import React, { useEffect, useState } from 'react'

const Task5 = () => {
    const [msg,setMsg]=useState("")
    const [res,setRes]=useState(false)
    useEffect(()=>{
        if(res){
            setTimeout(()=>{
                setMsg("")
                setRes(false)
            },5000)
        }
    },[res])
  return (
    <div>
      <input type='text' value={msg} onChange={(e)=>setMsg(e.target.value)}/>
      <br/><br/>
      <button onClick={()=>setRes(true)}>Click</button>
    </div>
  )
}

export default Task5
