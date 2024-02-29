import React from 'react'
import Navbar from './components/Navbar'
import myPhoto from '/src/assets/profile.png'
import ddepth from '/src/assets/depth.jpg'
import { TypeAnimation } from 'react-type-animation';



export default function App() {
  return (
    <div className=' w-full h-screen container mx-auto flex justify-center items-center' id='main-container'>
      <div className='w-full bg-[#0c0c0c] h-[800px] rounded-2xl border-2 border-[#2f3336]' id='body-container'>
        <Navbar />
        <div className='w-full px-14 flex py-4 gap-x-5'>
          <img src={myPhoto} alt="" className='w-52 rounded-md border-2 border-[#222124]' />
          <div className='flex flex-col justify-center '>
            <h1 className='text-textColor font-bold text-5xl mb-2 font-lato'>Hi, im Berkan Ozmen</h1>
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

        <div className='px-14 mt-6 w-full '>
          <div className=' h-[350px] rounded-md border-2 border-[#222124] flex flex-col'>
            <div className='w-full px-4 py-2 bg-gray-600/10 flex items-center'>
              <span className='font-lato'>newest projects!</span>
            </div>
            <div className='flex justify-between items-center p-4'>
              
              <img src={ddepth} alt="" className='w-[30%] h-[280px] object-cover rounded' />

              <div className='w-[70%] h-[280px] p-4 flex flex-col gap-y-5  '>
                <h1 className='text-2xl'>Project Name</h1>
                <p className='text-md'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error explicabo quam esse. Ducimus at beatae voluptatum, delectus architecto quaerat perferendis porro iure consectetur iusto tempora incidunt natus dignissimos tenetur.
                </p>
                <div className='flex justify-start gap-x-5 items-center'>
                  <button className='px-4 py-2 bg-gray-700/30 mt-2 rounded'>Detail</button>
                  <button className='px-4 py-2 bg-gray-700/30 mt-2 rounded'>Detail</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

