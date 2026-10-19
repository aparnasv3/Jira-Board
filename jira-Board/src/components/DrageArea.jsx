import React, { useState } from 'react'
import './DrageArea.css'

const DrageArea = () => {
  const[showArea , setShowArea] =useState(false)
  return (
    <div className = {showArea ? 'show-box' :'hide-box'} 
    onDragEnter={()=>{
      setShowArea(true)
    }}
    onDragLeave={()=>{
      setShowArea(false)
    }}
    >
      drop Area here
    </div>
  )
}

export default DrageArea
