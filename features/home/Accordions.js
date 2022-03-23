import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import Image from "next/image";

export default function Accordion() {
  const data = [
    {
      id: 1,
      subtitle: "Accessories & Ears",
      title: "Lorem ipsum",
      percentage: "9%",
    },
    {
      id: 2,
      subtitle: "Arms",
      title: "Lorem ipsum",
      percentage: "15%",
    },
    {
      id: 3,
      subtitle: "Background ",
      title: "Lorem ipsum",
      percentage: "2%",
    },
    {
      id: 4,
      subtitle: "Eye",
      title: "Lorem ipsum",
      percentage: "32%",
    },
    {
      id: 5,
      subtitle: "Glasses",
      title: "Lorem ipsum",
      percentage: "3%",
    },
    {
      id: 6,
      subtitle: "Hair & Hats",
      title: "Lorem ipsum",
      percentage: "2%",
    },
    {
      id: 7,
      subtitle: "Head",
      title: "Lorem ipsum",
      percentage: "92%",
    },
    {
      id: 8,
      subtitle: "Legs & Cloths",
      title: "Lorem ipsum",
      percentage: "2%",
    },
    {
      id: 9,
      subtitle: "Mouth",
      title: "Lorem ipsum",
      percentage: "46%",
    },
  ];
  return (
    <div className="pb-10">
      <div className="grid grid-cols-2 gap-x-10 space-y-2">
        <Disclosure>
          {({ open }) => (
            <div className="p-5 bg-[#0D0D0D80] rounded-md">
              <Disclosure.Button className=" flex justify-between w-full px-4 py-1 text-sm font-medium text-left rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-[#0D0D0D80] focus-visible:ring-opacity-75">
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
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
                <div className="grid grid-cols-2 gap-x-4 pt-4 space-y-2">
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <ExternalLinkIcon className="h-4 w-4 text-white" />
                    <p className="text-[#FC364C]">Lorem ipsum.com</p>
                  </div>
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <FaFacebookF className="h-4 w-4 text-white" />
                    <p className="text-[#FC364C]">Lorem ipsum.com</p>
                  </div>
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <FaInstagram className="h-4 w-4 text-white" />
                    <p className="text-[#FC364C]">Lorem ipsum.com</p>
                  </div>
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <FiTwitter className="h-4 w-4 text-white" />
                    <p className="text1-[#FC364C]">Lorem ipsum.com</p>
                  </div>
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt0-20">
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
                  <BsQuestionCircle className="w-4 h-4 text-gray-200 pl-1" />
                </div>
                <ChevronUpIcon
                  BsQuestionCircle
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                <div className="grid grid-cols-3 gap-x-4 space-y-2">
                  {data.map((item, i) => (
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
            </div>
          )}
        </Disclosure>
        <div></div>
        <Disclosure as="div" className="m0-2">
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
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                Lorem ipsum
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
