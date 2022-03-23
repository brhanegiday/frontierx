import NextLink from "next/link";
import Image from "next/image";
import {
  ChatAlt2Icon,
  BellIcon,
  ChevronDownIcon,
  SearchIcon,
} from "@heroicons/react/outline";

import { BadgeCheckIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className="py-4 sticky top-0 z-50 drop-shadow-sm bg-black">
      <div className="xl:container flex items-center px-10 mx-auto">
        <div>
          <NextLink href="/">
            <a className="font-semi-bold cursor-pointer">
              <img
                src="/home/logo.png"
                alt="frontierX Logo"
                width="150px"
                height="15px"
              />
            </a>
          </NextLink>
        </div>
        <div className="ml-auto mr-7 relative flex items-center w-1/2">
          <SearchIcon className="text-gray-500 absolute left-4 w-4 h-4" />
          <input
            type="text"
            placeholder="Lorem ipsum"
            className="border-gray-600 bg-[#1f1f1f] border-[1px] text-white focus:outline-none w-full rounded-lg py-2 px-10 text-sm"
          />
        </div>
        <div className="flex space-x-4 items-center">
          <p className="cursor-pointer text-white"> Lorem</p>
          <p className="cursor-pointer text-white"> Lorem</p>
          <p className="cursor-pointer text-white"> Lorem</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
