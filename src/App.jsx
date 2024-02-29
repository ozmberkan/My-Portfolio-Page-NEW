import React from 'react'
import Navbar from './components/Navbar'
import NewestProject from './components/NewestProject'
import ProfileInfo from './components/ProfileInfo'




export default function App() {
  return (
    <div className=' w-full h-screen container mx-auto flex justify-center items-center' id='main-container'>
      <div className='w-full bg-[#0c0c0c] h-[800px] rounded-2xl border-2 border-[#2f3336] px-14 py-12 flex flex-col gap-y-10' id='body-container'>
        <Navbar />
        <ProfileInfo/>
        <NewestProject />
      </div>
    </div>
  )
}

