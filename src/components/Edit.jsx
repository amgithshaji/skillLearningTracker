import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { deleteSkillAPI, updateSkillAPI } from '../services/AllAPI';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit({ skill,getskilldata }) {
  const [open, setOpen] = useState(false);
  const [editSkill, setEditSkill] = useState({ ...skill });



  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
// update api
  const updateBtn = async () => {
    const { id, skillname, topicname, progress, status, deadline } = editSkill;

    if (!skillname || !topicname || !progress || !status || !deadline) {
      alert("Please fill the form completely");
      return;
    }

    try {
      const result = await updateSkillAPI(id, editSkill);
         if (result.status === 200) {
        alert("Skill updated successfully!");
        handleClose();
        getskilldata()
      }
    } catch (error) {
      console.log(error);
    }
  };

  // delete api
  const removeBtn = async(id)=>{
   await deleteSkillAPI(id)
   getskilldata()
  }

  return (
    <div>
      <button onClick={handleOpen} className='btn btn-primary'>edit</button>
<button onClick={()=>removeBtn(skill?.id)} className='btn btn-danger ms-2' >delete</button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Edit the Skill
          </Typography>

          <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1 }}>
            <TextField value={editSkill.skillname} onChange={e => setEditSkill({ ...editSkill, skillname: e.target.value })}variant="standard"label="Skill Name"/>
            <TextField value={editSkill.topicname} onChange={e => setEditSkill({ ...editSkill, topicname: e.target.value })} variant="standard"label="Topic Name"/>
            <TextField value={editSkill.progress} onChange={e => setEditSkill({ ...editSkill, progress: e.target.value })} variant="standard"label="Progress"/>
            <TextField value={editSkill.status} onChange={e => setEditSkill({ ...editSkill, status: e.target.value })}variant="standard"label="Status"/>
            <TextField value={editSkill.deadline} onChange={e => setEditSkill({ ...editSkill, deadline: e.target.value })}variant="standard"label="Deadline"/>
            <button onClick={updateBtn} className='btn btn-primary mt-3'>Update</button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Edit;
