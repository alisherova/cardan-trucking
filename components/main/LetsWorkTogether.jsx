import React from "react";
import Image from "next/image";
import rectangle2 from "../../public/kardan/main page/truck cta.png";
import Button from "../button";

function LetsWorkTogether() {
  return (
    <div className={" container "}>
      <div className={" mt-10 md:mt-28 bg-zinc-950 rounded-xl w-full mx-auto md:mx-0"}>
        <div className={"p-6 pr-0 grid grid-cols-1  sm:flex gap-6"}>
          <div className={"ml-auto mt-7"}>
            <p className={"text-3xl md:text-4xl font-semibold py-5 text-white"}>Let`s work together!
            </p>
            <p className={"text-lg font-normal pb-5 text-white"}>
              Totally free for 14 days. Just sign up and start creating in
              seconds..
            </p>
            <input
              className={"bg-violet-250 py-3 pl-4 rounded-xl w-72 md:w-96"}
              type="email"
              placeholder="Email"
              name="email"
            />
            <Button
              classes={
                "bg-blue-500 px-10 py-3 mt-3 md:ml-4 text-base font-semibold"
              }
              gradient={false}
              text={"Send"}
            />
          </div>
          <div className={"my-auto"}>
            <Image src={rectangle2} alt="truck" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LetsWorkTogether;
