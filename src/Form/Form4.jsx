import React, { useState } from 'react'

const Form4 = () => {
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
      <form onSubmit={change1}>
        <label >First Name:</label>
        <input type="text" name="fname" value={input.fname} onChange={change}/>
        <br/><br/>
         <label >Last Name:</label>
        <input type="text" name="lname" value={input.lname} onChange={change} />
        <br/><br/>
         <label >Mobile No:</label>
        <input type="text" name="mobile" value={input.mobile} onChange={change} />
        <br/><br/>
        <input type='submit'></input>
      </form>
      <h1>{output.fname}</h1>
      <h1>{output.lname}</h1>
      <h1>{output.mobile}</h1>
    </div>
  )
}

export default Form4
