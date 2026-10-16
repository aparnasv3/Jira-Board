import React, { useState } from 'react'
import './App.css'
import TaskForm from './components/head/Task-Form'
import Section from './components/Section/Section'

function App() {

  const [taskArray , setTaskArray]= useState([])
  
  return (
  <div className='app'>
    <h1>Jira Board</h1>
    <TaskForm  setTaskArray={setTaskArray}/>
    <main className='app_main'>


      <Section title='Ready for Development'
        taskArray={taskArray}
        status='Ready for Development'/>

      <Section title='In Progress'  
      taskArray={taskArray}
      status='In Progress'/>

      <Section title='Ready for test' 
      taskArray={taskArray} 
      status='Ready for test' />

      <Section title='Closed' 
      taskArray={taskArray}
      status='Closed'/>
    </main>
  </div>
  )
}

export default App
