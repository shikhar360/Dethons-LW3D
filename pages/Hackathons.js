import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Head from "next/head";
import Image from "next/image";
import { useAccount, useContract, useProvider, useSigner } from "wagmi";
import { contractAddress, abi } from "./../constants/constant";
import Applications from './Applications';

export default function Hackathons() {
  const [allMyHack, setAllMyHack] = useState("");
  const [loading, setLoading] = useState(false);
  const { address, isConnected } = useAccount();

  const provider = useProvider();
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: contractAddress,
    contractInterface: abi,
    signerOrProvider: signer || provider,
  });

  
  console.log(allMyHack);

  async function applying(val){
    try{
      const applyTx = await contract.applyForHack(val.a , val.b)
      setLoading(true)
      await applyTx.wait()
      setLoading(false)
      console.log("Applied for Hackathon");
    }catch(err){
      console.log(err);
    }
  }



  useEffect(() => {
    async function setMyHack() {
      try {
        const myHackTx = await contract.allHacks();
  
        let hackAllTx = [];
        myHackTx.forEach((hack) => {
          hackAllTx.push({
            hackName: hack.hackName,
            start: hack.startDate,
            regEnd: hack.regEndDate,
            end: hack.endDate,
            desc: hack.description,
            prize: hack.prizeAmount.toString(),
            owner: hack.hackOwner,
          });
        });
        setAllMyHack(hackAllTx);
      } catch (err) {
        console.log(err);
      }
    }
    setMyHack();
  }, []);
  return (
    <div className="w-full h-full pt-36 pb-32 px-16 grid grid-cols-3 auto-rows-max bg-[#f2fff7] ">
       {loading && (
          <div className="w-screen flex flex-col  items-center justify-center h-screen top-0 absolute bg-white/50 z-30">
            <span className="bg-[white] text-[#1b4332] p-3 my-2 text-xl font-semibold relative rounded-xl">
              Transaction is being processed
              <span className="animate-ping absolute -top-1 -right-2 inline-flex h-6 w-6 rounded-full bg-[#0aff99] opacity-75"></span>
              <span className="relative inline-flex -top-4 -right-4 rounded-full h-4 w-4 bg-[#0aff99]"></span>
            </span>
          </div>
        )}
      {allMyHack &&
        allMyHack.map((hack, ind) => {
          return (
            <div key={ind}>
              <div className="w-9/12 h-max bg-white/80 flex flex-col items-start justify-center shrink rounded-xl font-mono p-4 ">
                <div className=" w-full flex justify-between items-center">
                  <span className="text-2xl font-mono font-semibold mb-6 w-56 truncate">
                    {" "}
                    {hack.hackName}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-8 ">
                  <span className="text-md font-mono font-semibold  ">
                    🏆 PRIZE- {hack.prize}
                  </span>
                </div>

                <div className="w-full flex justify-between items-center ">
                  <div className=" w-40 p-2 rounded-xl flex flex-start justify-start font-mono flex-col">
                    <span className=" font-mono text-md text-zinc-500 font-semibold">
                      Starts : 
                    </span>
                    <span className=" font-mono text-md text-zinc-500">
                      {hack.start}
                    </span>
                  </div>
                  <div className=" w-44 p-2 rounded-xl flex flex-start justify-start font-mono flex-col">
                    <span className=" font-mono text-md text-zinc-500 font-semibold">
                      Reg. :
                    </span>
                    <span className=" font-mono text-sm text-zinc-500">
                      {hack.regEnd}
                    </span>
                  </div>
                  <div className=" w-40 p-2 rounded-xl flex flex-start justify-start font-mono ">
                    <div className="flex-col">
                      <span className=" font-mono text-sm text-zinc-500 font-semibold">
                        Ends:  
                      </span>
                      <span className=" font-mono text-sm text-zinc-500">
                        {hack.end}
                      </span>
                    </div>
                    <div></div>
                  </div>
                </div>
                <span className="text-md w-56 font-mono text-zinc-600 font-semibold truncate">
                  {" "}
                  <b className="text-[#10002b] text-sm ">😎 Owner :</b>{" "}
                  <span className=" truncate text-xs w-12">{hack.owner}</span>
                </span>

                <div className="flex flex-col mt-2 gap-2">
                  <div className="flex items-center justify-start gap-8 ">
                    <span className="text-md  font-semibold font-mono  ">
                      Description
                    </span>
                  </div>
                  <div className="w-56 truncate h-fit overflow-y-scroll font-mono scrollbar-hide text-zinc-800 ">
                    {hack.desc}
                  </div>
                </div>
                <div className=" flex items-center justify-around w-full">
                  <button
                  onClick={()=>applying({a : hack.owner , b : address})}
                  className=" bg-[#8338ec] text-[#10002b] text-lg mx-auto transition-all duration-300 linear rounded-xl my-8 p-1.5 hover:scale-105 hover:shadow-lg hover:shadow-[#8338ec] font-mono font-bold">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
// My hsckathons // Running hackathons
/*
Primary color : #8338ec
light side :   #edf6f9
dark of light : 
dark : #10002b
*/
