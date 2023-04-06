import React from "react";
import Image from "next/image";
import clients_img from "../../public/kardan/clients/Client_img.png";
import Logo1 from "../../public/kardan/clients/image 6.png";
import Logo2 from "../../public/kardan/clients/image 7.png";
import Logo3 from "../../public/kardan/clients/image 8.png";
import Logo7 from "../../public/kardan/clients/image 13.png";
import Logo4 from "../../public/kardan/clients/image 9.png";
import Logo5 from "../../public/kardan/clients/image 10.png";
import Logo6 from "../../public/kardan/clients/image 12.png";
import Logo8 from "../../public/kardan/clients/ups 1.png";

const ClientsPage = () => {
  return (
    <div className="lg:pt-20 md:pt-8">
      <div className={"container"}>
        <Image src={clients_img} alt="truck" />
        <p
          className={
            "sm:pb-7 pb-4 sm:pt-12 pt-4 lg:text-5xl text-4xl font-medium lg:text-start text-center"
          }
        >
          Clients
        </p>
        <p className={"font-normal text-gray-300 lg:text-lg text-base"}>
          Kings Mountain National Carriers INC is a provider of diversified
          transportation services which include power only, dry van, reefer,
          flatbed and containers. With a wide range of brokers we are hauling
          Spot, Dedicated and short haul loads and professional dispatch system
        </p>
      </div>
      <div className={"sm:py-10 py-5 sm:mt-12 mt-6 sm:mb-24 mb-10 bg-zinc-950"}>
        <div className="container">
          <div
            className="flex flex-wrap items-center lg:justify-end sm:justify-around justify-around lg:gap-y-20 sm:gap-y-14  gap-y-8 lg:gap-x-0 gap-x-4 lg:px-10 pb-3"
          >
            <div className={"md:w-[18%]  sm:w-[30%] w-[30%]"}>
              <Image
                className={"contrast-50 hover:filter-none cursor-pointer"}
                src={Logo1}
                alt="syfan_logistics_logo"
              />
            </div>
            <div className={"md:w-[20%]  sm:w-[25%] w-[30%]"}>
              <Image
                className={"contrast-50 hover:filter-none cursor-pointer"}
                src={Logo2}
                alt="utxl_logo"
              />
            </div>
            <div className={"md:w-[40%]  sm:w-[40%] w-[40%]"}>
              <Image
                className={"contrast-50 hover:filter-none cursor-pointer"}
                src={Logo3}
                alt="coyote_logo"
              />
            </div>
            <div className={"md:w-[22%] sm:w-[30%] w-[35%]"}>
              <Image
                className={"contrast-50 hover:filter-none cursor-pointer"}
                src={Logo7}
                alt="J.B.Hunt_logo"
              />
            </div>
            <div className={"md:w-[25%]  sm:w-[30%] w-[35%]"}>
              <Image
                className={
                  "contrast-50 grayscale hover:filter-none cursor-pointer"
                }
                src={Logo4}
                alt="amazon_logo"
              />
            </div>
            <div className={"md:w-[25%]  sm:w-[30%] w-[30%]"}>
              <Image
                className={
                  "contrast-50 grayscale hover:filter-none cursor-pointer"
                }
                src={Logo5}
                alt="fedex_logo"
              />
            </div>
            <div className={"md:w-[25%]  sm:w-[55%] w-[40%]"}>
              <Image
                className={
                  "contrast-50 grayscale hover:filter-none cursor-pointer"
                }
                src={Logo6}
                alt="postal_service_logo"
              />
            </div>
            <div className={"md:w-[12%]  lg:ml-20 sm:w-[30%] w-[15%]"}>
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
    </div>
  );
};

export default ClientsPage;
