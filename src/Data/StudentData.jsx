import React, { useEffect, useState } from 'react'

const StudentData = () => {
    const [student, setStudent] = useState(null);
 
  useEffect(() => {
    fetch("http://localhost:4000/students/1")
  	.then((res) => res.json())
  	.then((data) => setStudent(data));
  }, []);
 
  return (
	<div>
      <h2>Student Details</h2>
 
  	{student && (
    	<>
      	<p>ID: {student.id}</p>
          <p>Name: {student.name}</p>
          <p>Course: {student.course}</p>
          <p>Email: {student.email}</p>
    	</>
  	)}
	</div>
  );
}


export default StudentData
