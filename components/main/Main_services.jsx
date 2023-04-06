import React from "react";
import Image from "next/image";
import rectangle1 from "../../public/kardan/main page/services main page/Rectangle 5-1.png";
import rectangle2 from "../../public/kardan/main page/services main page/Rectangle 5-2.png";
import rectangle3 from "../../public/kardan/main page/services main page/Rectangle 5.png";
import read_more from "../../public/kardan/icons/read more.png";

function main_services() {
  return (
    <div className={"container text-center"}>
      <p className={"text-md font-semibold text-violet-500 pt-28"}>Services</p>
      <p className={"text-4xl md:text-5xl font-semibold pt-4 pb-2"}>Our services</p>
      <div className={"flex justify-between sm:flex-row flex-col gap-10 text-start mt-12 text-white"}>
        <div className={"bg-zinc-950 p-10 md:w-96 w-full mx-auto md:mx-0 rounded-xl"}>
          <Image src={rectangle3} alt="truck" />
          <p className={"text-2xl font-medium py-5"}>Logistics</p>
          <p className={"text-lg font-normal pb-5 w-72"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
            suspendisse eget imperdiet dolor, odio tincidunt.{" "}
          </p>
          <div className={"flex gap-3 items-center hidden"}>
            <a className={"text-md font-medium text-violet-500 "} href="">
              Read more
            </a>
            <Image className={"ml-4"} src={read_more} alt="read_more_line" />
          </div>
        </div>
        <div className={"bg-zinc-950 p-10 md:w-96 w-full mx-auto md:mx-0 rounded-xl"}>
          <Image src={rectangle1} alt="truck" />
          <p className={"text-2xl font-medium py-5"}>Safety first</p>
          <p className={"text-lg font-normal pb-5 w-72"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
            suspendisse eget imperdiet dolor, odio tincidunt.{" "}
          </p>
          <div className={"flex gap-3 items-center hidden"}>
            <a className={"text-md font-medium text-violet-500"} href="">
              Read more
            </a>
            <Image className={"ml-4"} src={read_more} alt="read_more_line" />
          </div>
        </div>
        <div className={"bg-zinc-950 p-10 md:w-96 w-full mx-auto md:mx-0 rounded-xl"}>
          <Image src={rectangle2} alt="truck" />
          <p className={"text-2xl font-medium py-5"}>Transportation</p>
          <p className={"text-lg font-normal pb-5 w-72"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
            suspendisse eget imperdiet dolor, odio tincidunt.{" "}
          </p>
          <div className={"flex gap-3 items-center hidden"}>
            <a className={"text-md font-medium text-violet-500"} href="">
              Read more
            </a>
            <Image className={"ml-4"} src={read_more} alt="read_more_line" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default main_services;
