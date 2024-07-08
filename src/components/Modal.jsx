import React from 'react'
import { useNavigate } from 'react-router-dom'

const Modal = ({ children }) => {
  const navigate = useNavigate()

  return (
    <div>
      <div onClick={()=>navigate('/')} className='w-screen h-screen absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-0'/>
      {children}
    </div>
  )
}

export default Modal