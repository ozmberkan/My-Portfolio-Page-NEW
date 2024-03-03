import React from 'react'
import useMedia from '/src/hooks/useMedia'


export default function ComingSoonImage() {

  const isMobile = useMedia(1024)

  if (isMobile) {
    return (
      <div className=' w-full h-[150px] flex justify-center'>
        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="400" fill="none"
            r="156" stroke-width="87" stroke="#E387FF"
            stroke-dasharray="282 1400"
            stroke-linecap="round"
            stroke-dashoffset="15" />
        </svg>
      </div>
    )
  }

  return (
    <svg id="visual" className='w-full rounded-xl h-full' xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="900" height="600" fill="#090909"></rect><g transform="translate(455.64043643741917 306.3743145853533)"><path d="M136.5 -197.4C175 -159.9 203.1 -117.5 217.7 -71C232.4 -24.6 233.6 25.9 218.4 70.5C203.2 115.1 171.6 153.8 132.4 188.9C93.3 224 46.6 255.5 1.3 253.8C-44.1 252 -88.2 217 -129.9 182.7C-171.5 148.4 -210.8 114.9 -228.7 71.5C-246.6 28.2 -243.2 -24.8 -225.4 -71.3C-207.6 -117.7 -175.5 -157.6 -135.6 -194.6C-95.6 -231.6 -47.8 -265.8 0.6 -266.6C49 -267.4 98 -234.8 136.5 -197.4" fill="#353535"></path></g></svg>
  )
}
