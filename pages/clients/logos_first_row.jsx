import React from "react";
import Image from "next/image";
import Logo1 from "../../public/kardan/clients/image 6.png";
import Logo2 from "../../public/kardan/clients/image 7.png";
import Logo3 from "../../public/kardan/clients/image 8.png";
import Logo7 from "../../public/kardan/clients/image 13.png";
const LogosFirstRow = () => {
  return (
    <div className={"py-10 mt-32 mb-20 bg-zinc-950"}>
      <div className={"container"}>
        <div className="flex flex-wrap gap-y-8 items-center lg:justify-end justify-around">
          <div className={"lg:w-[18%] w-[30%]"}>
            <Image
              className={"contrast-50 hover:filter-none cursor-pointer"}
              src={Logo1}
              alt="syfan_logistics_logo"
            />
          </div>
          <div className={"lg:w-[20%] w-[28%]"}>
            <Image
              className={"contrast-50 hover:filter-none cursor-pointer"}
              src={Logo2}
              alt="utxl_logo"
            />
          </div>
          <div className={"lg:w-[40%] w-[45%]"}>
            <Image
              className={"contrast-50 hover:filter-none cursor-pointer"}
              src={Logo3}
              alt="coyote_logo"
            />
          </div>
          <div className={"lg:w-[22%] w-[36%]"}>
            <Image
              className={"contrast-50 hover:filter-none cursor-pointer"}
              src={Logo7}
              alt="J.B.Hunt_logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogosFirstRow;
