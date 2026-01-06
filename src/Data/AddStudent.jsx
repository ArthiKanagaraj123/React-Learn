import React, { useState } from 'react'

const AddStudent = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
 
  const submitData = (e) => {
    e.preventDefault();
 
    fetch("http://localhost:8000/student", {
  	method: "POST",
  	headers: {
        "Content-Type": "application/json"
  	},
  	body: JSON.stringify({
    	name: name,
    	course: course,
    	email: email
  	})
	})
  	.then((res) => res.json())
  	.then((data) => {
        alert("Student Added Successfully");
        console.log(data);
  	});
  };
 
  return (
	<div>
  	<h2>Add Student</h2>
 
  	<form onSubmit={submitData}>
    	<input
          type="text"
          placeholder="Name"
      	value={name}
          onChange={(e) => setName(e.target.value)}
    	/>
    	<br /><br />
 
    	<input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
    	/>
    	<br /><br />
 
    	<input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
    	/>
    	<br /><br />
 
    	<button type="submit">Add Student</button>
  	</form>
	</div>
  );

}

export default AddStudent
