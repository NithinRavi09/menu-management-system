import React from 'react'
import { Navigate, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import Menu from './pages/Menu'
import Navbar from './components/Navebar'
import Contact from './pages/Contact'
import Items from './pages/Items'
import Reservation from './pages/Reservation'


const App = () => {
  return (
    <>
      <Toaster/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Menu' element={<Menu/>} />
        <Route path='/items/:menuId' element={<Items />} />
        <Route path='/reservation' element={<Reservation/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
