import React from 'react'
import ShowMenu from '../components/ShowMenu'

const Home = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/bg-hero.jpg")] bg-cover' style={{ minHeight: 'calc(100vh - 80px)' }}>
      <h1 className='text-5xl md:text-6xl font-extrabold text-white tracking-widest drop-shadow-[2px_2px_0px_#B91C1C]'>
        WELCOME
      </h1>

      <p className='text-white max-w-2xl text-sm md:text-base'>
        Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.
      </p>
    </div>
    <ShowMenu/>
    </>
  )
}

export default Home

