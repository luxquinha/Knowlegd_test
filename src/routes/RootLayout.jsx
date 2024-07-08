import React from 'react'
import MainHeader from '../components/MainHeader'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='w-screen h-screen bg-zinc-700'>
      <MainHeader/>
      <Outlet/>
    </div>
  )
}

export default RootLayout
