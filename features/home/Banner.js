import Image from "next/image";
function Banner() {
  return (
    <div className="">
      <div className="h-[25vw1] py-4  w-full relative">
        <Image
          src="/home/Sub Header Mask.png"
          alt="frontierX Logo"
          width={1500}
          height={300}
        />
      </div>
    </div>
  );
}

export default Banner;
