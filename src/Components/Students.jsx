import React from 'react';
import Table from './Table';
const About = () => {
  return (
    <div style={{backgroundColor:"#d1c0cf",height:"100vh"}}>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",marginTop:"2em"}}>
        <h1>Students Details</h1>
        <button style={{height:"35px",width:"9vw",marginTop:"1.3em",backgroundColor:"#eef7fe",border:"2px solid black",borderRadius:"10px"}}>Add new student</button>
      </div>
      <Table />
    </div>
  )
}

export default About