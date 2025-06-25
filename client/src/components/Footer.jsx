import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#121618] flex flex-col md:flex-row justify-between items-start md:items-center w-full h-auto md:h-16 px-6 py-4 gap-2 text-white text-sm'>
      <p>© 2025 Deepnetsoft Solutions. All rights reserved.</p>
      <div className='space-x-0 md:space-x-4 flex flex-col md:flex-row gap-1 md:gap-0'>
        <span className='cursor-pointer hover:underline'>Terms & Conditions</span>
        <span className='cursor-pointer hover:underline'>Privacy Policy</span>
      </div>
    </div>
  );
};

export default Footer;

