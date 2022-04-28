import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Outro = () => {
  const [openOne, setOpenOne] = useState(true);
  const [openTwo, setOpenTwo] = useState(true);
  const [openThree, setOpenThree] = useState(true);
  const [openFour, setOpenFour] = useState(true);
  const [openFive, setOpenFive] = useState(true);
  const [openSix, setOpenSix] = useState(true);
  const [openSeven, setOpenSeven] = useState(true);
  const [openEight, setOpenEight] = useState(true);
  const [openNine, setOpenNine] = useState(true);
  const [openTen, setOpenTen] = useState(true);
  return (
    <div className="max-w-[2560px] h-full bg-[#fbfbfb]">
      <div className="max-w-[1000px] h-full items-center justify-around md:justify-center m-auto text-left flex flex-col md:flex-row">
        <div className="flex flex-col md:h-full w-[90%] items-center justify-center text-left py-10">
          <ul className="flex w-full flex-col">
            <li className="w-full border-b-2">
              <div
                onClick={() => {
                  setOpenOne(!openOne);
                }}
                className="flex justify-between"
              >
                <p className="text-[12px] font-extralight">Shop And Learn</p>
                <AiOutlinePlus className="m-0" />
              </div>
              <div className={openOne ? `hidden` : `flex w-[95%]`}>
                <ul className="w-[80%]">
                  <li className="text-[12px] font-extralight">Store</li>
                  <li className="text-[12px] font-extralight">Mac</li>
                  <li className="text-[12px] font-extralight">iPad</li>
                  <li className="text-[12px] font-extralight">iPhone</li>
                  <li className="text-[12px] font-extralight">Watch</li>
                  <li className="text-[12px] font-extralight">AirPods</li>
                  <li className="text-[12px] font-extralight">Tv Home</li>
                  <li className="text-[12px] font-extralight">iPod touch</li>
                  <li className="text-[12px] font-extralight">AirTag</li>
                  <li className="text-[12px] font-extralight">Accessories</li>
                  <li className="text-[12px] font-extralight">Gift Card</li>
                </ul>
              </div>
            </li>
            <li className="w-full border-b-2">
              <div
                onClick={() => {
                  setOpenTwo(!openTwo);
                }}
                className="flex justify-between"
              >
                <p className="text-[12px] font-extralight">Services</p>
                <AiOutlinePlus className="m-0" />
              </div>
              <div className={openTwo ? `hidden` : `block`}>
                <ul>
                  <li className="text-[12px] font-extralight">Apple Music</li>
                  <li className="text-[12px] font-extralight">Apple TV+</li>
                  <li className="text-[12px] font-extralight">Apple Fitness+</li>
                  <li className="text-[12px] font-extralight">Apple News+</li>
                  <li className="text-[12px] font-extralight">Apple Arcade</li>
                  <li className="text-[12px] font-extralight">iCloud</li>
                  <li className="text-[12px] font-extralight">Apple One</li>
                  <li className="text-[12px] font-extralight">Apple Card</li>
                  <li className="text-[12px] font-extralight">Apple Books</li>
                  <li className="text-[12px] font-extralight">Apple Podcasts</li>
                  <li className="text-[12px] font-extralight">App Store</li>
                </ul>
              </div>
            </li>
            <li className="w-full border-b-2">
              <div
                onClick={() => {
                  setOpenThree(!openThree);
                }}
                className="flex justify-between"
              >
                <p className="text-[12px] font-extralight">Account</p>
                <AiOutlinePlus className="m-0" />
              </div>
              <div className={openThree ? `hidden` : `block`}>
                <ul>
                  <li className="text-[12px] font-extralight">Manage Your Apple ID</li>
                  <li className="text-[12px] font-extralight">Apple Store Account</li>
                  <li className="text-[12px] font-extralight">iCloud.com</li>
                </ul>
              </div>
            </li>
            <li className="w-full border-b-2">
              <div
                onClick={() => {
                  setOpenFour(!openFour);
                }}
                className="flex justify-between"
              >
                <p className="text-[12px] font-extralight">Apple Store</p>
                <AiOutlinePlus className="m-0" />
              </div>
              <div className={openFour ? `hidden` : `block`}>
                <ul>
                  <li className="text-[12px] font-extralight">Find a Store</li>
                  <li className="text-[12px] font-extralight">Genius Bar</li>
                  <li className="text-[12px] font-extralight">Today at Apple</li>
                  <li className="text-[12px] font-extralight">Apple Camp</li>
                  <li className="text-[12px] font-extralight">Apple Store App</li>
                  <li className="text-[12px] font-extralight">Refurbishes and Clearance</li>
                  <li className="text-[12px] font-extralight">Financing</li>
                  <li className="text-[12px] font-extralight">Apple Trade In</li>
                  <li className="text-[12px] font-extralight">Order Status</li>
                  <li className="text-[12px] font-extralight">Shopping Help</li>
                </ul>
              </div>
            </li>
            <li className="w-full border-b-2">
              <div
                onClick={() => {
                  setOpenFive(!openFive);
                }}
                className="flex justify-between"
              >
                <p className="text-[12px] font-extralight">For Business</p>
                <AiOutlinePlus className="m-0" />
              </div>
              <div className={openFive ? `hidden` : `block`}>
                <ul>
                  <li className="text-[12px] font-extralight">Apple and Business</li>
                  <li className="text-[12px] font-extralight">Shop for Business</li>
                </ul>
              </div>
            </li>
            <li className="w-full border-b-2">
              <div
                onClick={() => {
                  setOpenSix(!openSix);
                }}
                className="flex justify-between"
              >
                <p className="text-[12px] font-extralight">For Education</p>
                <AiOutlinePlus className="m-0" />
              </div>
              <div className={openSix ? `hidden` : `block`}>
                <ul>
                  <li className="text-[12px] font-extralight">Apple and Education</li>
                  <li className="text-[12px] font-extralight">Shop for K-12</li>
                  <li className="text-[12px] font-extralight">Shop for College</li>
                </ul>
              </div>
            </li>
            <li className="w-full border-b-2">
              <div
                onClick={() => {
                  setOpenSeven(!openSeven);
                }}
                className="flex justify-between"
              >
                <p className="text-[12px] font-extralight">For Healthcare</p>
                <AiOutlinePlus className="m-0" />
              </div>
              <div className={openSeven ? `hidden` : `block`}>
                <ul>
                  <li className="text-[12px] font-extralight">Apple in Healthcare</li>
                  <li className="text-[12px] font-extralight">Health on Apple Watch</li>
                  <li className="text-[12px] font-extralight">Health Records on iPhone</li>
                </ul>
              </div>
            </li>
            <li className="w-full border-b-2">
              <div
                onClick={() => {
                  setOpenEight(!openEight);
                }}
                className="flex justify-between"
              >
                <p className="text-[12px] font-extralight">For Goverment</p>
                <AiOutlinePlus className="m-0" />
              </div>
              <div className={openEight ? `hidden` : `block`}>
                <ul>
                  <li className="text-[12px] font-extralight">Shop for Government</li>
                  <li className="text-[12px] font-extralight">Shop for Veterans and Military</li>
                </ul>
              </div>
            </li>
            <li className="w-full border-b-2">
              <div
                onClick={() => {
                  setOpenNine(!openNine);
                }}
                className="flex justify-between"
              >
                <p className="text-[12px] font-extralight">Apple Values</p>
                <AiOutlinePlus className="m-0" />
              </div>
              <div className={openNine ? `hidden` : `block`}>
                <ul>
                  <li className="text-[12px] font-extralight">Accessibility</li>
                  <li className="text-[12px] font-extralight">Education</li>
                  <li className="text-[12px] font-extralight">Environment</li>
                  <li className="text-[12px] font-extralight">Inclusion and Diversity</li>
                  <li className="text-[12px] font-extralight">Privacy</li>
                  <li className="text-[12px] font-extralight">Racial Equity and Justice</li>
                  <li className="text-[12px] font-extralight">Supplier Responsibility</li>
                </ul>
              </div>
            </li>
            <li className="w-full border-b-2">
              <div
                onClick={() => {
                  setOpenTen(!openTen);
                }}
                className="flex justify-between"
              >
                <p className="text-[12px] font-extralight">Apple Values</p>
                <AiOutlinePlus className="m-0" />
              </div>
              <div className={openTen ? `hidden` : `block`}>
                <ul>
                  <li className="text-[12px] font-extralight">Newsroom</li>
                  <li className="text-[12px] font-extralight">Apple Leadership</li>
                  <li className="text-[12px] font-extralight">Career Oppertunities</li>
                  <li className="text-[12px] font-extralight">Investor</li>
                  <li className="text-[12px] font-extralight">Investors</li>
                  <li className="text-[12px] font-extralight">Ethics and Compliance</li>
                  <li className="text-[12px] font-extralight">Contact Apple</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Outro;
