import React, { useState } from 'react'

const Form3 = () => {
    const[input,setinput]=useState({})
    const[output,setoutput]=useState({})
    const change=(e)=>{
        const name=e.target.name
        const value=e.target.value
        setinput(values=>({...values,[name]:value}))
    }
    const change1=()=>{
        setoutput(input)
    }
  return (
    <div>
      <form>
        <label >First Name:</label>
        <input type="text" name="fname" value={input.fname} onChange={change}/>
        <br/><br/>
         <label >Last Name:</label>
        <input type="text" name="lname" value={input.lname} onChange={change} />
        <br/><br/>
         <label >Mobile No:</label>
        <input type="text" name="mobile" value={input.mobile} onChange={change} />
        <br/><br/>
      </form>
      <button onClick={change1}>Submit</button>
      <h1>{output.fname}</h1>
      <h1>{output.lname}</h1>
      <h1>{output.mobile}</h1>
    </div>
  )
}

export default Form3
