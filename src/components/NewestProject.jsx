import React from 'react'
import ddepth from '/src/assets/depth2.png'


export default function NewestProject() {
  return (
    <div className='w-full  flex gap-x-5 justify-between '>
      <div className='w-1/2 flex '>
        <img src={ddepth} alt="" className='w-full h-[350px] object-cover rounded-xl border-2 border-[#222124]' />
      </div>
      <div className='w-1/2  rounded-xl border-2 border-[#222124]'>
        <div className='w-full p-4 bg-gray-700/20 rounded-tr-lg rounded-tl-lg'>
          <span className='font-noto text-sm'>En Yeni Proje - Yayın tarihi : 29.02.2024</span>
        </div>
        <div className='p-4 flex flex-col gap-y-6 justify-start items-start'>
          <h1 className='text-2xl font-bold font-noto'>easycourse</h1>
          <p className='font-noto'>Easycourse, bir eğitmen ile öğrencinin ortak noktasıdır. Birbirleri ile iletişime geçip ders işleyebilir,tartışabilir ve sohbet edilebilirler.

            Easycourse şu anda tam olarak işlev görmese de UI/UX alanında gayet başarılıdır.

            Easycourse içerisinde 100'den fazla eğitmene ve 20’den fazla eğitim dalına anında erişebilir, kolayca öğrenebilirsiniz.

            Easycourse hem web hem de responsive tasarıma sahiptir.</p>
          <a href='https://easycourse.vercel.app' target='_blank' className='px-5 py-2 bg-gray-700/50 rounded-xl'>Detaylar</a>
        </div>
      </div>
    </div>
  )
}
