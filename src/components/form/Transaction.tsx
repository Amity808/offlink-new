'use client'
import React, { useState } from "react";
import celo from "../../../public/images/celo.png";
import Image from "next/image";


const Transaction =  () => {
    const [txStatus, setTxStatus] = useState('open')
    const [dataFetch, setDataFetch] = useState()
  const [error, setError] = useState("")

  const handleSelectChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setTxStatus(event.target.value);
  };
  
 
  return (
    <>
      {" "}
      <div className="Trans lg:w-[80%] md:w-[95%] h-[2rem] ml-auto mr-auto mt-6 flex justify-between">
        <p className="trans-name border-b-2 border-black-500 w-[6rem] text-[#7b64f2]">
          Transaction
        </p>
        <div>
          <select value={txStatus} onChange={(e) => setTxStatus(e.target.value)} className="bg-[#b2b6ef] text-white border border-black-400 p-2 rounded-lg">
            <option value="open">OPEN</option>
            <option value="active">Active</option>
            <option value="close">Close</option>
          </select>
        </div>
      </div>
      <div className="main-transaction mt-6 lg:w-[80%] md:w-[95%]  ml-auto mr-auto space-y-4">
        <div className="trans1 h-[4rem] w-full bg-[#b2b6ef]  flex items-center justify-around ">
          <div className="logo md:w-3rem md:h-full w-[2rem] h-[2rem] rounded-lg">
            <Image src={celo} alt="celo" width={24} height={24} className=" w-full h-full object-contain" />
          </div>
          <div className="">
            <p className="text-white">0x24444....rdf3</p>
          </div>
          <div className="md:flex md:flex-col hidden">
            <p className=" text-white">Date</p>
            <p className="text-white">21 july</p>
          </div>
          <div className="md:flex md:flex-col hidden">
            <p className=" text-white">Time</p>
            <p className="text-white">09:00</p>
          </div>
          <div className="flex flex-col">
            <p className=" text-white">Amount</p>
            <p className="text-white">+$234</p>
          </div>

          <button className="btn md:w-[6rem] md:h-[2.5rem] w-[4rem] h-[2rem] text-white items-center justify-center bg-[#7b64f2] rounded-lg">
            Accept
          </button>
        </div>

        <div className="trans1 h-[4rem] w-full bg-[#b2b6ef] flex items-center justify-around">
          <div className="logo md:w-3rem md:h-full w-[2rem] h-[2rem] rounded-lg ">
            <Image src={celo} alt="celo" width={24} height={24} className=" w-full h-full object-contain" />
          </div>
          <div className="">
            <p className="text-white">0x24444....rdf3</p>
          </div>
          <div className="md:flex md:flex-col hidden">
            <p className=" text-white">Date</p>
            <p className="text-white">21 july</p>
          </div>
          <div className="md:flex md:flex-col hidden">
            <p className=" text-white">Time</p>
            <p className="text-white">09:00</p>
          </div>
          <div className="flex flex-col">
            <p className=" text-white">Amount</p>
            <p className="text-white">+$234</p>
          </div>

          <button className="btn md:w-[6rem] md:h-[2.5rem]  text-white w-[4rem] h-[2rem] items-center justify-center bg-[#7b64f2] rounded-lg">
            Accept
          </button>
        </div>

        <div className="trans1 h-[4rem] w-full bg-[#b2b6ef] flex items-center justify-around ">
          <div className="logo md:w-3rem md:h-full w-[2rem] h-[2rem] rounded-lg ">
            <Image src={celo} alt="celo" width={24} height={24} className=" w-full h-full object-contain" />
          </div>
          <div className="">
            <p className="text-white">0x24444....rdf3</p>
          </div>
          <div className="md:flex md:flex-col hidden">
            <p className=" text-white">Date</p>
            <p className="text-white">21 july</p>
          </div>
          <div className="md:flex md:flex-col hidden">
            <p className=" text-white">Time</p>
            <p className="text-white">09:00</p>
          </div>
          <div className="flex flex-col">
            <p className=" text-white">Amount</p>
            <p className="text-white">+$234</p>
          </div>

          <button className="btn md:w-[6rem] md:h-[2.5rem] w-[4rem] h-[2rem] items-center justify-center text-white bg-[#7b64f2] rounded-lg">
            Accept
          </button>
        </div>
      </div>
    </>
  );
};

export default Transaction;
