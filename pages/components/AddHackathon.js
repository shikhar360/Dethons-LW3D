import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import { ethers } from "ethers";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useContract, useProvider, useSigner } from "wagmi";

import { contractAddress, abi } from "./../../constants/constant";

export default function AddHackathon({ handleActive }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    startDate: "",
    regEnd: "",
    endDate: "",
    desc: "",
    prize: "",
  });
  console.log(form);
  function handleform(e) {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  ///-- Contract Interaction

  const { address, isConnected } = useAccount();

  const provider = useProvider();
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: contractAddress,
    contractInterface: abi,
    signerOrProvider: signer || provider,
  });

  const addHackathonTx = async (val) => {
    try {
      const _amount = ethers.utils.parseEther("0.02");
      const addHackTx = await contract.addHacks(
        val.name,
        val.startDate,
        val.regEnd,
        val.endDate,
        val.desc,
        +val.prize,
        { value: _amount },
      );
      setLoading(true);
      await addHackTx.wait();
      setLoading(false);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
  return (
    <div className="flex items-center justify-center flex-col h-fit w-full font-mono absolute top-0 z-10 bg-black/80 pt-36 pb-44 ">
      <Head>
        <title>Add Hackathons</title>
        <meta name="description" content="Created with ❤ by SHIKHAR" />
      </Head>
      <div
        className={` flex items-center justify-center  w-full h-fit  text-md transition-all duration-500 linear  text-[#03071e] p-1.5 shadow-md   `}
      >
        {loading && (
          <div className="w-screen flex flex-col  items-center justify-center h-screen top-0 absolute bg-white/50 z-30">
            <span className="bg-[white] text-[#1b4332] p-3 my-2 text-xl font-semibold relative rounded-xl">
              Transaction is being processed
              <span className="animate-ping absolute -top-1 -right-2 inline-flex h-6 w-6 rounded-full bg-[#0aff99] opacity-75"></span>
              <span className="relative inline-flex -top-4 -right-4 rounded-full h-4 w-4 bg-[#0aff99]"></span>
            </span>
          </div>
        )}

        <div className="flex flex-col sm:w-6/12 w-11/12 sm:h-full h-full bg-white/75 rounded-2xl items-start justify-start gap-2 my-auto  ">
          <div className="flex items-center justify-start gap-72 w-full ">
            <span className="text-2xl w-5/6 text-start sm:text-3xl mx-8 mt-4 font-mono  ">
              Add Hackathon
            </span>

            <span onClick={handleActive} className="cursor-pointer mt-4 px-8 ">
              <Image
                src="/images/close.png"
                width={40}
                height={40}
                alt="image"
              />
            </span>
          </div>

          <span className="text-sm mx-8 text-gray-500 ">
            Enter details to add your hackathon details
          </span>
          <span className="text-sm mx-8 text-gray-500 ">
            Send minimum 0.02 ETH for adding Hackathon
          </span>

          <div
            className={` gap-1 flex w-full flex-col items-start  justify-center mt-4 sm:text-xl text-sm`}
          >
            <span className=" text-lg mx-8 font-mono">Name</span>
            <input
              type="text"
              onChange={handleform}
              name="name"
              className="text-start text-sm border mx-8 border-zinc-300 indent-4 rounded-sm w-9/12 h-8 "
              placeholder="John Ali Singh"
            />
            <span className=" text-lg mx-8 font-mono">Dates</span>
            <div className=" flex gap-2 w-9/12 ">
              <input
                type="text"
                onChange={handleform}
                name="startDate"
                className="text-start text-sm border ml-8  border-zinc-300 indent-4 rounded-sm w-5/6 h-8 "
                placeholder="Starting Date"
              />
              <input
                type="text"
                onChange={handleform}
                name="regEnd"
                className="text-start text-sm border  border-zinc-300 indent-4 rounded-sm w-5/6 h-8 "
                placeholder="Registration Ends"
              />
              <input
                type="text"
                onChange={handleform}
                name="endDate"
                className="text-start text-sm border  border-zinc-300 indent-4 rounded-sm w-5/6 h-8 "
                placeholder="Hackathon Ends"
              />
            </div>

            <span className=" text-lg mx-8 font-mono">Description</span>
            <textarea
              type="text"
              onChange={handleform}
              name="desc"
              className=" resize-none text-start text-sm border mx-8 border-zinc-300 indent-4 rounded-sm w-9/12 h-24"
              placeholder="Description "
            />
            <span className=" text-lg mx-8 font-mono">Prize</span>
            <input
              type="number"
              onChange={handleform}
              name="prize"
              className="text-start text-sm border mx-8 border-zinc-300 indent-4 rounded-sm w-9/12 h-8 "
              placeholder="Prize Amount 🤑"
            />
          </div>
          <button
            onClick={() => addHackathonTx(form)}
            className="mt-8 m-8 rounded-md py-2 px-4 hover:bg-[#9a52ff] bg-[#8338ec] font-mono"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
