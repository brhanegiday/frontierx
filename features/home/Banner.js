import Image from "next/image";
function Banner() {
  return (
    <div className="mb-14 md:mb-3 py-6 2xl:py-10 relative">
      <img
        src="/home/Sub Header Mask.png"
        alt="frontierX Logo"
        className="object-center w-full md:h-auto h-[25vw] object-cover"
      />
      <div className="absolute z-10 top-[22vw] md:top-[14.59vw] lg:top-[13.9vw] xl:top-[13.3vw] w-full flex justify-center items-center">
        <img
          src="/home/Ellipse 37.png"
          className="w-[90px] h-[90px] md:w-[100px] md:h-[100px] xl:w-[130px] xl:h-[130px] object-contain"
          alt="ellipse"
        />
      </div>
    </div>
  );
}

export default Banner;
