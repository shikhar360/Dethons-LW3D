import Navbar from "./components/Navbar";
import Head from "next/head";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useContract, useProvider, useSigner } from "wagmi";


import { contractAddress } from './../constants/constant';

export default function Home() {
  function handleContact(e) {
    window.open(e);
  }
  return (
    <div className="">
      <div className="w-full bg-[#edf6f9]   min-h-full sm:pb-32 pb-12  sm:pt-36 pt-24 flex items-center justify-center flex-col ">
        <div className=" sm:w-8/12 w-11/12 text-center leading-10">
            <Image
              src="/images/sun.gif"
              width={30}
              height={30}
              alt="image"
              className="rounded-xl "
            />
          <span className=" sm:text-5xl text-3xl  text-[#0c0518] tracking-wider  ">
            Where{" "}
          </span>
          <span className=" bg-[#ff3f00] rounded-3xl sm:p-1 p-0.5 rotate-12 sm:my-1 sm:text-5xl text-3xl   border-dashed border-4 border-[#10002b] ">
              Hackathons
            </span>{" "}
           <span className=" sm:text-5xl text-3xl  text-[#0c0518] tracking-wider  ">
            meets{" "}

           </span>
           <span className="sm:mt-8 w-full mx-auto content-center sm:text-5xl text-3xl  tracking-wider text-[#0c0518] ">
          Decentralization
          <Image
            src="/images/btc.gif"
            width={30}
            height={30}
            alt="image"
            className="rounded-xl  "
          />
          <Image
            src="/images/dia.gif"
            width={30}
            height={30}
            alt="image"
            className="rounded-xl"
          />
          <Image
            src="/images/hack.png"
            width={30}
            height={30}
            alt="image"
            className="rounded-xl"
          />
        </span>
        </div>
        
        <span className=" sm:w-8/12 w-11/12 text-xl font-mono text-center mt-6 ">
          <b>Deethon</b> is a Decentralized Hackathon-Listing-platform , where
          you can participate and even organize your own hackathons anonymously
          in comparatively lesser cost with lots of features
        </span>
        <div className=" mt-8">
          <ConnectButton/>
        </div>

        <div className="w-full sm:pt-20 pt-8 flex flex-col items-center justify-center">
          <span className="sm:mt-8 mt-6 sm:mb-6 mb-4 sm:text-3xl text-2xl tracking-wider text-[#0c0518] ">
            Powered By{" "}
          </span>
          <div className=" flex items-center sm:flex-row flex-col justify-center sm:px-32 px-16 sm:gap-10 gap-4">
            <Image
              src="/images/third.png"
              width={320}
              height={120}
              alt="image"
              className="rounded-xl "
            />
            <Image
              src="/images/lw3d.png"
              width={350}
              height={110}
              alt="image"
              className="rounded-xl "
            />
            <Image
              src="/images/poly.png"
              width={350}
              height={120}
              alt="image"
              className="rounded-xl "
            />
            {/* <Image
              src="/images/arca.png"
              width={320}
              height={120}
              alt="image"
              className="rounded-xl "
            />
            <Image
              src="/images/speron.jpeg"
              width={120}
              height={120}
              alt="image"
              className="rounded-xl "
            /> */}
          </div>
        </div>
      </div>
      
      <div className="w-full h-full sm:py-36 py-12 sm:px-32 px-8  grid sm:grid-cols-3 grid-cols-2  sm:gap-10 gap-4 justify-center bg-[#8338ec]">
        <div className=" sm:w-4/5 w-full py-6 flex flex-col items-center justify-center rounded-2xl bg-[#edf6f9]">
          <Image
            src="/images/money.gif"
            width={48}
            height={48}
            alt="image"
            className="rounded-xl "
          />
          <div className=" w-full sm:w-4/5 py-3 px-2 text-lg font-mono text-center mt-6 ">
            {" "}
            Organize your Hackathon and Earn money{" "}
          </div>
        </div>
        <div className=" w-full sm:w-4/5 py-6 flex flex-col items-center justify-center rounded-2xl bg-[#edf6f9]">
          <Image
            src="/images/boss.gif"
            width={48}
            height={48}
            alt="image"
            className="rounded-xl "
          />
          <div className=" w-full py-3 px-2 text-lg font-mono text-center mt-6 ">
            {" "}
            Be a BOSS ! Accept your applicants request{" "}
          </div>
        </div>
        <div className=" w-full sm:w-4/5 py-6 flex flex-col items-center justify-center rounded-2xl bg-[#edf6f9]">
          <Image
            src="/images/parti.gif"
            width={48}
            height={48}
            alt="image"
            className="rounded-xl "
          />
          <div className=" w-full py-3 px-2 text-lg font-mono text-center mt-6 ">
            {" "}
            Participate in high paying Hackathons{" "}
          </div>
        </div>
        <div className=" w-full sm:w-4/5 py-6 flex flex-col items-center justify-center rounded-2xl bg-[#edf6f9]">
          <Image
            src="/images/typo2.gif"
            width={48}
            height={48}
            alt="image"
            className="rounded-xl "
          />
          <div className=" w-full py-3 px-2 text-lg font-mono text-center mt-6 ">
            {" "}
            Did a Typo? Edit your details on the go{" "}
          </div>
        </div>
        <div className=" w-full sm:w-4/5 py-6 flex flex-col items-center justify-center rounded-2xl bg-[#edf6f9]">
          <Image
            src="/images/inc.gif"
            width={48}
            height={48}
            alt="image"
            className="rounded-xl "
          />
          <div className=" w-full py-3 px-2 text-lg font-mono text-center mt-6 ">
            {" "}
            Extend your hackathons dates as you want{" "}
          </div>
        </div>
        <div className=" w-full sm:w-4/5 py-6  flex flex-col items-center justify-center rounded-2xl bg-[#edf6f9]">
          <Image
            src="/images/secure.gif"
            width={48}
            height={48}
            alt="image"
            className="rounded-xl "
          />
          <div className=" w-full py-3 px-2 text-lg font-mono text-center mt-6 ">
            {" "}
            Get top notch security of blockchain{" "}
          </div>
        </div>
      </div>

      <div className=" bg-[url('/images/bg2.png')] w-full h-full sm:py-36 py-12 flex items-center justify-center    bg-cover bg-no-repeat">
        <div className=" bg-[#c7f9cc] rounded-2xl sm:w-4/6 w-11/12  text-center sm:p-12 p-6 ">
          <div className="mb-8 text-3xl tracking-wider text-[#0c0518]  ">
            Who is this for ? 🤔
          </div>

          <div className="  text-xl font-mono text-center mt-8  ">
            Anybody who wants to participate in hackathon and want to organize
            its own hackathon . Hackathons are the best way to increase your
            skills and offer a presentavble projects in front of recruiters. AND
            guess what this platform is providing your a lots of features for
            your growth .
          </div>
          <div className=" w-36 float-right mt-8 bg-[#ff3f00] rounded-full p-4 font-mono border-dotted border-4 border-[#10002b]">
            FOR FREE
          </div>
        </div>
      </div>
      <footer className="w-full bg-[#240046] h-36 flex flex-col items-center justify-center pt-3 text-white">
        <span className="text-sm my-1">Made with ❤ by SHIKHAR</span>
        <span className="text-lg mb-3">Contact Me📡</span>
        <div className="flex items-center justify-center gap-6">
          <div onClick={() => handleContact("https://twitter.com/shikkhar_")}>
            <Image
              className="cursor-pointer"
              src="/images/twitter.png"
              alt="bg"
              height={40}
              width={40}
            />
          </div>
          <div onClick={() => handleContact("https://github.com/shikhar360")}>
            <Image
              className="cursor-pointer"
              src="/images/github.png"
              alt="bg"
              height={40}
              width={40}
            />
          </div>
          <div
            onClick={() => handleContact("https://linkedin.com/in/shikhar360")}
          >
            <Image
              className="cursor-pointer"
              src="/images/linkin.png"
              alt="bg"
              height={40}
              width={40}
            />
          </div>
        </div>
        <span className="mt-auto py-3 text-[#c7c7c7] text-xs">
          ©2022 DEETHON. ALL COPYRIGHTS RESERVED
        </span>
      </footer>
    </div>
  );
}
/*
Primary color : #8338ec
light side :   #edf6f9
dark of light : #c7f9cc
dark : #10002b
*/
