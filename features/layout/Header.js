import NextLink from "next/link";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import Mobilemenu from "./MobileMenu";

function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 drop-shadow-sm bg-[#0D0D0D]">
        <div className="flex items-center justify-between px-6 md:px-12 2xl:px-16 w-full mx-auto py-4 ">
          <div>
            <NextLink href="/" passHref>
              <a>
                <img
                  src="/home/logo.png"
                  alt="frontierX Logo"
                  layout="fill"
                  className="object-contain"
                />
              </a>
            </NextLink>
          </div>

          <div className="hidden lg:ml-auto lg:mr-7 relative md:flex items-center w-1/2">
            <SearchIcon className="text-star-dust-500 absolute left-4 w-5 h-4" />
            <input
              type="text"
              placeholder="Lorem ipsum"
              className="bg-[#1f1f1f] text-white focus:outline-none w-full shadow-md rounded-lg py-3 px-10 text-sm placeholder:text-star-dust-500"
            />
          </div>
          <div className="hidden lg:flex space-x-4 items-center">
            <p className="cursor-pointer text-white font-extrabold"> Lorem</p>
            <p className="cursor-pointer text-white font-extrabold"> Lorem</p>
            <p className="cursor-pointer text-white font-extrabold"> Lorem</p>
          </div>
          <div className="block lg:hidden">
            <Mobilemenu />
          </div>
        </div>
        <div className="h-[0.125rem] w-full bg-gradient-to-r from-[#665AEF] to-[#FC364C]"></div>
      </header>
    </>
  );
}

export default Header;

// Abraham Mel: I would like to further explain that our Global Payment Services receiving accounts  is not an actual bank account.
// Abraham Mel: They are just a collection account that allows you to receive payments from companies worldwide.
// Abraham Mel: Therefore, we do not have the IBAN number.
// Brhane Giday: okay, can I get the BIC number then?
// Abraham Mel: What we have is the SWIFT code which is only available with EUR receiving accounts.
// Abraham Mel: Yes, BIC is available in the EUR receiving account as well.
// Abraham Mel:

// To view this code, follow these steps:

//     Log in to your Payoneer online account
//     Click the "Receive" tab and choose "Global Payment Service"
//     Select the "EUR" currency and the relevant receiving account.

// Abraham Mel:

// From there, you may view your full EU Payment Service details, including the BIC. This is the code you should use for companies requesting a SWIFT/BIC.

// Brhane Giday: so how can i get payments from companies, if you have an info about this please?
// Abraham Mel: For me to answer that, let me collect more details first.
// Abraham Mel: May I ask where are you expecting to receive payments from?
// Brhane Giday: From Europe countries
// Abraham Mel: I see.
// Abraham Mel: In that case, all you need to do is to provide them your EUR receiving account details.
// Abraham Mel: You just have to provide those details to your company that will send you a payment.
// Abraham Mel: Our Global payment service works just like a local transfer.
// Brhane Giday: i see however my payment is in USD. is that possible?
// Brhane Giday: and I am located in Africa
// Abraham Mel: In that case, you will be needing to make a conversion as you will be receiving the funds in EUR  currency.
// Abraham Mel: But, if you will be needing to convert it in USD, feel free to use our  "Manage Currencies" service.
// Abraham Mel: It will allow you to make a conversion between currencies.
