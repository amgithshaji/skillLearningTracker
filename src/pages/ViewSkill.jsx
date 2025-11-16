import React, { useEffect } from 'react'
import { getSkillAPI } from '../services/AllAPI'
import { useState } from 'react'
import Edit from '../components/Edit'


function ViewSkill() {
 const [skill,setskill] =useState([])

useEffect(()=>{
  getskilldata()
},[])

const getskilldata = async()=>{
  const result = await getSkillAPI()
  // console.log(result);
  if (result.status==200) {
    setskill(result.data)
  }
}
// console.log(skill);

  return (
    <div>
   <div className="container mt-4 ">
          <h2>Contact List</h2>
     {skill.map((item)=>( 
      <div key={item.id} className="card text-center rounded-5 p-1 shadow m-4">
  <div className="card-header ">
<div className='d-flex align-items-center justify-content-center'>
   <h5 className=' fw-bold' > {item?.skillname}</h5>  
  
</div>  </div>
  <div className="card-body">
<div className='d-flex align-items-center justify-content-center'>
       <h6 className="card-title">{item?.topicname}</h6>
  
</div>
<div className='d-flex align-items-center justify-content-center' >
      <h6 className="card-title">{item?.progress}</h6>
  
</div>   
<div className='d-flex align-items-center justify-content-center' >
  <h6 className="card-text">{item?.status}</h6>
  
</div> 
<div className='d-flex align-items-center justify-content-center' >
  <h6 className="card-text">{item?.deadline}</h6>
  
</div> 
  <div className=' d-flex align-items-center justify-content-center ' >
      {/* <  MdDelete className='fs-3 me-5 text-danger ' /> */}
       <Edit getskilldata={getskilldata} skill={item} setSkill={setskill} />
   </div>
  </div>
  <div className="card-footer text-body-secondary">
    {/* <img style={{width:"17vh"}} src="/footerlogo.png" alt="no img" /> */}
  </div>
</div>))}
        </div> 
           </div>
  )
}

export default ViewSkill