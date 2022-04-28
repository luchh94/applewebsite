import React from "react";
import IphoneSe from "./../assets/appleImages/IphoneSE.png";

const IphoneSE = () => {
  return (
    <div
      
      className="max-w-[2560px] md:h-[600px] h-[450px] bg-[#fbfbfb] bg-contain relative bg-no-repeat bg-fix bg-bottom"
    >
      <div className="max-w[1000px] h-[400px] flex flex-col md:pt-[100px] pt-[50px] items-center z-10">
        <p className="font-medium md:text-5xl text-3xl z-10 h-15">
          iPhone 13 Pro
        </p>
        <p className="z-20 h-15">Oh.So.Pro.</p>
        <div className="z-20 flex w-[200px] justify-between pt-4 m-0">
          <a className="z-20 text-blue-500 tracking-wide cursor-pointer hover:underline">
            {"Learn More  >"}
          </a>
          <a className="z-20 text-blue-500 tracking-wide cursor-pointer hover:underline">{`Buy   >`}</a>
        </div>
        <figure style={{ backgroundImage: `url(${IphoneSe})` }} className="w-full h-full absolute bottom-0 bg-cover bg-center" ></figure>
      </div>
    </div>
  );
};

export default IphoneSE;
