import React from 'react'
import Navbar from './components/Navbar'
import NewestProject from './components/NewestProject'
import ProfileInfo from './components/ProfileInfo'




export default function App() {
  return (
    <>
      <div className=' w-full h-screen container mx-auto flex justify-center items-center' id='main-container'>
        <div className='w-full bg-[#0c0c0c]  h-[800px] rounded-2xl border-2 border-[#2f3336] px-14 py-12 flex flex-col gap-y-10' id='body-container'>
          <Navbar />
          <ProfileInfo />
          <NewestProject />
        </div>
      </div>
      <div className=' w-full h-screen container mx-auto flex justify-center items-center' id='main-container'>
        <div className='w-full bg-[#0c0c0c]  h-[800px] rounded-2xl border-2 border-[#2f3336] px-14 py-12 grid grid-cols-5 grid-rows-4 gap-5' id='body-container'>
          <div className=' bg-red-300 row-span-2 col-span-3'>box</div>
          <div className=' bg-green-400 row-start-3 row-end-5 col-start-1 col-end-4'>box</div>
          <div className=' bg-yellow-300 row-span-2 col-span-2'>box</div>
          <div className=' bg-blue-300 row-start-3 row-end-5 col-start-4 col-end-6'>box</div>
        </div>
      </div>
    </>
  )
}

