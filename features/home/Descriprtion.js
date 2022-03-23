import { ChartBarIcon } from "@heroicons/react/solid";
import { BiBarChartAlt } from "react-icons/bi";
import Image from "next/image";
import React from "react";

function Descriprtion() {
  return (
    <div className="py-10 px-6">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white text-center">
          Lorem ipsum
        </h2>
        <p className="text-gray-50 text-sm py-3">
          Created by: <span className="text-[#FC364C]">Lorem ipsum</span>
        </p>
        <p className="text-gray-50">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
        </p>
        <div className="flex space-x-5 items-center pb-10 pt-16">
          <button className="py-3 px-6 bg-[#0D0D0D80]  rounded-lg flex items-center space-x-1 shadow-md">
            <BiBarChartAlt className="h-5 w-5 text-white" />
            <p className="text-white">Lorem Ipsum</p>
          </button>
          <button className="py-3 px-6 bg-[#0D0D0D] rounded-lg flex items-center space-x-1 shadow-md">
            <Image
              src="/icons/Group.svg"
              alt="group"
              width={15}
              height={15}
              className="text-white"
            />
            <p className="text-white">Lorem Ipsum</p>
          </button>
          <button className="py-3 px-6 bg-[#0D0D0D80] rounded-lg flex items-center space-x-1 shadow-md">
            <Image
              src="/icons/finance.svg"
              alt="group"
              width={15}
              height={15}
              className="text-white"
            />
            <p className="text-white">Lorem Ipsum</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Descriprtion;
