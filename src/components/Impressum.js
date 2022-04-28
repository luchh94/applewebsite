import React from "react";

const Impressum = () => {
  return (
    <div className="max-w-[2560px] h-full bg-[#fbfbfb]">
      <div className="max-w-[1000px] h-full items-center justify-around md:justify-center m-auto text-left flex flex-col md:flex-row">
        <div className="flex flex-col md:h-full w-full items-center justify-center text-left py-10">
          <p className="text-[12px] font-extralight w-full py-1">
            More ways to shop:{" "}
            <span>
              <a>Find and Apple Store</a>
            </span>{" "}
            or{" "}
            <span>
              <a>other retailer</a>
            </span>{" "}
            near you. Or call 1-800-MY-APPLE.
          </p>
          <p className="text-[12px] font-extralight w-full py-1">
            United States
          </p>
          <p className="text-[12px] font-extralight w-full py-1">
            Copyright 2022 Apple Inc. All rights reserved.
          </p>
          <div className="w-full">
            <ul className="flex w-2/3 margin-0 justify-between text-center">
              <li className="text-[12px] font-extralight w-full py-1 border-r-2">
                Privacy Policy
              </li>
              <li className="text-[12px] font-extralight w-full py-1 border-r-2">
                {" "}
                Terms of Use
              </li>
              <li className="text-[12px] font-extralight w-full py-1 border-r-2">
                Sales and Refunds
              </li>
              <li className="text-[12px] font-extralight w-full py-1 border-r-2">Legal</li>
              <li className="text-[12px] font-extralight w-full py-1">
                Site Map
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
