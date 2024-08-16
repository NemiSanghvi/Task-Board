import React from 'react'
import Backgrnd from './components/Backgrnd'
import Foregrnd from './components/Foregrnd'


export default function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-900  '>
      <Backgrnd />
      <Foregrnd />

    </div>
  )
}
