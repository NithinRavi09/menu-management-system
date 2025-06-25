import React from 'react'

const HeroSection = () => {
  return (
    <div className='pt-20 flex flex-col items-center justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/bg-hero.jpg")] bg-cover h-[60vh]'>
      <h1 className='text-5xl md:text-6xl font-extrabold text-white tracking-widest drop-shadow-[2px_2px_0px_#B91C1C]'>
        MENU
      </h1>

      <p className='text-white max-w-2xl text-sm md:text-base mx-auto leading-relaxed mt-2'>
      Please take a look at our menu featuring food, drinks, and brunch.
      <br className="hidden md:block" />
      If you'd like to place an order, use the "Order Online" button located below the menu.
    </p>
    </div>
  )
}

export default HeroSection
