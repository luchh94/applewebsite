import React from "react";
import ipadsmall from "../assets/appleImages/ipad/ipadsmall.jpg";
import ipadlarge from "../assets/appleImages/ipad/ipadlarge.jpg";
import ipadText from "./../assets/appleImages/logoAir.png";

const Ipad = () => {
  return (
    <div className="max-w-[2560px] h-[600px] bg-[#fbfbfb] bg-contain relative bg-no-repeat bg-fix bg-bottom">
      <div className="w-full h-[600px] flex flex-col lg:flex-row lg:pl-50 items-center z-10 mx-0">
        <div className="flex flex-col items-center lg:items-end w-1/3 h-1/2  lg:h-full justify-center m-0">
          <p
            style={{ backgroundImage: `url(${ipadText})` }}
            className="md:w-[180px] md:h-[50px] w-[180px] h-[50px]  z-20 bg-contain bg-no-repeat mg-center"
          ></p>
          <p className="z-20 text-white h-15 text-center">Light. Bright. Full of might.</p>
          <div className="z-20 flex w-[200px] justify-between pt-4 m-0">
            <a href="/" className="z-20 text-blue-500 tracking-wide cursor-pointer hover:underline">
              {"Learn More  >"}
            </a>
            <a href="/" className="z-20 text-blue-500 tracking-wide cursor-pointer hover:underline">{`Buy   >`}</a>
          </div>
        </div>

        <figure
          style={{ backgroundImage: `url(${ipadsmall})` }}
          className="w-full h-full lg:hidden absolute bottom-0 bg-cover bg-center bg-black"
        ></figure>
        <figure
          style={{ backgroundImage: `url(${ipadlarge})` }}
          className="hidden lg:block w-full h-full absolute bottom-0 bg-cover bg-center bg-black"
        ></figure>
      </div>
    </div>
  );
};

export default Ipad;
