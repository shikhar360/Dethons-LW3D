import React from "react";
import Link from "next/link";
import styles from "../../styles/nav.module.css";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useState } from "react";

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
      <div className=" w-full   flex  justify-around py-1 ">
        <span className={` text-2xl text-[#8338ec] my-auto `}>Deethon</span>

        <div className=" flex justify-between w-1/4 my-auto  ">
          <div
            className={` ${
              isActive.home &&
              " underline decoration-violet-600	underline-offset-4	 "
            }`}
          >
            <Link href="/">
              <a onClick={handleHome}> Home</a>
            </Link>
          </div>

          {/* hack */}
          <div
            className={` ${
              isActive.hackathon &&
              " underline decoration-violet-600	underline-offset-4	 "
            }`}
          >
            <Link href="/Hackathons">
              <a onClick={handleHack}> Hackathons</a>
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
              <a onClick={handleApply}> Applications</a>
            </Link>
          </div>
        </div>

        <div className="   ">
          <ConnectWallet accentColor="#8338ec" colorMode="light" />
        </div>
      </div>

      <div className="w-1/4">
        {isActive.hackathon && (
          <div className=" text-stone-500 flex justify-around text-xs mt-2 w-full ">
            <div
              className={` ${" rounded-xl p-1 hover:bg-lime-200	underline-offset-4	 "}`}
            >
              <Link href="/Hackathons">
                <a onClick={handleHack}> Live Hackathons</a>
              </Link>
            </div>
            <div
              className={` ${" rounded-xl p-1 hover:bg-lime-200	underline-offset-4	 "}`}
            >
              <Link href="/components/MyHackathons">
                <a onClick={handleMyHack}> My Hackathons</a>
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
                <a onClick={handleApply}> Your Applications</a>
              </Link>
            </div>

            <div
              className={` ${" rounded-xl p-1 hover:bg-lime-200	underline-offset-4	 "}`}
            >
              <Link href="/components/MyApplicants">
                <a onClick={handleMyApply}> My Applicants</a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
