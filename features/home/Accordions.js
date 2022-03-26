import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { RiApps2Line } from "react-icons/ri";
import AcContent from "../components/Disclosure";
import LowerSection from "../components/LowerSection";

export default function Accordion() {
  return (
    <div className="pb-10">
      <div className="grid grid-cols-2 gap-x-10">
        <Disclosure as="div" className="bg4-red-300 w-full" defaultOpen={true}>
          {({ open }) => (
            <div className="p-5 bg-[#0D0D0D80] rounded-sm">
              <Disclosure.Button className="flex justify-between w-full px-4 py-1 text-sm font-medium text-left rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-[#0D0D0D80] focus-visible:ring-opacity-75">
                <div className="flex space-x-1 items-center shadow-sm">
                  <RiApps2Line size={17} className="text-[#F3F3F3]" />
                  <h4 className="text-lg text-white font-bold">Lorem ipsum</h4>
                </div>
                <ChevronDownIcon
                  BsQuestionCircle
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-white`}
                />
              </Disclosure.Button>
              <AcContent open={open} />
            </div>
          )}
        </Disclosure>

        <div className="mt1-3">
          <LowerSection />
        </div>
      </div>
    </div>
  );
}
