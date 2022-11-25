import React from "react";
import Link from "next/link";

import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useContract, useProvider, useSigner } from "wagmi";

import { contractAddress  , abi} from './../../constants/constant';

export default function Navbar() {
  const [isActive, setIsActive] = useState({
    application: false,
    hackathon: false,
    home: true,
    myHack: false,
    myAppli: false,
  });

  function handleHack() {
    setIsActive({
      application: false,
      hackathon: true,
      home: false,
      myHack: false,
      myAppli: false,
    });
  }

  function handleMyHack() {
    setIsActive({
      application: false,
      hackathon: true,
      home: false,
      myHack: true,
      myAppli: false,
    });
  }

  function handleApply() {
    setIsActive({
      application: true,
      hackathon: false,
      home: false,
      myHack: false,
      myAppli: false,
    });
  }
  function handleMyApply() {
    setIsActive({
      application: true,
      hackathon: false,
      home: false,
      myHack: false,
      myAppli: true,
    });
  }
  function handleHome() {
    setIsActive({
      application: false,
      hackathon: false,
      home: true,
      myHack: false,
      myAppli: false,
    });
  }

  return (
    <div className=" flex flex-col items-center justify-center bg-white/5 absolute top-0 w-full z-10">
      <div className=" w-full   flex justify-start  py-1.5 ">
        <span className={` sm:text-2xl text-[#8338ec] my-auto text-sm ml-1.5 `}>Deethon</span>

        <div className=" flex justify-between w-1/4 my-auto gap-2 mx-auto ">
          <div
            className={` ${
              isActive.home &&
              " underline decoration-violet-600	underline-offset-4	 "
            }`}
          >
            <Link href="/">
              <a onClick={handleHome} className="text-xs sm:text-base"> Home</a>
            </Link>
          </div>

          {/* hack */}
          <div
            className={` ${
              isActive.hackathon &&
              " underline decoration-violet-600	underline-offset-4	text-sm sm:text-base "
            }`}
          >
            <Link href="/Hackathons">
              <a onClick={handleHack} className="text-xs sm:text-base"> Hackathons</a>
            </Link>
          </div>

          {/* app */}
          <div
            className={` ${
              isActive.application &&
              " underline decoration-violet-600	underline-offset-4	 "
            }`}
          >
            <Link href="/Applications">
              <a onClick={handleApply} className="text-xs sm:text-base"> Applications</a>
            </Link>
          </div>
        </div>

        <div className="  text-xs sm:text-base ml-auto ">
          <ConnectButton />
        </div>
      </div>

      <div className="w-1/4">
        {isActive.hackathon && (
          <div className=" text-stone-500 flex justify-around text-xs mt-2 w-full mx-auto">
            <div
              className={` ${" rounded-xl p-1 hover:bg-lime-200	underline-offset-4	 "}`}
            >
              <Link href="/Hackathons">
                <a onClick={handleHack} className="text-xs sm:text-base" > Live Hackathons</a>
              </Link>
            </div>
            <div
              className={` ${" rounded-xl p-1 hover:bg-lime-200	underline-offset-4	 "}`}
            >
              <Link href="/components/MyHackathons">
                <a onClick={handleMyHack} className="text-xs sm:text-base"> My Hackathons</a>
              </Link>
            </div>
          </div>
        )}

        {isActive.application && (
          <div className=" text-stone-500 flex justify-around text-xs mt-2 w-full   ">
            <div
              className={` ${"rounded-xl p-1 hover:bg-lime-200	underline-offset-4	 "}`}
            >
              <Link href="/Applications">
                <a onClick={handleApply} className="text-xs sm:text-base"> Your Applications</a>
              </Link>
            </div>

            <div
              className={` ${" rounded-xl p-1 hover:bg-lime-200	underline-offset-4	 "}`}
            >
              <Link href="/components/MyApplicants">
                <a onClick={handleMyApply} className="text-xs sm:text-base"> My Applicants</a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
