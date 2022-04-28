import React from "react";

import IphoneHero2 from "./../assets/appleImages/iphoneHero2x.jpg";
import IphoneHeroSmall from "../../src/assets/appleImages/heroIphoneSmall.jpg";

const Iphone13 = () => {
  return (
    <div className="max-[2560px] md:h-[600px] h-[450px] bg-[#fbfbfb] relative">
      <div className="max-w[1000px] h-[400px] flex flex-col md:pt-[100px] pt-[50px] items-center z-10">
        <p className="font-medium md:text-5xl text-3xl z-10 h-15">iPhone 13 Pro</p>
        <p className="z-20 h-15">Oh.So.Pro.</p>
        <div className="z-20 flex w-[200px] justify-between m-0 pt-4">
          <a className="z-20 text-blue-500 tracking-wide cursor-pointer hover:underline">
            {"Learn More  >"}
          </a>
          <a className="z-20 text-blue-500 tracking-wide cursor-pointer hover:underline">{`Buy   >`}</a>
        </div>
      </div>
      <div style={{backgroundImage: `url(${IphoneHero2})`}} className="w-full overflow-hidden h-full md:bg-contain bg-cover bg-no-repeat bg-fix absolute bottom-0 left-0 right-0 bg-bottom"></div>
    </div>
  );
};

export default Iphone13;
