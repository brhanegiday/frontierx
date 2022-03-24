import React, { useState } from "react";
import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { BsQuestionCircle } from "react-icons/bs";
import { accordionData } from "../../data/accordioData";

function LowerSection() {
  const [getInfo, setGetInfo] = useState(false);

  return (
    <div>
      <Disclosure as="div" className="w-full">
        {({ open }) => (
          <div className="p-5 bg-[#0D0D0D80] rounded-md">
            <Disclosure.Button
              onClick={() => setOpenAc("secoond")}
              className="flex justify-between w-full px-4 py-1 text-sm font-medium text-left rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-[#0D0D0D80] focus-visible:ring-opacity-75"
            >
              <div className="flex space-x-1 items-center">
                <Image
                  src="/icons/Group.svg"
                  alt="group"
                  width={15}
                  height={15}
                  className="text-white"
                />
                <h4 className="text-lg text-white">Lorem ipsum</h4>
                <div
                  className="relative"
                  onMouseEnter={() => setGetInfo(true)}
                  onMouseLeave={() => setGetInfo(false)}
                >
                  <BsQuestionCircle className="w-4 h-4 text-gray-200 pl-1" />
                  {getInfo && (
                    <div className="py-4 px-6 absolute w-fit rounded-md left-2 bottom-5 whitespace-nowrap transition-all duration-150 ease-in bg-[#0D0D0D]">
                      <p className="text-white">
                        React components designed to provide
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <ChevronUpIcon
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-white`}
              />
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel
                static
                className="px-4 pt-4 pb-2 text-sm text-white"
              >
                <div className="grid grid-cols-3 gap-x-4 space-y-2">
                  {accordionData.map((item, i) => (
                    <div key={i} className="bg-[#0D0D0D] py-3 px-4 rounded-md">
                      <p className="text-gray-500 text-center text-sm">
                        {item.subtitle}
                      </p>
                      <h3 className="text-lg py-1 text-white text-center">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-xs text-center">
                        {item.percentage}
                      </p>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>
      <Disclosure as="div" className="w-full py-5">
        {({ open }) => (
          <div className="p-5 bg-[#0D0D0D80] rounded-md">
            <Disclosure.Button className="flex justify-between w-full px-4 py-1 text-sm font-medium text-left rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-[#0D0D0D80] focus-visible:ring-opacity-75">
              <div className="flex space-x-1 items-center">
                <Image
                  src="/icons/Group.svg"
                  alt="group"
                  width={15}
                  height={15}
                  className="text-white"
                />
                <h4 className="text-lg text-white">Lorem ipsum</h4>
              </div>
              <ChevronUpIcon
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-white`}
              />
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel
                static
                className="px-4 pt-4 pb-2 text-sm text-white"
              >
                <p className="border-t-[1px] border-gray-800 py-3">
                  Lorem ipsum
                </p>
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>
    </div>
  );
}

export default LowerSection;
