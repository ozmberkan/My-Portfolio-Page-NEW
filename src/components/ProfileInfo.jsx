import React from 'react'
import myPhoto from '/src/assets/profile.png'
import { TypeAnimation } from 'react-type-animation';

export default function ProfileInfo() {
    return (
        <div className='w-full flex gap-x-5'>
            <img src={myPhoto} alt="" className='w-52 rounded-xl border-2 border-[#222124]' />
            <div className='flex flex-col justify-start '>
                <h1 className='text-textColor font-bold text-5xl mb-2 font-noto'>Merhaba, Ben Berkan Özmen</h1>
                <TypeAnimation
                    className='text-textColor font-light text-4xl mt-2 font-noto'
                    sequence={[
                        'Front-end geliştirici & tasarımcı & öğrenci olarak projeler üzerinde çalışmaya devam ediyorum.',
                        1000,
                        'Projelerime aşağı kaydırarak ulaşabilirsiniz.',
                        1000,
                        'React, TailwindCSS, Figma, Adobe XD ve daha fazlası.',
                        1000,
                    ]}
                    wrapper="span"
                    speed={44}
                    repeat={Infinity}
                />
            </div>
        </div>
    )
}
