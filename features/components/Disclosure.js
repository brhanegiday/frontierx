import { Disclosure, Transition } from "@headlessui/react";
import { HiExternalLink } from "react-icons/hi";
import { FaInstagram, FaGithubAlt } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

export default function AcContent({ open }) {
  return (
    <Transition
      show={open}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Disclosure.Panel static className="px-4 pt-4 pb-2">
        <p className="border-t-[1px] border-gray-800 py-3 text-sm text-white w-[90%] leading-relaxed1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className="grid grid-cols-2 gap-4 py-6">
          <div className="flex items-center space-x-2 cursor-pointer">
            <HiExternalLink className="text-[#F3F3F3] h-5 w-5" />
            <p className="text-red-ribbon-500 transition text-sm duration-150 hover:text-white">
              Lorem ipsum.com
            </p>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <FaGithubAlt className="text-[#F3F3F3] h-5 w-5" />
            <p className="text-red-ribbon-500 transition text-sm duration-150 hover:text-white">
              @Lorem ipsum
            </p>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <FaInstagram className="text-[#F3F3F3] h-5 w-5" />
            <p className="text-red-ribbon-500 transition text-sm duration-150 hover:text-white">
              @Lorem ipsum
            </p>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <FiTwitter className="text-[#F3F3F3] h-5 w-5" size={17} />
            <p className="text-red-ribbon-500 transition text-sm duration-150 hover:text-white">
              @Lorem ipsum
            </p>
          </div>
        </div>
      </Disclosure.Panel>
    </Transition>
  );
}
