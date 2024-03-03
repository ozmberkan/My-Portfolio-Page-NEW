import React from 'react'
import Navbar from './components/Navbar'
import NewestProject from './components/NewestProject'
import ProfileInfo from './components/ProfileInfo'
import Projects from './components/Projects'



export default function App() {
  return (
    <>
      <div className='w-full h-screen container mx-auto  flex justify-center items-center mb-12' id='main-container'>
        <div className='w-full bg-[#0c0c0c]  h-[800px] rounded-2xl border-2 border-[#222124] px-14 py-12 flex flex-col gap-y-10' id='body-container'>
          <Navbar />
          <ProfileInfo />
          <NewestProject />
        </div>
      </div>
      <div className=' w-full h-screen container mx-auto flex justify-center items-center mt-24 p-12 mb-24 ' id='main-container'>
        <Projects />
      </div>
    </>
  )
}

