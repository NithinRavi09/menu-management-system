import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#121618] flex flex-col md:flex-row justify-center md:justify-between items-center w-full px-6 py-4 gap-2 text-white text-sm text-center'>
      <p>© 2025 Deepnetsoft Solutions. All rights reserved.</p>
      <div className='flex flex-col md:flex-row items-center gap-1 md:gap-4'>
        <span className='cursor-pointer hover:underline'>Terms & Conditions</span>
        <span className='cursor-pointer hover:underline'>Privacy Policy</span>
      </div>
    </div>
  );
};

export default Footer;


