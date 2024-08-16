import React from 'react'

function Backgrnd() {
  return (
    <>
      <div className='fixed z-[2] h-screen w-full'>
        <div className='absolute top-[5%] w-full py-10 flex justify-center text-4xl font-light hover:font-bold text-sky-900'>Work hard </div>
        <h1 className='absolute top-1/2  left-1/2 -translate-x-[50%] -translate-y-[50%] text-9xl leading-none tracking-tight text-sky-900'>
          Notes
        </h1>

      </div>
    </>
  )
}

export default Backgrnd