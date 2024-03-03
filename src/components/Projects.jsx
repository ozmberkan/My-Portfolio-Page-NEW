import React from 'react'
import NewestImage from './ui/NewestImage'
import SpotifyImage from './ui/EduImage'
import ComingSoonImage from './ui/ComingSoonImage'
import toast, { Toaster } from 'react-hot-toast';
import useMedia from '../hooks/useMedia';



export default function Projects() {



    const isMobile = useMedia(1024)

    const Bilgilendir = () => {
        toast(
            "Takipte kalın! Yeni projem üzerinde çalışıyorum çok yakında sizlerle olacak.",
            {
                duration: 2000,
            }
        );
    }


    if (isMobile) {
        return (
            <div className='w-full mt-96  gap-y-5 rounded-2xl flex flex-col pb-12' id='projects'>
                <div className='flex flex-col gap-y-5'>
                    <div className=' col-span-2 row-span-2'>
                        <NewestImage />
                    </div>
                    <div className='col-span-3 row-span-2 rounded-xl border-2 border-[#222124]  '>
                        <div className='p-6 flex flex-col gap-y-5 justify-start items-start'>
                            <h1 className='text-2xl font-bold font-noto'>easycourse <span className='text-xs text-white/50'>v1.01</span></h1>
                            <p className='font-noto'>Easycourse, bir eğitmen ile öğrencinin ortak noktasıdır. Birbirleri ile iletişime geçip ders işleyebilir, tartışabilir ve sohbet edilebilirler. Easycourse şu anda tam olarak işlev görmese de UI/UX alanında gayet başarılıdır. Easycourse içerisinde 100'den fazla eğitmene ve 20’den fazla eğitim dalına anında erişebilir, kolayca öğrenebilirsiniz. Easycourse hem web hem de responsive tasarıma sahiptir.</p>
                            <a href='https://easycourse.vercel.app' target='_blank' className='px-5 py-2 bg-[#222124] rounded-md'>Detaylar</a>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-y-5'>
                    <div className=' col-span-2 row-span-2'>
                        <SpotifyImage />
                    </div>
                    <div className='col-span-3 row-span-2 rounded-xl h-[300px] border-2 border-[#222124]'>
                        <div className='p-6 flex flex-col gap-y-5 justify-start items-start'>
                            <h1 className='text-2xl font-bold font-noto'>edubilisim <span className='text-xs text-white/50'>v1.0</span></h1>
                            <p className='font-noto'>edubilisim, dokuz eylül üniversitesinin 'debis' portalının yeniden tasarlanmış halidir. Sadece HTML,CSS ve Javascript kullanılarak yapılmıştır. Daha modern bir tasarıma sahiptir. Kullanım kolaylığı amaçlanmıştır.</p>
                            <a href='https://edubilisim.netlify.app' target='_blank' className='px-5 py-2 bg-[#222124] rounded-md'>Detaylar</a>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col gap-y-5'>
                    <div className=' col-span-2 row-span-2'>
                        <ComingSoonImage />
                    </div>
                    <div className='col-span-3 row-span-2 rounded-xl border-2 border-[#222124] '>
                        <div className='p-6 flex flex-col gap-y-5 justify-start items-start'>
                            <h1 className='text-2xl font-bold font-noto'>çok yakında <span className='text-xs text-white/50'>v?</span></h1>
                            <p className='font-noto'>
                                Çok yakında...yeni bir proje ile karşınızda olacağım. Takipte kalın!
                            </p>
                            <button className='px-5 py-2 bg-[#222124] rounded-md' onClick={() => Bilgilendir()}>Detaylar</button>
                            <Toaster
                                position="top-center"
                                reverseOrder={false}
                            />
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    return (
        <div className='w-[100%]  bg-[#0c0c0c] border-2 border-[#222124]  rounded-2xl px-14 py-12 grid grid-cols-5 grid-rows-4 gap-10' id='projects'>
            <div className='col-span-3 row-span-2 rounded-xl border-2 border-[#222124] h-[300px] '>
                <div className='p-6 flex flex-col gap-y-5 justify-start items-start'>
                    <h1 className='text-2xl font-bold font-noto'>easycourse <span className='text-xs text-white/50'>v1.01</span></h1>
                    <p className='font-noto'>Easycourse, bir eğitmen ile öğrencinin ortak noktasıdır. Birbirleri ile iletişime geçip ders işleyebilir, tartışabilir ve sohbet edilebilirler. Easycourse şu anda tam olarak işlev görmese de UI/UX alanında gayet başarılıdır. Easycourse içerisinde 100'den fazla eğitmene ve 20’den fazla eğitim dalına anında erişebilir, kolayca öğrenebilirsiniz. Easycourse hem web hem de responsive tasarıma sahiptir.</p>
                    <a href='https://easycourse.vercel.app' target='_blank' className='px-5 py-2 bg-[#222124] rounded-md'>Detaylar</a>
                </div>
            </div>
            <div className=' col-span-2 row-span-2 rounded-xl h-[300px]'>
                <NewestImage />
            </div>
            <div className=' col-span-2 row-span-2 rounded-md h-[300px]'>
                <SpotifyImage />
            </div>
            <div className='col-span-3 row-span-2 rounded-xl h-[300px] border-2 border-[#222124]'>
                <div className='p-6 flex flex-col gap-y-5 justify-start items-start'>
                    <h1 className='text-2xl font-bold font-noto'>edubilisim <span className='text-xs text-white/50'>v1.0</span></h1>
                    <p className='font-noto'>edubilisim, dokuz eylül üniversitesinin 'debis' portalının yeniden tasarlanmış halidir. Sadece HTML,CSS ve Javascript kullanılarak yapılmıştır. Daha modern bir tasarıma sahiptir. Kullanım kolaylığı amaçlanmıştır.</p>
                    <a href='https://edubilisim.netlify.app' target='_blank' className='px-5 py-2 bg-[#222124] rounded-md'>Detaylar</a>
                </div>
            </div>
            <div className='col-span-3 row-span-2 rounded-xl border-2 border-[#222124] h-[300px] '>
                <div className='p-6 flex flex-col gap-y-5 justify-start items-start'>
                    <h1 className='text-2xl font-bold font-noto'>çok yakında <span className='text-xs text-white/50'>v?</span></h1>
                    <p className='font-noto'>
                        Çok yakında...yeni bir proje ile karşınızda olacağım. Takipte kalın!
                    </p>
                    <button className='px-5 py-2 bg-[#222124] rounded-md' onClick={() => Bilgilendir()}>Detaylar</button>
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                </div>
            </div>
            <div className=' col-span-2 row-span-2 rounded-xl h-[300px]'>
                <ComingSoonImage />
            </div>
        </div>
    )
}
