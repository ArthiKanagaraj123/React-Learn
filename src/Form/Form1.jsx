import React, { useState } from 'react'

const Form1 = () => {
    const[fname,setfname]=useState("")
    const[value,setvalue]=useState("")
    // function change(e){
        // setfname(e.target.value)
        // console.log(fname)
    // }
    // function change1(e){
    //     e.preventDefault()
    //     setvalue(fname)
    // }
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault()
        setvalue(fname)
      }}>
        <label>First Name:</label>
        <input type='text' value={fname} onChange={(e)=>setfname(e.target.value)}></input>
        <br></br>
        <br></br>
        <input type='submit'>Submit</input>
      </form>
      <h1>{value}</h1>
    </div>
  )
}

export default Form1
