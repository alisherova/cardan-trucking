import React from "react";
import Image from "next/image";
import Logo4 from "../../public/kardan/clients/image 9.png";
import Logo5 from "../../public/kardan/clients/image 10.png";
import Logo6 from "../../public/kardan/clients/image 12.png";
import Logo8 from "../../public/kardan/clients/ups 1.png";

const LogosSecondRow = () => {
  return (
     <div
       className={"py-10 mt-12 mb-20 bg-zinc-950"}
     >
    <div
      className={
        "grid lg:grid-cols-4 lg:gap-14 gap-8 md:grid-cols-3 grid-cols-2 place-content-between  lg:place-items-start place-items-center py-10 container"
      }
    >
      <div className={"lg:ml-12 lg:w-100 md:w-60 sm:w-40 w-24"}>
        <Image
          className={"contrast-50 grayscale hover:filter-none cursor-pointer"}
          src={Logo4}
          alt="amazon_logo"
        />
      </div>
      <div className={"lg:w-100 md:w-60 sm:w-40 w-24"}>
        <Image
          className={"grayscale hover:filter-none cursor-pointer"}
          src={Logo5}
          alt="fedex_logo"
        />
      </div>
      <div className={"lg:w-100 md:w-60 sm:w-40 w-24"}>
        <Image
          className={"contrast-50 grayscale hover:filter-none cursor-pointer"}
          src={Logo6}
          alt="postal_service_logo"
        />
      </div>
      <div className={"lg:w-100 md:w-60 w-14"}>
        <Image
          className={"contrast-50 grayscale hover:filter-none cursor-pointer"}
          src={Logo8}
          alt="ups_logo"
        />
      </div>
    </div>
   </div>
  );
};

export default LogosSecondRow;
