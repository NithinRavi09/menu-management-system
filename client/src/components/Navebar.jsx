import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react"; // Rename icons for clarity
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-[#121618] text-white flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={assets.icon} alt="logo" className="w-36 h-auto" />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8 text-lg font-medium">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservation">Make a Reservation</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        {isOpen ? (
          <XIcon className="w-6 h-6 cursor-pointer" onClick={() => setIsOpen(false)} />
        ) : (
          <MenuIcon className="w-6 h-6 cursor-pointer" onClick={() => setIsOpen(true)} />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center gap-8 z-50 text-xl font-semibold">
          <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/menu">Menu</Link>
          <Link onClick={() => setIsOpen(false)} to="/reservation">Make a Reservation</Link>
          <Link onClick={() => setIsOpen(false)} to="/contact">Contact Us</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
