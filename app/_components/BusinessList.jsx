"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "../../components/ui/button"
import Link from "next/link";

const BusinessList = ({ businessList, title }) => {
  console.log("bsinelsit",businessList)
  return (
    <div className="mt-5 pb-10  ">
      <h2 className="font-bold text-2xl">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-5 ">
        { businessList.length > 0 ? (
          businessList.map((businness, index) => (
            <Link href={`/details/${businness?.id}`}
              key={index}
              className="shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg "
            >
              <Image
                className="h-[150px] md:h-[300px] object-cover object-center rounded-lg "
                src={businness?.images[0]?.url}
                width={500}
                height={200}
                alt="business image"
              />

              <div className="p-3">
                <h2 className="px-2 py-2 text-white text-sm w-fit bg-purple-400 rounded-full ">
                  {businness?.category?.name}
                </h2>
                <h2 className=" font-bold text-lg  ">{businness?.name}</h2>
                <h2 className="text-gray-800   ">{businness?.contactPerson}</h2>
                <h2 className=" text-sm text-zinc-500  ">{businness?.adress}</h2>
                <Button className="mt-1 bg-lime-500 hover:bg-lime-600">
                  Book Now
                </Button>
              </div>
            </Link>
          ))
        ) : (
          <>
            {[1,2,3,4,5].map((item ,index)=>(
            <div key={index} className="w-full h-[320px] bg-zinc-400 rounded-lg transition-all animate-pulse"></div>
            
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default BusinessList;
