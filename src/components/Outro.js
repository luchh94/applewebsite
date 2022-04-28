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
        <nav className="hidden md:flex w-[90%] h-[500px] items-center justify-center text-left py-10">
          <div className="w-1/5 m-0 h-full">
            <ul className="flex flex-col leading-5 py-2">
              <li className="text-[12px] font-light m-0">Shop and Learn</li>
              <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                Store
              </li>
              <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                Mac
              </li>
              <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                iPad
              </li>
              <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                iPhone
              </li>
              <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                Watch
              </li>
              <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                AirPods
              </li>
              <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                Tv Home
              </li>
              <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                iPod touch
              </li>
              <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                AirTag
              </li>
              <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                Accessories
              </li>
              <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                Gift Card
              </li>
            </ul>
          </div>
          <div className="w-1/5 flex flex-col m-0 h-full">
            <div className="m-0">
              <ul className="leading-5">
                <li className="text-[12px] font-light m-0 cursor-pointer hover:underline">
                  Services
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Apple Music
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Apple TV+
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Apple Fitness+
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Apple News+
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Apple Arcade
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  iCloud
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Apple One
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Apple Card
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Apple Books
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Apple Podcasts
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  App Store
                </li>
              </ul>
            </div>
            <div className="m-0">
              <ul className="leading-5 py-2">
                <li className="text-[12px] font-light m-0 cursor-pointer hover:underline">
                  Account
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Manage Your Apple ID
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Apple Store Account
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  iCloud.com
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/5 m-0 h-full">
            <ul className="leading-5">
              <li className="text-[12px] font-light m-0 cursor-pointer hover:underline">
                Apple Store
              </li>
              <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                Find a Store
              </li>
              <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                Genius Bar
              </li>
              <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                Today at Apple
              </li>
              <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                Apple Camp
              </li>
              <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                Apple Store App
              </li>
              <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                Refurbishes and Clearance
              </li>
              <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                Financing
              </li>
              <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                Apple Trade In
              </li>
              <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                Order Status
              </li>
              <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                Shopping Help
              </li>
            </ul>
          </div>
          <div className="w-1/5 m-0 h-full">
            <div className="">
              <ul className="leading-5">
                <li className="text-[12px] font-light m-0 cursor-pointer hover:underline">
                  For Business
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Apple and Business
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Shop for Business
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="leading-5 py-2">
                <li className="text-[12px] font-light m-0 cursor-pointer hover:underline">
                  For Education
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Apple and Education
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Shop for K-12
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Shop for College
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="leading-5">
                <li className="text-[12px] font-light m-0 cursor-pointer hover:underline">
                  For Healthcare
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Apple in Healthcare
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Health on Apple Watch
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Health Records on iPhone
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="leading-5 py-2">
                <li className="text-[12px] font-light m-0 cursor-pointer hover:underline">
                  For Government
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Shop for Government
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Shop for Veterans and Military
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/5 m-0 h-full">
            <div className="">
              <ul className="leading-5 py-2">
                <li className="text-[12px] font-light m-0 cursor-pointer hover:underline">
                  Apple Values
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Accessibility
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Education
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Environment
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Inclusion and Diversity
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Privacy
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Racial Equity and Justice
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Supplier Responsibility
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="leading-5">
                <li className="text-[12px] font-light m-0 cursor-pointer hover:underline">
                  About Apple
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Newsroom
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Apple Leadership
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Career Oppertunities
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Investor
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Investors
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Ethics and Compliance
                </li>
                <li className="text-[12px] font-extralight m-0 cursor-pointer hover:underline">
                  Contact Apple
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/*Mobile Version*/}

        <div className="md:hidden flex flex-col md:h-full w-[90%] items-center justify-center text-left py-10">
          <ul className="flex w-full flex-col leading-8">
            <li className="w-full border-b-2">
              <div
                onClick={() => {
                  setOpenOne(!openOne);
                }}
                className="flex justify-between cursor-pointer items-center"
              >
                <p className="text-[12px] font-extralight align-center">
                  Shop And Learn
                </p>
                <AiOutlinePlus className="m-0 w-[10px]" />
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
                className="flex justify-between cursor-pointer items-center"
              >
                <p className="text-[12px] font-extralight">Services</p>
                <AiOutlinePlus className="m-0 w-[10px]" />
              </div>
              <div className={openTwo ? `hidden` : `flex w-[95%]`}>
                <ul>
                  <li className="text-[12px] font-extralight">Apple Music</li>
                  <li className="text-[12px] font-extralight">Apple TV+</li>
                  <li className="text-[12px] font-extralight">
                    Apple Fitness+
                  </li>
                  <li className="text-[12px] font-extralight">Apple News+</li>
                  <li className="text-[12px] font-extralight">Apple Arcade</li>
                  <li className="text-[12px] font-extralight">iCloud</li>
                  <li className="text-[12px] font-extralight">Apple One</li>
                  <li className="text-[12px] font-extralight">Apple Card</li>
                  <li className="text-[12px] font-extralight">Apple Books</li>
                  <li className="text-[12px] font-extralight">
                    Apple Podcasts
                  </li>
                  <li className="text-[12px] font-extralight">App Store</li>
                </ul>
              </div>
            </li>
            <li className="w-full border-b-2">
              <div
                onClick={() => {
                  setOpenThree(!openThree);
                }}
                className="flex justify-between cursor-pointer items-center"
              >
                <p className="text-[12px] font-extralight">Account</p>
                <AiOutlinePlus className="m-0 w-[10px]" />
              </div>
              <div className={openThree ? `hidden` : `flex w-[95%]`}>
                <ul>
                  <li className="text-[12px] font-extralight">
                    Manage Your Apple ID
                  </li>
                  <li className="text-[12px] font-extralight">
                    Apple Store Account
                  </li>
                  <li className="text-[12px] font-extralight">iCloud.com</li>
                </ul>
              </div>
            </li>
            <li className="w-full border-b-2">
              <div
                onClick={() => {
                  setOpenFour(!openFour);
                }}
                className="flex justify-between cursor-pointer items-center"
              >
                <p className="text-[12px] font-extralight">Apple Store</p>
                <AiOutlinePlus className="m-0 w-[10px]" />
              </div>
              <div className={openFour ? `hidden` : `flex w-[95%]`}>
                <ul>
                  <li className="text-[12px] font-extralight">Find a Store</li>
                  <li className="text-[12px] font-extralight">Genius Bar</li>
                  <li className="text-[12px] font-extralight">
                    Today at Apple
                  </li>
                  <li className="text-[12px] font-extralight">Apple Camp</li>
                  <li className="text-[12px] font-extralight">
                    Apple Store App
                  </li>
                  <li className="text-[12px] font-extralight">
                    Refurbishes and Clearance
                  </li>
                  <li className="text-[12px] font-extralight">Financing</li>
                  <li className="text-[12px] font-extralight">
                    Apple Trade In
                  </li>
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
                className="flex justify-between cursor-pointer items-center"
              >
                <p className="text-[12px] font-extralight">For Business</p>
                <AiOutlinePlus className="m-0 w-[10px]" />
              </div>
              <div className={openFive ? `hidden` : `flex w-[95%]`}>
                <ul>
                  <li className="text-[12px] font-extralight">
                    Apple and Business
                  </li>
                  <li className="text-[12px] font-extralight">
                    Shop for Business
                  </li>
                </ul>
              </div>
            </li>
            <li className="w-full border-b-2">
              <div
                onClick={() => {
                  setOpenSix(!openSix);
                }}
                className="flex justify-between cursor-pointer items-center"
              >
                <p className="text-[12px] font-extralight">For Education</p>
                <AiOutlinePlus className="m-0 w-[10px]" />
              </div>
              <div className={openSix ? `hidden` : `flex w-[95%]`}>
                <ul>
                  <li className="text-[12px] font-extralight">
                    Apple and Education
                  </li>
                  <li className="text-[12px] font-extralight">Shop for K-12</li>
                  <li className="text-[12px] font-extralight">
                    Shop for College
                  </li>
                </ul>
              </div>
            </li>
            <li className="w-full border-b-2">
              <div
                onClick={() => {
                  setOpenSeven(!openSeven);
                }}
                className="flex justify-between cursor-pointer items-center"
              >
                <p className="text-[12px] font-extralight">For Healthcare</p>
                <AiOutlinePlus className="m-0 w-[10px]" />
              </div>
              <div className={openSeven ? `hidden` : `flex w-[95%]`}>
                <ul>
                  <li className="text-[12px] font-extralight">
                    Apple in Healthcare
                  </li>
                  <li className="text-[12px] font-extralight">
                    Health on Apple Watch
                  </li>
                  <li className="text-[12px] font-extralight">
                    Health Records on iPhone
                  </li>
                </ul>
              </div>
            </li>
            <li className="w-full border-b-2">
              <div
                onClick={() => {
                  setOpenEight(!openEight);
                }}
                className="flex justify-between cursor-pointer items-center"
              >
                <p className="text-[12px] font-extralight">For Goverment</p>
                <AiOutlinePlus className="m-0 w-[10px]" />
              </div>
              <div className={openEight ? `hidden` : `flex w-[95%]`}>
                <ul>
                  <li className="text-[12px] font-extralight">
                    Shop for Government
                  </li>
                  <li className="text-[12px] font-extralight">
                    Shop for Veterans and Military
                  </li>
                </ul>
              </div>
            </li>
            <li className="w-full border-b-2">
              <div
                onClick={() => {
                  setOpenNine(!openNine);
                }}
                className="flex justify-between cursor-pointer items-center"
              >
                <p className="text-[12px] font-extralight">Apple Values</p>
                <AiOutlinePlus className="m-0 w-[10px]" />
              </div>
              <div className={openNine ? `hidden` : `flex w-[95%]`}>
                <ul>
                  <li className="text-[12px] font-extralight">Accessibility</li>
                  <li className="text-[12px] font-extralight">Education</li>
                  <li className="text-[12px] font-extralight">Environment</li>
                  <li className="text-[12px] font-extralight">
                    Inclusion and Diversity
                  </li>
                  <li className="text-[12px] font-extralight">Privacy</li>
                  <li className="text-[12px] font-extralight">
                    Racial Equity and Justice
                  </li>
                  <li className="text-[12px] font-extralight">
                    Supplier Responsibility
                  </li>
                </ul>
              </div>
            </li>
            <li className="w-full border-b-2">
              <div
                onClick={() => {
                  setOpenTen(!openTen);
                }}
                className="flex justify-between cursor-pointer items-center"
              >
                <p className="text-[12px] font-extralight">Apple Values</p>
                <AiOutlinePlus className="m-0 w-[10px]" />
              </div>
              <div className={openTen ? `hidden` : `flex w-[95%]`}>
                <ul>
                  <li className="text-[12px] font-extralight">Newsroom</li>
                  <li className="text-[12px] font-extralight">
                    Apple Leadership
                  </li>
                  <li className="text-[12px] font-extralight">
                    Career Oppertunities
                  </li>
                  <li className="text-[12px] font-extralight">Investor</li>
                  <li className="text-[12px] font-extralight">Investors</li>
                  <li className="text-[12px] font-extralight">
                    Ethics and Compliance
                  </li>
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
