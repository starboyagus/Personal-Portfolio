//import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

//import profile from './assets/profile.jpg'
import profile from '../assets/four.png'


function MainPage() {

  return (
    <>
      {/* Desktop View */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className='flex'>
          <Link to="/projects" className='m-auto font-bold text-center content-center bg-[var(--primary)] h-24 w-48 mx-4 border-[var(--secondary)] rounded border-2 duration-200 transition ease-in-out hover:scale-110 hover:bg-[var(--secondary)] hover:border-[var(--primary)]'> MY PROJECTS </Link>
          <Link to="/socials" className='m-auto font-bold text-center content-center bg-[var(--primary)] h-24 w-48 mx-4 border-[var(--secondary)] rounded border-2 duration-200 transition ease-in-out hover:scale-110 hover:bg-[var(--secondary)] hover:border-[var(--primary)]'> MY SOCIALS </Link>
          <Link to="/profile" className='m-auto font-bold text-center content-center bg-green-800 h-48 w-48 mx-4 rounded-3xl border-black border-2 duration-300 transition ease-in-out hover:bg-pink-800 hover:rotate-45'>
            <img src={profile} className='rounded-2xl'/>
          </Link>
          <Link to="/resume" className='m-auto font-bold text-center content-center bg-[var(--primary)] h-24 w-48 mx-4 rounded border-[var(--secondary)] border-2 duration-200 transition ease-in-out hover:scale-110 hover:bg-[var(--secondary)] hover:border-[var(--primary)]'> MY RESUME </Link>
          <Link to="/contact" className='m-auto font-bold text-center content-center bg-[var(--primary)] h-24 w-48 mx-4 rounded border-[var(--secondary)] border-2 duration-200 transition ease-in-out hover:scale-110 hover:bg-[var(--secondary)] hover:border-[var(--primary)]'> CONTACT </Link>
        </div>
        </div>

      {/* Mobile View */}
      <div className='md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className=''>
        <div className='text-center content-center bg-red-800 h-[100px] w-[100px] my-4 rounded-xl border-pink-600 border-2'> MY PROJECTS </div>
        <div className='text-center content-center bg-blue-800 h-[100px] w-[100px] my-4 rounded-xl border-pink-600 border-2'> MY SOCIALS </div>
        <div className='text-center content-center bg-green-800 h-[100px] w-[100px] my-4 rounded-xl border-pink-600 border-2'>  </div>
        <div className='text-center content-center bg-teal-800 h-[100px] w-[100px] my-4 rounded-xl border-pink-600 border-2'> MY RESUME </div>
        <div className='text-center content-center bg-cyan-800 h-[100px] w-[100px] my-4 rounded-xl border-pink-600 border-2'> CONTACT </div>
        </div>
      </div>
    </>
  )
}

export default MainPage
