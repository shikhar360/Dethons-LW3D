import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import AddHackathon from "./AddHackathon";
import EditHackathon from "./EditDetails";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useContract, useProvider, useSigner } from "wagmi";

import { contractAddress, abi } from "./../../constants/constant";

export default function MyHackathons() {
  const [active, setActive] = useState(false);
  const [activeEdit, setActiveEdit] = useState({
    editPrize: false,
    nameDesc: false,
    editDate: false,
  });

  function handleActive() {
    setActive(!active);
  }

  function handlePrize() {
    setActiveEdit({
      editPrize: true,
      nameDesc: false,
      editDate: false,
    });
  }
  function handleDates() {
    setActiveEdit({
      editPrize: false,
      nameDesc: false,
      editDate: true,
    });
  }
  function handleNameDesc() {
    setActiveEdit({
      editPrize: false,
      nameDesc: true,
      editDate: false,
    });
  }

  function closeEdit() {
    setActiveEdit({
      editPrize: false,
      nameDesc: false,
      editDate: false,
    });
  }

  const [isMyHack, setIsMyHack] = useState("");

  const { address, isConnected } = useAccount();

  const provider = useProvider();
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: contractAddress,
    contractInterface: abi,
    signerOrProvider: signer || provider,
  });

  


 async function startingHack (){
  try{
    const startTx = await contract.startHack()
    await startTx.wait()
  }catch(err){
    console.log(err);
  }

 }
 async function endingHack (){
  try{
 const endTx = await contract.endHack()
 await endTx.wait()
  }catch(err){
    console.log(err);
  }

 }

  useEffect(() => {
    async function setMyHack() {
      try {
        const myHackTx = await contract.myHack();
  
        setIsMyHack({
          hackName: myHackTx.hackName,
          start: myHackTx.startDate,
          regEnd: myHackTx.regEndDate,
          end: myHackTx.endDate,
          desc: myHackTx.description,
          prize: myHackTx.prizeAmount.toString(),
          owner: myHackTx.hackOwner,
        });
      } catch (err) {
        console.log(err);
      }
    }
    setMyHack();
  }, [activeEdit]);

  return (
    <div className=" pt-32 pb-12 w-full h-full flex  items-center gap-10 justify-center bg-[#f2fff7] ">
      <div
        onClick={handleActive}
        className="rounded-3xl w-24 h-28 bg-[#c7f9cc] hover:bg-[#d9fdef] transition-all duration-500 linear flex items-center justify-center ml-22 "
      >
        <Image src="/images/plus.png" width={50} height={50} alt="image" />
      </div>

      {isMyHack ? (
        <div className="w-9/12 h-5/6 bg-white/80 flex flex-col items-start justify-center rounded-xl font-mono p-4 ">
          <div className=" w-full flex justify-between items-center">
            <span className="text-2xl font-mono font-semibold">
              {" "}
              {isMyHack.hackName}
            </span>
            <span className="bg-[white] text-[#1b4332] p-2 my-2 text-sm font-semibold font-mono relative rounded-xl">
              Under Progress
              <span className="animate-ping absolute -top-1 -right-2 inline-flex h-6 w-6 rounded-full bg-[#fbff0a] opacity-75"></span>
              <span className="relative inline-flex -top-4 -right-4 rounded-full h-4 w-4 bg-[#e6ff0a]"></span>
            </span>
          </div>
          <div className="flex items-center justify-center gap-8 ">
            <span className="text-xl font-mono font-semibold  ">
              🏆 PRIZE- {isMyHack.prize}
            </span>
            <Image
              src="/images/edit.png"
              width={16}
              height={16}
              alt="image"
              className="cursor-pointer"
              onClick={handlePrize}
            />
          </div>

          <div className="w-full flex justify-between items-center ">
            <div className=" w-40 p-2 rounded-xl flex flex-start justify-start font-mono flex-col">
              <span className=" font-mono text-md text-zinc-500 font-semibold">
                Starting From
              </span>
              <span className=" font-mono text-md text-zinc-500">
                {isMyHack.start}
              </span>
            </div>
            <div className=" w-44 p-2 rounded-xl flex flex-start justify-start font-mono flex-col">
              <span className=" font-mono text-md text-zinc-500 font-semibold">
                Registration Ends
              </span>
              <span className=" font-mono text-md text-zinc-500">
                {isMyHack.regEnd}
              </span>
            </div>
            <div className=" w-40 p-2 rounded-xl flex flex-start justify-start font-mono ">
              <div className="flex-col">
                <span className=" font-mono text-md text-zinc-500 font-semibold">
                  Hackathon Ends
                </span>
                <span className=" font-mono text-md text-zinc-500">
                  {isMyHack.end}
                </span>
              </div>
              <div>
                <Image
                  src="/images/edit.png"
                  width={28}
                  height={28}
                  alt="image"
                  className="cursor-pointer"
                  onClick={handleDates}
                />
              </div>
            </div>
          </div>
          <span className="text-lg font-mono text-zinc-600 font-semibold">
            {" "}
            <b className="text-[#10002b]">😎 Owner :</b> {isMyHack.owner}{" "}
          </span>

          <div className="flex flex-col mt-2 gap-2">
            <div className="flex items-center justify-start gap-8 ">
              <span className="text-lg  font-semibold font-mono  ">
                Description
              </span>
              <Image
                src="/images/edit.png"
                width={16}
                height={16}
                alt="image"
                className="cursor-pointer"
                onClick={handleNameDesc}
              />
            </div>
            <div className="w-full h-72 overflow-y-scroll font-mono scrollbar-hide text-zinc-800 ">
              {isMyHack.desc}
            </div>
          </div>
          <div className=" flex items-center justify-around w-full">
            <button
            onClick={startingHack}
            className=" bg-[#a1eb70] text-[#0b2b07] text-xl mx-auto transition-all duration-300 linear rounded-xl my-8 p-1.5 hover:scale-105 hover:shadow-lg hover:shadow-[#a2f36b] font-mono font-bold">
              Start Hackathon
            </button>
            <button
            onClick={endingHack}
            className=" bg-[#e78c7f] text-[#2b0f07] text-xl mx-auto transition-all duration-300 linear rounded-xl my-8 p-1.5 hover:scale-105 hover:shadow-lg hover:shadow-[#ff8977] font-mono font-bold">
              End Hackathon
            </button>
          </div>
        </div>
      ) : (
        <span className="text-2xl w-5/6 text-start sm:text-3xl mx-8 mt-4 font-mono   ">
          No Hackathons Yet
        </span>
      )}
      {active && <AddHackathon handleActive={() => handleActive()} />}
      {activeEdit.editDate || activeEdit.editPrize || activeEdit.nameDesc ? (
        <EditHackathon activeEdit={activeEdit} closeEdit={closeEdit} />
      ) : null}
    </div>
  );
}
/*
Primary color : #8338ec
light side :   #edf6f9
dark of light : 
dark : #10002b
*/
