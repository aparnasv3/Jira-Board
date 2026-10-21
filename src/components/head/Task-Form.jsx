import React, { useState } from 'react'
import './Task-Form.css'
import Tag from '../Tag/Tag'

const TaskForm = ({setTaskArray}) => {
  
const [task,setTask]= useState({
  task:'',
  status:"Ready for Development",
  tags:[]
})
  function handleChange(e){
    const {value, name} = e.target;
    // console.log(e.target.value)
    // console.log(e.target.name)
     return(
       setTask((prev)=>{
         return{
           ...prev ,[name]:value
        }
       })
     )
    }
  
  const CheckTagStatus = (name) => {
  return task.tags.some((item) => item === name);
};
  const SelectedTag=(name)=>{
    setTask((prev)=>{
       const isSelected = prev.tags.includes(name);
       const newTag = isSelected ? prev.tags.filter((item)=> item!==name):[...prev.tags,name];
       return {...prev, tags:newTag}
    })
     }

  function handleSubmit(e){
     e.preventDefault();
     setTaskArray((prev)=>{
      return [...prev, task]
     });

      setTask({
      task:'',
      status:"Ready for Development",
      tags:[]
     })
  }   
console.log(task)

  return (
    
      <header className='app_header'>
    <form onSubmit={handleSubmit}>
       <input type='text' placeholder='Enter Task Details' name='task' value={task.task} onChange={handleChange}></input>
      
       <div className='head_bottom'>
       
        <div className='task_container'>
        <Tag name ='DEV' SelectedTag={SelectedTag} select={CheckTagStatus("DEV")}></Tag>
        <Tag name='QA' SelectedTag={SelectedTag} select={CheckTagStatus("QA")}></Tag>
        <Tag name= 'Product Owner' SelectedTag={SelectedTag} select={CheckTagStatus("Product Owner")}></Tag>
        </div>

        <div>
          <select className='select-Opt' name='status' value={task.status} onChange={handleChange}>
            <option value="Ready for Development">Ready for Development</option>
            <option value="In Progress">In Progress</option>
            <option value="Ready for test">Ready for test</option>
            <option value="Closed">Closed</option>
          </select>
          <button type='submit' id='add-btn'>+Add</button>
        </div>
       </div>
     </form> 
    </header>
    
  )
}

export default TaskForm 
