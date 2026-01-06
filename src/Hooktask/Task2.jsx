import React, { useEffect, useState } from 'react'

const Task2 = () => {
  const [num,setNum]=useState("")
  const [num1,setNum1]=useState("")
  const [msg,setMsg]=useState("")
  const [res,setRes]=useState(false)

  useEffect(()=>{
    if(res)
    {
      setMsg("Calculating...");
      setTimeout(()=>{
        setMsg(Number(num)+Number(num1));
        setRes(false);
      },2000);
    }
  },[res,num,num1])

  return (
    <div>
      <input type='number' onChange={(e)=>setNum(e.target.value)} />
      <br/>
      <br/>
      <input type='number' onChange={(e)=>setNum1(e.target.value)} />
      <br/>
      <br/>
      <button onClick={()=>setRes(true)}>Add</button>
      <br/><br/>
      <h2>{msg}</h2>
    </div>
  )
}

export default Task2
