import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { addSkillAPI } from '../services/AllAPI';
import { useNavigate } from 'react-router-dom';

function SkillGenerator() {
  const redirect=useNavigate()

  const [skill, setSkill] = useState({
    skillname: "",
    topicname: "",
    progress: "",
    status: "",
    deadline: ""
  })
  // console.log(skill);
// post api call

const addskillbtn = async ()=>{
  const {skillname,topicname,progress,status,deadline}= skill
if (!skillname || !topicname || !progress || !status || !deadline) {
  alert("please fill the form completely")
}else{
  try{
      const result = await addSkillAPI(skill)
      console.log(result);
      if (result.status==201) {
        alert("skill added successfully")
        redirect('/viewskill')
      }
      
  }catch(err){
    console.log(err);
    
  }
}
}


  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ m: 0, p: 0 }}
      >
        <Box
          sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", px: 2 }}
        >
          <Box
            sx={{ width: "100%", maxWidth: 600, display: "flex", flexDirection: "column", gap: 1, fontWeight: 'bolder' }}
          >
            <h6 >Skill name*</h6>
            <TextField value={skill.skillname} onChange={e => setSkill({ ...skill, skillname: e.target.value })} variant="standard" margin="none" label="What tech are you aiming for?" />
            <h6>Topic name*</h6>
            <TextField value={skill.topicname} onChange={e=>setSkill({...skill,topicname:e.target.value})} variant="standard" margin="none" label="What are you learning inside this skill?" />
            <h6>Progress*</h6>
            <TextField value={skill.progress} onChange={e=>setSkill({...skill,progress:e.target.value})} variant="standard" margin="none" label="What’s your knowledge level here?" />
            <h6>Status*</h6>
            <TextField value={skill.status} onChange={e=>setSkill({...skill,status:e.target.value})} variant="standard" margin="none" label="What’s the status now?" />
            <h6>Deadline*</h6>
            <TextField value={skill.deadline} onChange={e=>setSkill({...skill,deadline:e.target.value})} variant="standard" margin="none" label="When do you want this done?" />

          </Box>
        </Box>

      </Box>
      {/* hey when u start styling it dont put this button inside the form,if u the the result wont console it will refresh before it console bcox the box is a form */}
                                      <button onClick={addskillbtn} className='btn btn-success mt-4' >submit</button>

    </>
  )
}

export default SkillGenerator
