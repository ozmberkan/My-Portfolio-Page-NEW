import React from 'react'
import NewestImage from './ui/NewestImage'
import useMedia from '../hooks/useMedia'


export default function NewestProject() {

  const isMobile = useMedia(1024)

  if (isMobile) {
    return (
      <div className='w-full flex flex-col gap-y-5 justify-between  '>
        <div className='w-full flex '>
          <NewestImage />
        </div>
        <div className='w-full rounded-xl border-2 border-[#222124]'>
          <div className='w-full px-4 py-1 bg-[#222124] rounded-tr-lg rounded-tl-lg'>
            <span className='font-noto text-sm'>En Yeni Proje - Yayın tarihi : 29.02.2024</span>
          </div>
          <div className='p-4 flex flex-col gap-y-5 justify-start items-start'>
            <h1 className='text-2xl font-bold font-noto'>easycourse <span className='text-xs text-white/50'>v1.01</span></h1>

            <p className='font-noto'>Easycourse, bir eğitmen ile öğrencinin ortak noktasıdır. Birbirleri ile iletişime geçip ders işleyebilir, tartışabilir ve sohbet edilebilirler. Easycourse şu anda tam olarak işlev görmese de UI/UX alanında gayet başarılıdır. Easycourse içerisinde 100'den fazla eğitmene ve 20’den fazla eğitim dalına anında erişebilir, kolayca öğrenebilirsiniz. Easycourse hem web hem de responsive tasarıma sahiptir.</p>
            <a href='https://easycourse.vercel.app' target='_blank' className='px-5 py-2 bg-[#222124] rounded-md'>Detaylar</a>
          </div>
        </div>
        
      </div>
    )
  }

  return (
    <div className='w-full  flex gap-x-5 justify-between h-[400px] '>

      <div className='w-1/2 flex '>
        <NewestImage />
      </div>
      <div className='w-1/2  rounded-xl border-2 border-[#222124]'>
        <div className='w-full px-4 py-1 bg-[#222124] rounded-tr-lg rounded-tl-lg'>
          <span className='font-noto text-sm'>En Yeni Proje - Yayın tarihi : 29.02.2024</span>
        </div>
        <div className='p-4 flex flex-col gap-y-5 justify-start items-start'>
          <h1 className='text-2xl font-bold font-noto'>easycourse <span className='text-xs text-white/50'>v1.01</span></h1>

          <p className='font-noto'>Easycourse, bir eğitmen ile öğrencinin ortak noktasıdır. Birbirleri ile iletişime geçip ders işleyebilir, tartışabilir ve sohbet edilebilirler. Easycourse şu anda tam olarak işlev görmese de UI/UX alanında gayet başarılıdır. Easycourse içerisinde 100'den fazla eğitmene ve 20’den fazla eğitim dalına anında erişebilir, kolayca öğrenebilirsiniz. Easycourse hem web hem de responsive tasarıma sahiptir.</p>
          <a href='https://easycourse.vercel.app' target='_blank' className='px-5 py-2 bg-[#222124] rounded-md'>Detaylar</a>
        </div>
      </div>
    </div>
  )
}
