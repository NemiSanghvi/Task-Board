import React, { useRef, useState } from 'react'
import Card from './Card'

function Foregrnd() {
  // const data= [
  //   desc:, relevance:,done:
  // ]
  const ref = useRef(null);

  const initialData = [
    {
      desc: "This is dummy",
      relevance: "Important",
      done: false
    },
    {
      desc: "This is dummy",
      relevance: "Important",
      done: true
    },
    {
      desc: "This is dummy",
      relevance: "Important",
      done: true
    },

  ]

  const [data, setData] = useState(initialData);

  const handleToggle = (item) => {
    const updatedData = data.map(d =>
      d === item ? { ...d, done: !d.done } : d
    );
    setData(updatedData);
  };


  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-8 flex-wrap bg-slate-200/50 '>
      {data.map((items, index) => (
        <Card data={items} reference={ref} onToggle={handleToggle} />
      ))}
    </div>
  )
}

export default Foregrnd