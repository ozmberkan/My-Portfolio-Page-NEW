import React from 'react'
import { motion } from "framer-motion"

export default function WhoMe() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
    <div className='w-full  px-4 py-4 flex justify-center items-center mt-12 flex-col'>
      <h1 className='text-[150px] font-mono text-white drop-shadow-xl w-full text-center'>Hi, im Berkan</h1>
      <span className='text-[50px] font-mono text-white drop-shadow-xl w-full text-center'>A front-end developer</span>
    </div>
  </motion.div>
  )
}
