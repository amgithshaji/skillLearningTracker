import React, { useEffect } from 'react'
import { getSkillAPI } from '../services/AllAPI'
import { useState } from 'react'
import Edit from '../components/Edit'
import { Link } from 'react-router-dom'





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
<section  style={{backgroundColor:"#f2f2f2", minHeight:"50vh",paddingTop:"100px",paddingBottom:"40px"}}>
  {
    skill?.length>0?
      <div>
     <div className="container mt-4 ">
       {skill.map((item)=>( 
        <div key={item.id} className="card text-center rounded-5 p-1 shadow m-4">
    <div className="card-header ">
  <div className='d-flex align-items-center justify-content-center'>
     <h5 className=' fw-bold' > {item?.skillname}</h5>  
    
  </div>  </div>
    <div className="card-body">
  <div className='d-flex align-items-center justify-content-center'>
         <h6 className="card-title "><span style={{color:"blue"}} >Topic</span>: {item?.topicname}</h6>
    
  </div>
   
  <div className='d-flex align-items-center justify-content-center' >
    <h6 className="card-text"><span style={{color:"blue"}} >Status</span>: {item?.status}</h6>
    
  </div> 
  <div className='d-flex align-items-center justify-content-center mt-1' >
    <h6 className="card-text"><span style={{color:"blue"}} >Deadline</span>: {item?.deadline}</h6>
    
  </div> 
  <div className='d-flex align-items-center justify-content-center' >
        <h6 className="card-title"><span style={{color:"blue"}}  >Note</span>: {item?.progress}</h6>
    
  </div>  
    <div className=' d-flex align-items-center justify-content-center ' >
        {/* <  MdDelete className='fs-3 me-5 text-danger ' /> */}
         <Edit getskilldata={getskilldata} skill={item} setSkill={setskill} />
     </div>
    </div>
    <div className="card-footer text-body-secondary">
      <img style={{width:"15vh"}} src="/hyredfooter.png" alt="no img" />
    </div>
  </div>))}
          </div> 
             </div>
             :
           <div className='d-flex align-items-center justify-content-center mt-5' >
                    <div className=" rounded-5 " style={{ width: "25rem", backgroundColor: "#f2f2f2" }}>
                <img src="/empty.gif" className="card-img-top rounded-5 p-2" alt="..." />
                <div className="card-body  text-dark text-center">
                  <h2 className='fw-bold' >If not today, then when?</h2>
                  <p className="card-text fs-5">Add a skill and watch your focus turn into mastery.
</p>
                            <Link to={'/skillgenerator'}  ><button style={{ backgroundColor: "blue", fontSize: "16px" }} className='btn rounded-5 me-3 text-white'>Take the first step.
</button></Link>

                </div>
              </div>
           </div>
            
}
</section>
  )
}

export default ViewSkill