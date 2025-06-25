import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#121618] flex justify-between items-center w-full h-16 px-6'>
      <p className='text-white text-sm'>
        © 2025 Deepnetsoft Solutions. All rights reserved.
      </p>
      <div className='text-white text-sm space-x-4'>
        <span className='cursor-pointer hover:underline'>Terms & Conditions</span>
        <span className='cursor-pointer hover:underline'>Privacy Policy</span>
      </div>
    </div>
  );
};

export default Footer;

