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
      <div className="w-full bg-[#edf6f9]   h-full pb-32  pt-36 flex items-center justify-center flex-col ">
        <div className=" w-8/12 text-center">
          <span className=" text-5xl text-[#0c0518] tracking-wider  w-8/12 ">
            <Image
              src="/images/sun.gif"
              width={50}
              height={50}
              alt="image"
              className="rounded-xl"
            />
            Where{" "}
            <span className=" bg-[#ff3f00] rounded-3xl p-2 rotate-12 my-1 border-dashed border-4 border-[#10002b] ">
              Hackathons
            </span>{" "}
            meets{" "}
          </span>
        </div>
        <span className="mt-8 text-5xl tracking-wider text-[#0c0518] ">
          Decentralization
          <Image
            src="/images/btc.gif"
            width={48}
            height={48}
            alt="image"
            className="rounded-xl "
          />
          <Image
            src="/images/dia.gif"
            width={48}
            height={48}
            alt="image"
            className="rounded-xl"
          />
          <Image
            src="/images/hack.png"
            width={48}
            height={48}
            alt="image"
            className="rounded-xl"
          />
        </span>
        <span className=" w-8/12 text-xl font-mono text-center mt-6 ">
          <b>Deethon</b> is a Decentralized Hackathon-Listing-platform , where
          you can participate and even organize your own hackathons anonymously
          in comparatively lesser cost with lots of features
        </span>
        <div className=" mt-8">
          <ConnectButton/>
        </div>

        <div className="w-full pt-20 flex flex-col items-center justify-center">
          <span className="mt-8 mb-6 text-3xl tracking-wider text-[#0c0518] ">
            Powered By{" "}
          </span>
          <div className=" flex items-center justify-center px-32 gap-10">
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
      
      <div className="w-full h-full py-36 px-32  grid grid-cols-3 gap-10 justify-center bg-[#8338ec]">
        <div className=" w-4/5 py-6 flex flex-col items-center justify-center rounded-2xl bg-[#edf6f9]">
          <Image
            src="/images/money.gif"
            width={48}
            height={48}
            alt="image"
            className="rounded-xl "
          />
          <div className=" w-full py-3 px-2 text-lg font-mono text-center mt-6 ">
            {" "}
            Organize your Hackathon and Earn money{" "}
          </div>
        </div>
        <div className=" w-4/5 py-6 flex flex-col items-center justify-center rounded-2xl bg-[#edf6f9]">
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
        <div className=" w-4/5 py-6 flex flex-col items-center justify-center rounded-2xl bg-[#edf6f9]">
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
        <div className=" w-4/5 py-6 flex flex-col items-center justify-center rounded-2xl bg-[#edf6f9]">
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
        <div className=" w-4/5 py-6 flex flex-col items-center justify-center rounded-2xl bg-[#edf6f9]">
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
        <div className=" w-4/5 py-6  flex flex-col items-center justify-center rounded-2xl bg-[#edf6f9]">
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

      <div className=" bg-[url('/images/bg2.png')] w-full h-full py-36 flex items-center justify-center    bg-cover bg-no-repeat">
        <div className=" bg-[#c7f9cc] rounded-2xl w-4/6  text-center p-12 ">
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
