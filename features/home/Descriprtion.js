import { BiBarChartAlt } from "react-icons/bi";
import React from "react";
import { RiApps2Line } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";

function Descriprtion() {
  return (
    <div className="py-10 px-6">
      <div className="flex flex-col items-center">
        <h2 className="text-[2.5rem] font-extrabold text-white text-center">
          Lorem ipsum
        </h2>
        <p className="text-white text-[1rem] py-3">
          Created by: <span className="text-red-ribbon-500">Lorem ipsum</span>
        </p>
        <p className="text-white text-[1rem]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
        </p>
        <div className="flex space-x-5 items-center pb-10 pt-16">
          <button className="py-3 px-6 bg-[#0D0D0D80]  transition duration-150 ease-out rounded-md flex items-center space-x-1 shadow-md">
            <BiBarChartAlt className="h-5 w-5 text-[#F3F3F3]" />
            <p className="text-[#f6f6f6] font-extrabold">Lorem Ipsum</p>
          </button>
          <button className="py-3 px-6 bg-[#0D0D0D] transition duration-150 ease-out rounded-md flex items-center space-x-1 shadow-md">
            <RiApps2Line size={17} className="text-[#F3F3F3]" />
            <p className="text-[#f6f6f6] font-extrabold">Lorem Ipsum</p>
          </button>
          <button className="py-3 px-6 bg-[#0D0D0D80]  transition duration-150 ease-out rounded-md flex items-center space-x-1 shadow-md">
            <HiOutlineShoppingBag
              size={17}
              className="textl-[#F3F3F3] text-white"
            />
            <p className="text-[#f6f6f6] font-extrabold">Lorem Ipsum</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Descriprtion;
