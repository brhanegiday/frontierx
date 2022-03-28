import Image from "next/image";
function Banner() {
  return (
    <div className="mb-6 ">
      <div className="py-8 2xl:py-10">
        <img
          src="/home/Sub Header Mask.png"
          alt="frontierX Logo"
          className="object-center w-full h-auto object-cover"
        />
      </div>
      <div className="relative top-8 2xl:top-[4.2rem]">
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
