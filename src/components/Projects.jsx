import React from 'react'
import { motion } from "framer-motion"

export default function Projects() {

  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <div className='w-full bg-yellow-500 px-4 py-4 flex justify-center items-center mt-12'>
      Projects
    </div>
    </motion.div>
  )
}
