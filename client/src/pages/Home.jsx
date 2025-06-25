import React from 'react'
import ShowMenu from '../components/ShowMenu'

const Home = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/bg-hero.jpg")] bg-cover' style={{ minHeight: 'calc(60vh - 80px)' }}>
      <h1 className='text-5xl md:text-6xl font-extrabold text-white tracking-widest drop-shadow-[2px_2px_0px_#B91C1C]'>
        WELCOME
      </h1>
    </div>
    <ShowMenu/>
    </>
  )
}

export default Home

