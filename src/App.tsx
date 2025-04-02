// import { Routes, Route } from 'react-router-dom'

import profile from './assets/profile.jpg'


function App() {

  return (
    <>
      {/* Desktop View */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className='flex '>
          <div className='bg-red-800 h-[200px] w-[200px] mx-4 rounded-xl border-pink-600 border-2'> MY PROJECTS </div>
          <div className='bg-blue-800 h-[200px] w-[200px] mx-4 rounded-xl border-pink-600 border-2'> MY SOCIALS </div>
          <div className='bg-green-800 h-[200px] w-[200px] mx-4 rotate-45 transition rounded-xl border-pink-600 border-2 duration hover:bg-pink-800  hover:rotate-0'>
            <img src={profile} className='rounded-xl'/>
          </div>
          <div className='bg-teal-800 h-[200px] w-[200px] mx-4 rounded-xl border-pink-600 border-2'> MY RESUME </div>
          <div className='bg-cyan-800 h-[200px] w-[200px] mx-4 rounded-xl border-pink-600 border-2'> CONTACT </div>
        </div>
        </div>

      {/* Mobile View */}
      <div className='md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className=''>
        <div className='bg-red-800 h-[100px] w-[100px] my-4 rounded-xl border-pink-600 border-2'> MY PROJECTS </div>
        <div className='bg-blue-800 h-[100px] w-[100px] my-4 rounded-xl border-pink-600 border-2'> MY SOCIALS </div>
        <div className='bg-green-800 h-[100px] w-[100px] my-4 rounded-xl border-pink-600 border-2'>  </div>
        <div className='bg-teal-800 h-[100px] w-[100px] my-4 rounded-xl border-pink-600 border-2'> MY RESUME </div>
        <div className='bg-cyan-800 h-[100px] w-[100px] my-4 rounded-xl border-pink-600 border-2'> CONTACT </div>
        </div>
      </div>
    </>
  )
}

export default App
