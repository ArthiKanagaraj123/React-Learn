import React, { useState } from 'react';

const Form2 = () => {
    const[input,setinput]=useState({})
    // function change(e){
    //     setfname(e.target.value)
    // }
    // function submit1(e){
    //     e.preventdefault()
    // }
    const change =(e)=> {
        // const fname=e.target.fname
        // const lname=e.target.lname
        // const mobile=e.target.mobile
        // const mail=e.target.mail
        // const add=e.target.add
        const name=e.target.name
        const value=e.target.value
        setinput(values=>({...values,[name]:value}))
    }
    

  return (
    <div>
      <form >
        <label >First Name:</label>
        <input type="text" name="fname" value={input.fname} onChange={change}/>
        <br/><br/>
         <label >Last Name:</label>
        <input type="text" name="lname" value={input.lname} onChange={change} />
        <br/><br/>
         <label >Mobile No:</label>
        <input type="text" name="mobile" value={input.mobile} onChange={change} />
        <br/><br/>
         <label >E-Mail:</label>
        <input type="text" name="mail" value={input.mail} onChange={change} />
        <br/><br/>
         <label >Address:</label>
        <input type="text" name="add" value={input.add} onChange={change} />
        <br/><br/>
        <input type="submit"></input>
      </form>
      <p>{input.fname}</p>
      <p>{input.lname}</p>
      <p>{input.mobile}</p>
      <p>{input.mail}</p>
      <p>{input.add}</p>
    </div>
  )
}

export default Form2
