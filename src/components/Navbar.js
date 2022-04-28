import React from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";
import AppleLogo from "../assets/appleImages/appleLogo.png";

const Navbar = () => {
  return (
    <div className="bg-[#2f2f32] w-[100%] h-[48px] mx-0 text-white">
      <div className="flex md:hidden w-full h-[48px] justify-between px-2">
        <div className="flex justify-center items-center">
          <FaBars className="w-[20px] h-auto" />
        </div>

        <div className="flex justify-center items-center">
          <img src={AppleLogo} className="w-[30px] h-auto" />
        </div>

        <div className="flex justify-center items-center">
          <AiOutlineShopping className="w-[25px] h-auto" />
        </div>
      </div>

      {/* FullScreen Menu */}
      <div className="hidden md:flex max-w-[1200px] h-full m-auto">
        <ul className="flex w-full justify-between items-center">
          <li>
            {" "}
            <img src={AppleLogo} className="w-[30px] h-auto" />
          </li>
          <li className="font-light text-[10px] cursor-pointer text-white/60 hover:text-white/100 duration-300">
            Store
          </li>
          <li className="font-light text-[10px] cursor-pointer text-white/60 hover:text-white/100 duration-300">
            Mac
          </li>
          <li className="font-light text-[10px] cursor-pointer text-white/60 hover:text-white/100 duration-300">
            Ipad
          </li>
          <li className="font-light text-[10px] cursor-pointer text-white/60 hover:text-white/100 duration-300">
            iPhone
          </li>
          <li className="font-light text-[10px] cursor-pointer text-white/60 hover:text-white/100 duration-300">
            Watch
          </li>
          <li className="font-light text-[10px] cursor-pointer text-white/60 hover:text-white/100 duration-300">
            AirPods
          </li>
          <li className="font-light text-[10px] cursor-pointer text-white/60 hover:text-white/100 duration-300">{`TV & Home`}</li>
          <li className="font-light text-[10px] cursor-pointer text-white/60 hover:text-white/100 duration-300">
            Nur mit Apple
          </li>
          <li className="font-light text-[10px] cursor-pointer text-white/60 hover:text-white/100 duration-300">
            Asseciours
          </li>
          <li className="font-light text-[10px] cursor-pointer text-white/60 hover:text-white/100 duration-300">
            Support
          </li>
          <li>
            <AiOutlineSearch className="w-[25px] h-auto" />
          </li>
          <li>
            <AiOutlineShopping className="w-[25px] h-auto" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
