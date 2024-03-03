import React from 'react'
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";

export default function Navbar() {
    return (
        <div className='w-full flex justify-start items-center gap-x-[22px] group ' id='nav-bar '>
            <a  href="https://github.com/ozmberkan" target='_blank' className='h-14 w-14 bg-bg rounded-lg bg-[#222124] flex justify-center items-center hover:bg-[#222124]/50 transition-colors'><FaGithub size={20} /></a>
            <a href='https://twitter.com/berkannozm' target='_blank' className='h-14 w-14 bg-bg rounded-lg bg-[#222124] flex justify-center items-center hover:bg-[#222124]/50 transition-colors'><FaXTwitter size={20} /></a>
            <a className='h-14 w-14 bg-bg rounded-lg bg-[#222124] flex justify-center items-center' href='#projects'><BsStars size={20} /></a>
        </div >
    )
}
