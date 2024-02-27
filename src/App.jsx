import React from 'react'
import Navbar from './components/Navbar'
import myPhoto from '/src/assets/profile.png'
import { TypeAnimation } from 'react-type-animation';



export default function App() {
  return (
    <div className=' w-full h-screen container mx-auto flex justify-center items-center' id='main-container'>
      <div className='w-full bg-bgColor h-[800px] rounded-xl border border-[#353535]' id='body-container'>
        <Navbar />
        <div className='w-full px-14 flex py-4 gap-x-5 mt-6'>
          <img src={myPhoto} alt="" className='w-52 rounded-xl border-2 border-borderColor' />
          <div className='flex flex-col justify-center '>
            <h1 className='text-textColor font-bold text-5xl mb-2 font-lato'>During production | berkanozmen</h1>
            <TypeAnimation
              className='text-textColor font-semibold text-4xl mt-2 font-lato'
              sequence={[
                'Front-end developer & designer & student, I continue to work on projects.',
                2000,
                'You can access my projects by scrolling down.',
                2000,
                'React, TailwindCSS, Figma, Adobe XD, and more.',
                2000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </div>
        </div>

        <div className='w-full'>
          <div className='px-14 '>
            <span>to be continued</span>
          </div>
        </div>
      </div>
    </div>
  )
}

