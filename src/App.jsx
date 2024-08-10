import React from 'react'
import Backgrnd from './components/Backgrnd'
import Foregrnd from './components/Foregrnd'
import Button from './components/Button'

export default function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-900  '>
      <Backgrnd />
      <Foregrnd />

    </div>
  )
}
