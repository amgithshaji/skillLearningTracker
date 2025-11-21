import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
<section   style={{ backgroundColor: "#f2f2f2", height: "auto",paddingTop:"100px",paddingBottom:"50px" }} >
      <div className='text-center '>
        <h5 className='mt-5 fw-light' >You Took a Little Lost..</h5>
        <h1 style={{fontSize: "clamp(28px, 8vw, 80px)"}} >Ooops!...Page Not <span style={{color:"blue"}}>found</span></h1>
                <h5 className=' fw-light mb-3' >This page seems to be missing, but don’t worry — your progress isn’t lost. Every skill you’ve tracked <br /> so far is safe,  and there are still many more milestones ahead."</h5>
   <Link to={'/'}  ><button style={{ backgroundColor: "blue", fontSize: "16px" }} className='btn rounded-5 me-3 fw-light text-white'>Go Back Home</button></Link>
      </div>
  
</section>  
)
}

export default Pnf