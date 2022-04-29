import React from "react";
import UnicefPic from "../assets/appleImages/unicef.png";
import { BsArrowUpRight } from "react-icons/bs";

const Unicef = () => {
  return (
    <div className="max-w-[2560px] md:h-[80px] h-[80px] bg-[#ececec]">
      <div className="max-w-[1000px] h-full items-center justify-around md:justify-center m-auto flex flex-col md:flex-row">
        <img src={UnicefPic} className="w-[100px] m-0" alt="Unicef" />
        <div className="flex md:h-full md:w-[500px] w-[250px] items-center justify-center text-center m-0">
          <a href="/" className="hover:underline cursor-pointer m-0">
            <p className="text-xs text-[#2590c1]">
              Donate to support families affected by the war in Ukraine
            </p>
          </a>
          <BsArrowUpRight className="w-[8px] h-full md:block hidden m-0" />
        </div>
      </div>
    </div>
  );
};

export default Unicef;
