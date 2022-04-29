import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";
import AppleLogo from "../assets/appleImages/appleLogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={
        !open
          ? `bg-[#2f2f32] w-[100%] h-[48px] mx-0 text-white`
          : `bg-[#000000] w-[100%] h-[48px] mx-0 text-white`
      }
    >
      <div className="flex md:hidden w-full h-[48px] justify-between px-5">
        <div className="flex justify-center items-center m-0">
          <FaBars
            onClick={() => {
              setOpen(!open);
            }}
            className="w-[20px] h-auto"
          />
        </div>

        <div className="flex justify-center items-center cursor-pointer">
          <img src={AppleLogo} className="w-[30px] h-auto" alt="apple logo" />
        </div>

        <div className="flex justify-center items-center m-0">
          <AiOutlineShopping className="w-[25px] h-auto cursor-pointer" />
        </div>
      </div>
      <div
        className={
          open ? `w-full h-full bg-black z-50 fixed top-0 md:hidden` : `hidden`
        }
      >
        <div className="flex md:hidden w-full h-[48px] justify-between px-5">
          <div className="flex justify-center items-center m-0">
            <FaBars
              onClick={() => {
                setOpen(!open);
              }}
              className="w-[20px] h-auto"
            />
          </div>

          <div className="flex justify-center items-center cursor-pointer">
            <img src={AppleLogo} className="w-[30px] h-auto" alt="apple logo" />
          </div>

          <div className="flex justify-center items-center m-0">
            <AiOutlineShopping className="w-[25px] h-auto cursor-pointer" />
          </div>
        </div>
        <div>
          <form className="flex justify-center border-b-[0.5px] border-[#ffffff79] pb-4">
            <input
              className="w-[80%] h-[32px] rounded-lg bg-[#2a2a2a]"
              value=""
              placeholder="Search apple.com"
            ></input>
          </form>
          <div className="flex w-[100%] justify-center">
            <ul className="flex flex-col w-[80%] justify-start leading-10">
              <li className="font-thin m-0 border-b-[0.5px] border-[#ffffff79] text-white/80">
                Store
              </li>
              <li className="font-thin m-0 border-b-[0.5px] border-[#ffffff79] text-white/80">
                Mac
              </li>
              <li className="font-thin m-0 border-b-[0.5px] border-[#ffffff79] text-white/80">
                iPad
              </li>
              <li className="font-thin m-0 border-b-[0.5px] border-[#ffffff79] text-white/80">
                iPhone
              </li>
              <li className="font-thin m-0 border-b-[0.5px] border-[#ffffff79] text-white/80">
                Watch
              </li>
              <li className="font-thin m-0 border-b-[0.5px] border-[#ffffff79] text-white/80">
                AirPods
              </li>
              <li className="font-thin m-0 border-b-[0.5px] border-[#ffffff79] text-white/80">
                TV and Home
              </li>
              <li className="font-thin m-0 border-b-[0.5px] border-[#ffffff79] text-white/80">
                Only on Apple
              </li>
              <li className="font-thin m-0 border-b-[0.5px] border-[#ffffff79] text-white/80">
                Accesories
              </li>
              <li className="font-thin m-0">Support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FullScreen Menu */}
      <div className="hidden md:flex max-w-[1200px] h-full m-auto">
        <ul className="flex w-full justify-between items-center">
          <li>
            {" "}
            <img
              src={AppleLogo}
              className="w-[30px] h-auto cursor-pointer"
              alt="applelogo"
            />
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
            <AiOutlineSearch className="w-[25px] h-auto cursor-pointer" />
          </li>
          <li>
            <AiOutlineShopping className="w-[25px] h-auto cursor-pointer" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
