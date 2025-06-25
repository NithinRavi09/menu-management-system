import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "text-blue-500" : "text-white";

  return (
    <div className="w-full bg-[#121618] text-white flex items-end justify-between px-6 md:px-16 lg:px-36 relative">
      {/* Logo Section */}

       <div className="flex items-end">
    
    {/* Icon - Positioned slightly lower */}
    <div className="relative -bottom-8">
      <img
        src={assets.icon}
        alt="logo"
        className="w-24 h-24 rounded-full p-1 shadow-lg -mb-3"
      />
    </div>

    {/* Text block: DEEP NET above, SOFT below */}
    <div className="flex flex-col leading-tight relative -bottom-7">
      <div className="flex gap-1">
        <span className="text-xl font-bold text-blue-500">DEEP</span>
        <span className="text-xl font-bold text-white">NET</span>
      </div>
      <span className="text-xl text-gray-300">SOFT</span>
    </div>

  </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8 text-md font-medium pb-3">
        <Link to="/" className={isActive("/")}>
          Home
        </Link>
        <Link to="/menu" className={isActive("/menu")}>
          Menu
        </Link>
        <Link to="/reservation" className={isActive("/reservation")}>
          Make a Reservation
        </Link>
        <Link to="/contact" className={isActive("/contact")}>
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-50">
        {isOpen ? (
          <X
            className="w-7 h-7 cursor-pointer text-white"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <Menu
            className="w-7 h-7 cursor-pointer text-white"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#121618] text-white flex flex-col items-center justify-center gap-8 z-40 text-xl font-semibold transition-all duration-300">
          <Link
            onClick={() => setIsOpen(false)}
            to="/"
            className={isActive("/")}
          >
            Home
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/menu"
            className={isActive("/menu")}
          >
            Menu
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/reservation"
            className={isActive("/reservation")}
          >
            Make a Reservation
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/contact"
            className={isActive("/contact")}
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
