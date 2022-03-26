import NextLink from "next/link";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 drop-shadow-sm bg-[#0D0D0D]">
        <div className="xl:container flex items-center px-10 mx-auto py-4 ">
          <div>
            <NextLink href="/">
              <a className="cursor-pointer">
                <Image
                  src="/home/logo.png"
                  alt="frontierX Logo"
                  width="150"
                  height="20"
                  className="object-contain"
                />
              </a>
            </NextLink>
          </div>
          <div className="ml-auto mr-7 relative flex items-center w-1/2">
            <SearchIcon className="text-star-dust-500 absolute left-4 w-5 h-4" />
            <input
              type="text"
              placeholder="Lorem ipsum"
              className="bg-[#1f1f1f] text-white focus:outline-none w-full shadow-md rounded-lg py-3 px-10 text-sm placeholder:text-star-dust-500"
            />
          </div>
          <div className="flex space-x-4 items-center">
            <p className="cursor-pointer text-white font-extrabold"> Lorem</p>
            <p className="cursor-pointer text-white font-extrabold"> Lorem</p>
            <p className="cursor-pointer text-white font-extrabold"> Lorem</p>
          </div>
        </div>
        <div className="h-[0.125rem] w-full bg-gradient-to-r from-[#665AEF] to-[#FC364C]"></div>
      </header>
    </>
  );
}

export default Header;
