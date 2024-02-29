import React from 'react'
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";

export default function Navbar() {
    return (
        <div className='w-full px-14 py-8 flex justify-start items-center gap-x-[22px] ' id='nav-bar '>
            <button className='h-14 w-14 bg-bg rounded-lg bg-[#222124] flex justify-center items-center'><FaGithub /></button>
            <button className='h-14 w-14 bg-bg rounded-lg bg-[#222124] flex justify-center items-center'><FaXTwitter size={20} /></button>
            <button className='h-14 w-14 bg-bg rounded-lg bg-[#222124] flex justify-center items-center'><BsStars size={20} /></button>
        </div>
    )
}
