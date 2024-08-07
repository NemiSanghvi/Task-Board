import React from 'react'
import { CiViewList } from "react-icons/ci";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { motion } from "framer-motion"
import { SiTicktick } from "react-icons/si";


function Card({ data, reference, onToggle }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} className='relative flex-shrink-0 m-4 p-5 h-72 w-60 rounded-[20px] overflow-hidden bg-sky-900/50 text-blue-200'>
      <CiViewList className='text-3xl' />
      <p className='text-sm mt-3'>{data.desc}</p>
      <div className='absolute bottom-0 w-full h-16  bg-black left-0'>
        <div className='flex items-center mt-2 mb-2 px-6 justify-between'>
          <h6>{data.relevance}</h6>
          <button onClick={() => onToggle(data)}>
            {data.done ? <SiTicktick /> : <RiCheckboxBlankCircleLine />}
          </button>
          {/* <button onClick={() => data.done == true ? false : true}>
            
          </button> */}
        </div>
        <div className={`mt-4 p-2 w-full ${data.done ? 'bg-green-500' : ''}`}></div>
      </div>
    </motion.div>
  )
}

export default Card