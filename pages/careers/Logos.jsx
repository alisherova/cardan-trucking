import React from "react";
import Image from "next/image";
import Logo4 from "../../public/kardan/clients/image 9.png";
import Logo5 from "../../public/kardan/clients/image 10.png";
import Logo6 from "../../public/kardan/clients/image 12.png";
import Logo8 from "../../public/kardan/clients/ups 1.png";

const LogosSecondRow = () => {
  return (
    <div className={"py-10 sm:mt-12 mt-8 sm:mb-20 mb-8 bg-zinc-950"}>
      <div className={"container"}>
        <div className={"flex flex-wrap items-center lg:justify-end sm:justify-around justify-around sm:gap-y-14  gap-y-10"}>
          <div className={"md:w-[25%]  w-[35%] "}>
            <Image
              className={
                "contrast-50 grayscale hover:filter-none cursor-pointer"
              }
              src={Logo4}
              alt="amazon_logo"
            />
          </div>
          <div className={"md:w-[25%]  w-[35%]"}>
            <Image
              className={
                "contrast-50 grayscale hover:filter-none cursor-pointer"
              }
              src={Logo5}
              alt="fedex_logo"
            />
          </div>
          <div className={"md:w-[25%]  w-[45%]"}>
            <Image
              className={
                "contrast-50 grayscale hover:filter-none cursor-pointer"
              }
              src={Logo6}
              alt="postal_service_logo"
            />
          </div>
          <div className={"md:w-[12%]  lg:ml-20 w-[30%]"}>
            <Image
              className={
                "contrast-50 grayscale hover:filter-none cursor-pointer"
              }
              src={Logo8}
              alt="ups_logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogosSecondRow;
