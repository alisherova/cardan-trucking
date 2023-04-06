import React from "react";
import Button from "../button";

function AFirst(props) {
  return (
    <div className={"home_main mx-auto"}>
      <div className={"container"}>
        <div className={"md:w-2/3 font-semibold"}>
          <h1 className={"text-5xl md:text-7xl leading-tight text-center md:text-start"}>The best freight solutions</h1>
          <p className={"text-gray-300 text-lg mt-4 md:w-8/12"}>
            Transportation Service all over the U.S. with over 10 years of
            experience in this industry.We are reliable, efficient and safe.
          </p>
          <div className="text-center md:text-start">
            <Button classes={"px-12 mt-12 text-lg font-semibold"} gradient={true} text={"Get started"}/>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AFirst;
