import React, { useEffect, useState } from 'react'

const TeacherData = () => {
    const [data,setdata]=useState(null)
    useEffect(()=>{
        fetch("http://localhost:3001/teacher/")
        .then((response)=>response.json())
        .then((res)=>setdata(res));
    },[]);
  return (
    <div>
        <h2>Teacher Details</h2>
      {data&& data.map((list)=>(
        <>
        <p key={list.id}>{list.name}</p>
        </>
      ))}
    </div>
  )
}

export default TeacherData
