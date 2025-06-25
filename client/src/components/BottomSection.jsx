import { LocateIcon, MailIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const BottomSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around p-8 md:p-16 w-full bg-black text-white gap-8 md:gap-4 lg:gap-16">
      {/* Connect with us section */}
      <div className="flex flex-col items-center text-center p-6 border border-gray-700 rounded-lg shadow-lg flex-1 min-w-[280px] max-w-[350px]">
        <h1 className="text-lg md:text-xl font-bold mb-4 text-blue-400">
          CONNECT WITH US
        </h1>
        <a
          href="tel:+919561843340"
          className="flex items-center text-gray-300 hover:text-white transition-colors mb-2"
        >
          <PhoneIcon size={18} className="mr-2 text-blue-400" /> +91 9561843340
        </a>
        <a
          href="mailto:Info@deepnetsoft.com"
          className="flex items-center text-gray-300 hover:text-white transition-colors"
        >
          <MailIcon size={18} className="mr-2 text-blue-400" />{" "}
          Info@deepnetsoft.com
        </a>
      </div>

      {/* Logo and Social Icons section */}
      <div className="relative flex flex-col items-center justify-center p-6 border border-gray-700 rounded-lg shadow-lg flex-1 min-w-[280px] max-w-[350px] bg-black">
        {/* Icon - Half Outside Top Center */}
        <div className="absolute -top-9 left-1/2 transform -translate-x-1/2">
          <img
            src={assets.icon}
            alt=""
            className="w-16 h-16 rounded-full bg-black"
          />
        </div>

        {/* Card Content */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-white mt-4 mb-4 tracking-widest">
          DEEP<span className="text-blue-500">NET</span>{" "}
          <span className="text-Gray-900">SOFT</span>
        </h1>
        <div className="flex gap-4 text-gray-500 text-xl">
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>

      {/* Find us section */}
      <div className="flex flex-col items-center text-center p-6 border border-gray-700 rounded-lg shadow-lg flex-1 min-w-[280px] max-w-[350px]">
        <h1 className="text-lg md:text-xl font-bold pb-4 text-blue-400">
          FIND US
        </h1>
        <p className="flex items-center text-sm text-gray-300">
          <FontAwesomeIcon className="pb-5" icon={faLocationDot} /> First floor,
          Geo infopark, Infopark EXPY, Kakkanad
        </p>
      </div>
    </div>
  );
};

export default BottomSection;
