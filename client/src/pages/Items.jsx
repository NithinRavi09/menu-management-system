import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { useParams } from 'react-router-dom'

const Items = () => {
  const { menuId } = useParams()
  const [items, setItems] = useState([])
  const [menuName, setMenuName] = useState('')
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ name: '', price: '', description: '', menuId })

  useEffect(() => {
    setFormData(prev => ({ ...prev, menuId }))
    fetchItemsAndMenu()
  }, [menuId])

  const fetchItemsAndMenu = async () => {
    try {
      const [itemsRes, menuRes] = await Promise.all([
        fetch(`${import.meta.env.VITE_API_BASE_URL}/api/get-Items/${menuId}`),
        fetch(`${import.meta.env.VITE_API_BASE_URL}/api/get-Menu-Data/${menuId}`)
      ])

      const itemsData = await itemsRes.json()
      const menuData = await menuRes.json()

      setItems(itemsData)
      setMenuName(menuData.name || 'Menu')
    } catch (error) {
      console.error('Error fetching menu or items:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddItems = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/addMenuItem`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...formData, price: Number(formData.price) })
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message)
      }

      setFormData({ name: '', price: '', description: '', menuId })
      setShowForm(false)
      fetchItemsAndMenu()
    } catch (error) {
      console.error('Error adding item:', error.message)
    }
  }

  return (
    <div
      className='relative w-full h-screen py-16 px-4 bg-cover bg-center flex flex-col items-center gap-6'
      style={{ backgroundImage: 'url("/bg-items.png")' }}
    >
      <button
  className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700'
  onClick={() => setShowForm(!showForm)}
>
  {showForm ? 'Cancel' : 'Add Item'}
</button>


      {showForm && (
        <form
          onSubmit={handleAddItems}
          className='p-4 rounded-lg border border-gray-300 shadow-md w-full max-w-md flex flex-col gap-4'
        >
          <input
            type='text'
            placeholder='Name'
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className='border text-white border-gray-300 px-3 py-2 rounded bg-transparent'
          />
          <input
            type='text'
            placeholder='Price'
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            required
            className='border text-white border-gray-300 px-3 py-2 rounded bg-transparent'
          />
          <textarea
            placeholder='Description'
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
            className='border text-white border-gray-300 px-3 py-2 rounded resize-none bg-transparent'
          />
          <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
            Submit
          </button>
        </form>
      )}

      {/* Top-left drink image */}
      <img
        src={assets.drink}
        alt="Decorative drink"
        className='absolute top-8 left-8 w-[100px] md:w-[150px] lg:w-[180px] z-10'
      />

      {/* Bottom-right cocktail image */}
      <img
        src={assets.cocktail}
        alt="Decorative cocktail"
        className='absolute bottom-8 right-8 w-[100px] md:w-[150px] lg:w-[180px] z-10'
      />

      {/* Main content container */}
      <div className='relative border border-white w-[90%] max-w-[1000px] p-8 md:p-12 lg:p-16 flex flex-col items-center bg-transparent z-20'>
        {/* Dynamic title with menu name */}
        <div className='flex items-center justify-center w-full mb-8'>
          <div className='flex-grow border-t border-white mx-4'></div>
          <h1 className='text-4xl md:text-5xl font-extrabold text-white tracking-widest drop-shadow-[2px_2px_0px_#B91C1C] whitespace-nowrap'>
            {menuName.toUpperCase()}
          </h1>
          <div className='flex-grow border-t border-white mx-4'></div>
        </div>

        {/* Items Grid */}
        {loading ? (
          <p className='text-white'>Loading...</p>
        ) : items.length === 0 ? (
          <p className='text-white text-xl'>No items found</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 w-full rounded-2xl'>
            {items.map((item, index) => (
              <div key={index} className='flex flex-col'>
                <div className='flex justify-between items-baseline mb-1'>
                  <h2 className='text-white text-lg md:text-xl font-bold uppercase'>
                    {item.name}......
                  </h2>
                  <span className='text-white text-lg md:text-xl font-bold ml-4'>
                    ${item.price}
                  </span>
                </div>
                <p className='text-gray-300 text-sm md:text-base'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Items
