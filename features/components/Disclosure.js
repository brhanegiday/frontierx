import { Disclosure, Transition } from "@headlessui/react";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
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
      <Disclosure.Panel static className="px-4 pt-4 pb-2 text-sm text-white ">
        <p className="border-t-[1px] border-gray-800 py-3 w-[90%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
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
    </Transition>
  );
}
