import { Routes, Route } from 'react-router-dom'

import MainPage from './components/MainPage'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Profile from './components/Profile'
import Resume from './components/Resume'
import Socials from './components/Socials'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />

        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/socials' element={<Socials />} />

      </Routes>
    </>
  )
}

export default App
