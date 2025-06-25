import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const MenuSection = () => {
  const [menus, setMenus] = useState([]);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [items, setItems] = useState([]);
  const [menuName, setMenuName] = useState('');

  // Fetch all menus
  const fetchMenus = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/getMenu`);
      const data = await res.json();
      setMenus(data);
      if (data.length > 0) {
        setActiveMenuId(data[0]._id);
        setMenuName(data[0].name);
        fetchItems(data[0]._id);
      }
    } catch (err) {
      console.error('Error fetching menus:', err);
    }
  };

  // Fetch items for selected menu
  const fetchItems = async (menuId) => {
    try {
      
      
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/get-Items/${menuId}`);
      const data = await res.json();
      setItems(data);
      const selectedMenu = menus.find(menu => menu._id === menuId);
      if (selectedMenu) setMenuName(selectedMenu.name);
    } catch (err) {
      console.error('Error fetching items:', err);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  return (
    <>
      {/* Menu Buttons */}
      <div className='w-full h-[80px] bg-repeat bg-center' style={{ backgroundImage: 'url("/bg-middle.png")' }}>
        <div className='flex justify-center items-center h-full'>
          {menus.map((menu) => (
            <button
              key={menu._id}
              className={`mx-2 px-8 py-3 font-bold border border-blue-500 cursor-pointer ${
                menu._id === activeMenuId ? 'bg-blue-500 text-white' : 'bg-black text-white'
              }`}
              onClick={() => {
                setActiveMenuId(menu._id);
                setMenuName(menu.name);
                fetchItems(menu._id);
              }}
            >
              {menu.name.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Items Section */}
      <div
        className='relative w-full min-h-[60vh] py-16 bg-cover bg-center flex items-center justify-center overflow-hidden'
        style={{ backgroundImage: 'url("/bg-items.png")' }}
      >
        <img src={assets.drink} alt="Decorative drink" className='absolute top-8 left-8 w-[100px] md:w-[150px] lg:w-[180px] z-10' />
        <img src={assets.cocktail} alt="Decorative cocktail" className='absolute bottom-8 right-8 w-[100px] md:w-[150px] lg:w-[180px] z-10' />

        <div className='relative border border-white w-[90%] max-w-[1000px] p-8 md:p-12 lg:p-16 flex flex-col items-center bg-transparent z-20'>
          <div className='flex items-center justify-center w-full mb-8'>
            <div className='flex-grow border-t border-white mx-4'></div>
            <h1 className='text-4xl md:text-5xl font-extrabold text-white tracking-widest drop-shadow-[2px_2px_0px_#B91C1C] whitespace-nowrap'>
              {menuName.toUpperCase()}
            </h1>
            <div className='flex-grow border-t border-white mx-4'></div>
          </div>

          {/* Items Grid */}
          {items.length === 0 ? (
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
    </>
  );
};

export default MenuSection;

