import React, { useState, useEffect } from "react";
import { useAccount, useContract, useProvider, useSigner } from "wagmi";

import { contractAddress, abi } from "./../../constants/constant";


export default function MyApplicants() {
  const [showApplicantList, setShowApplicantList] = useState(false);
  const [applicantList, setApplicantList] = useState('');
  const { address, isConnected } = useAccount();

  const provider = useProvider();
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: contractAddress,
    contractInterface: abi,
    signerOrProvider: signer || provider,
  });

  async function setMyApps() {
    try {
      const myAppTx = await contract.getListOfApplicant();

      
     console.log(myAppTx);
      // let hackAppTx = [];
      // myAppTx.forEach((hack) => {
      //   hackAppTx.push(hack);
      // });
      setApplicantList(myAppTx);
      // console.log(hackAppTx , myAppTx);
    } catch (err) {
      console.log(err);
    }
  }

   async function acceptingreq(val){
    try{
      const acceptTx = await contract.acceptReq(val)
      await acceptTx.wait()
    }catch(err){
      console.log(err);
    }
   }

useEffect(()=>{
setMyApps()
},[])

  return ( <div className="w-full h-screen  pt-36 pb-32 text-center flex flex-col items-center justify-center bg-[#f2fff7]">
        
      {showApplicantList && (
        <div className=" w-full h-full mt-4 p-2 flex flex-col items-center justify-start w-90 h-38 overflow-y-scroll gap-4">
          {applicantList.map((itm, ind) => {
            return (
              <div key={ind} className=" flex gap-5">
              <span  className=" bg-amber-400 p-1 px-4 rounded-md">
                {itm}
              </span>
              <span 
              onClick={()=>acceptingreq(itm)}
              className=" text-[#44eb55] p-1 px-4 rounded-md cursor-pointer">
               Accept
              </span>
              </div>
            );
          })}
        </div>
      )}
    </div>)
    ;
}

/*
Primary color : #8338ec
light side :   #edf6f9
dark of light : #c7f9cc
dark : #10002b
*/
