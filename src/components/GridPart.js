import React from "react";

import macLarge from "./../assets/appleImages/maclarge.jpg";
import wwdc from "../assets/appleImages/wwdcpic.jpg";
import appleWatch from "../assets/appleImages/aplewatch2.jpg";
import bts from "../assets/appleImages/btsPic.jpg";
import mothersday from "../assets/appleImages/mothersday.jpg";
import cybogpic from ".././assets/appleImages/cybogPic.jpg";
import appleWatchText from "../assets/appleImages/applewatch.png";
import fitnesslogo from "../assets/appleImages/fitnesslogo.png";
import callmemagic from "./../assets/appleImages/theycallmemagic.png";
import appletvlogo from "./../assets/appleImages/appletvlogo.png";
import { AiFillPlayCircle } from "react-icons/ai";

const GridPart = () => {
  return (
    <div className="h-full max-w-[2560px] grid grid-cols-1 grid-rows-6 gap-1 md:grid-cols-2 md:grid-rows-3">
      <div className="w-full h-[500px] relative flex justify-end  flex-col">
        <div className="w-full h-[150px] m-0 flex flex-col  items-center text-center pb-10">
          <p className="z-15 font-medium md:text-5xl text-3xl z-10 h-15 text-white">
            WWDC22
          </p>
          <p className="w-[350px] text-center z-10 h-15 text-white">
            The WorldWide Developers Conference is coming. Join us online 6-10
            June.
          </p>
          <div className="z-10  flex w-[200px] justify-between m-auto">
            <a href="/"className=" text-blue-500 tracking-wide cursor-pointer hover:underline">
              {"Learn More  >"}
            </a>
          </div>
        </div>
        <div className="w-full h-full absolute">
          <figure
            style={{ backgroundImage: `url(${wwdc})` }}
            className="w-full h-full absolute bg-cover bg-center bg-no-repeat"
          ></figure>
        </div>
      </div>
      <div className="w-full h-[500px] flex justify-start flex-col relative">
        <div className="w-full h-[150px] m-0 flex flex-col  text-center pt-10">
          <p className="z-15 font-medium md:text-5xl text-3xl z-10 h-15">
            Studio Display
          </p>
          <p className="w-full z-10 h-15">A sight to be bold.</p>
          <div className="z-10  flex w-[200px] justify-between m-auto">
            <a href="/" className=" text-blue-500 tracking-wide cursor-pointer hover:underline">
              {"Learn More  >"}
            </a>
            <a href="/" className="z-20 text-blue-500 tracking-wide cursor-pointer hover:underline">{`Buy   >`}</a>
          </div>
        </div>
        <div className="w-full h-full absolute">
          <figure
            style={{ backgroundImage: `url(${macLarge})` }}
            className="w-full h-full absolute bg-cover bg-center bg-no-repeat"
          ></figure>
        </div>
      </div>

      <div className="w-full h-[500px] relative flex justify-start  flex-col">
        <div className="w-full h-[150px] m-0 flex flex-col   text-center pt-10">
          <img className="z-10 h-[75px]" src={appleWatchText} alt="appleWatch" />
          <p className="w-full z-10 h-15">It's our largest display yet.</p>
          <div className="z-10  flex w-[200px] justify-between m-auto">
            <a href="/" className=" text-blue-500 tracking-wide cursor-pointer hover:underline">
              {"Learn More  >"}
            </a>
            <a href="/" className="z-20 text-blue-500 tracking-wide cursor-pointer hover:underline">{`Buy   >`}</a>
          </div>
        </div>
        <div className="w-full h-full absolute">
          <figure
            style={{ backgroundImage: `url(${appleWatch})` }}
            className="w-full h-full absolute bg-cover bg-center bg-no-repeat"
          ></figure>
        </div>
      </div>
      <div className="w-full h-[500px] relative flex justify-start  flex-col">
        <div className="w-full h-[150px] m-0 flex flex-col items-center text-center pt-10">
          <img className="z-10 h-[75px]" src={fitnesslogo} alt="Text Fitness" />
          <p className="text-white w-[350px] z-10 h-15">
            New Artist Spotlight workouts with music by BTS
          </p>
          <div className="z-10  flex w-[250px] justify-between m-auto">
            <a href="/" className=" text-[#5cc02a] tracking-wide cursor-pointer hover:underline">
              {"See Waht's New  >"}
            </a>
            <a href="/" className="z-20 text-[#5cc02a] tracking-wide cursor-pointer hover:underline">{`Try it free  >`}</a>
          </div>
        </div>
        <div className="w-full h-full absolute">
          <figure
            style={{ backgroundImage: `url(${bts})` }}
            className="w-full h-full absolute bg-cover bg-center bg-no-repeat"
          ></figure>
        </div>
      </div>
      <div className="w-full h-[500px] relative flex justify-start  flex-col">
        <div className="w-full h-[150px] m-0 flex flex-col  items-center text-center pt-10">
          <p className="z-15 font-medium text-1xl z-10 h-15">Mother's Day</p>
          <p className="z-10 h-15 md:text-4xl w-[400px]">
            Discover gifts that will make your Mom's year.
          </p>
          <div className="z-10  flex w-[200px] justify-between m-auto">
            <a href="/" className="z-20 text-blue-500 tracking-wide cursor-pointer hover:underline">{`Shop  >`}</a>
          </div>
        </div>
        <div className="w-full h-full absolute">
          <figure
            style={{ backgroundImage: `url(${mothersday})` }}
            className="w-full h-full absolute bg-cover bg-center bg-no-repeat"
          ></figure>
        </div>
      </div>
      <div className="w-full h-[500px] relative flex justify-around  flex-col">
        <div className="z-20 w-full h-1/2 justify-around pt-10">
          <img src={appletvlogo} className="w-[50px] h-auto z-20" alt="Apple TV Logo" />
        </div>
        <div className="w-full h-1/2 m-0 flex flex-col justify-end pb-10 text-center">
          <img className="z-10 h-[75px] my-0" src={callmemagic} alt="Call me Magic Text" />
          <div className="z-10  flex w-[200px] my-0 justify-between m-auto">
            <a href="/" className="z-20 w-[120px] text-blue-500 tracking-wide cursor-pointer items-center justify-between hover:underline flex">
              {`Stream Now`} <AiFillPlayCircle className="m-0" />
            </a>
          </div>
        </div>

        <div className="w-full h-full absolute">
          <figure
            style={{ backgroundImage: `url(${cybogpic})` }}
            className="w-full h-full absolute bg-cover bg-center bg-no-repeat"
          ></figure>
        </div>
      </div>
    </div>
  );
};

export default GridPart;
