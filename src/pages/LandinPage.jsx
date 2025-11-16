import React from 'react'
import { Link } from 'react-router-dom'
import SkillGenerator from './SkillGenerator'


function LandinPage() {
  return (
    <>
    <h2 className='text-center' >design on progress</h2>
<div className='text-center'>
        <Link to={'skillgenerator'}  ><button  className='btn btn-success '>Get Started</button></Link>
    
</div>    </>
  )
}

export default LandinPage