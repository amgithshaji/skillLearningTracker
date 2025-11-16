import commonAPI from "./CommonAPI"
import serverURL from "./serverURL"




// skill add api - called by the skillgenrator when submit btn is clicked
export const addSkillAPI = async (skill)=>{
    return await commonAPI(`${serverURL}/skill`,"POST",skill)
}
// get skill api call when wenaviagte to the viewskill page
export const getSkillAPI = async ()=>{
    return await commonAPI(`${serverURL}/skill`,"GET",{})
}
// updateskill
export const updateSkillAPI = async (id,editedSkill)=>{
    return await commonAPI(`${serverURL}/skill/${id}`,"PUT",editedSkill)
}

// delete skill
export const deleteSkillAPI = async (id)=>{
    return await commonAPI(`${serverURL}/skill/${id}`,"DELETE",{})
}