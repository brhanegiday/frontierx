import Image from "next/image";
function Banner() {
  return (
    <div className="mb-10">
      <div className="h-[25vw] mx-auto py-2  w-full relative">
        <Image
          src="/home/Sub Header Mask.png"
          alt="frontierX Logo"
          layout="fill"
          objectFit="contain"
          className="object-center"
        />
      </div>
      <div className="relative top-6 2xl:top-9">
        <div className="absolute bottom-0 w-full 2xl:h-60 mx-auto h-40">
          <Image
            src="/home/Ellipse 37.png"
            layout="fill"
            objectFit="contain"
            alt="ellipse"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
