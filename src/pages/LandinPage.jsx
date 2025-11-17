import React from 'react'
import { Link } from 'react-router-dom'


function LandinPage() {
  return (
    <>
  <div style={{marginTop:"40%"}} className='text-center'>
          <Link to={'skillgenerator'}  ><button  className='btn btn-success '>Get Started</button></Link>
      <Link to={'/viewskill'} ><button className='btn btn-primary' >view skill</button></Link>
  </div>  
  </>
  )
}

export default LandinPage