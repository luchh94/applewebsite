import React from "react";
import UnicefPic from "../assets/appleImages/unicef.png";
import { BsArrowUpRight } from "react-icons/bs";

const Unicef = () => {
  return (
    <div className="w-full md:h-[100px] h-[100px] bg-[#ececec]">
      <div className="max-w-[1000px] h-full items-center justify-around md:justify-center m-auto flex flex-col md:flex-row">
        <img src={UnicefPic} className="w-[100px]" />
        <div className="flex md:h-full md:w-[500px] w-[250px] items-center justify-center text-center">
          <a className="hover:underline cursor-pointer">
            <p className="text-xs">
              Donate here, to support Families who are danger because of the War
              in the Ukraine
            </p>
          </a>
          <BsArrowUpRight className="w-[10px] h-full md:block hidden" />
        </div>
      </div>
    </div>
  );
};

export default Unicef;
