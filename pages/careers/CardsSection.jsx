import Image from "next/image";
import React from "react";
import Star from "../../public/kardan/icons/Social Proof/Icon/Solid/Property 39.svg";
import Person1 from "../../public/kardan/careers/review 1.png";
import Person2 from "../../public/kardan/careers/review 2.png";
import Person3 from "../../public/kardan/careers/review 3.png";

function CardsSection() {
  return (
    <div className={"container"}>
      <div className="text-center sm:mt-20 mt-14 md:mt-32">
        <p
          className={
            "text-3xl sm:text-4xl lg:text-5xl font-semibold sm:pb-12"
          }
        >
          <p
            className={
              "text-violet-600 sm:text-base text-sm font-normal p-0 m-0"
            }
          >
            Reviews
          </p>
          Drivers reviews
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 pt-8 sm:pt-2 sm:pb-28 pb-8">
        <div
          className={"card bg-zinc-950 text-white text-center p-7 rounded-xl"}
        >
          <div className="card-header sm:mt-3 sm:mb-3 mb-2">
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
          </div>
          <div className="card-body sm:text-base text-sm">
            In my experience with Kings Mountain National Carriers have been
            blessing. I l`ve been so thankful and grateful to entire team, a
            very well respectful, kind, super friendly and dedicated dispatchers
            who is always available, I genuinenly proud and feel comfortable for
            doing what I like to do.
          </div>
          <div className="card-footer">
            <div className="mt-4 sm:mb-1">
              <Image src={Person1} alt={"Said_Hashi"} />
            </div>
            <p className="text-sm">Said Hashi</p>
            <span className={"text-gray-400 sm:text-sm text-xs"}>Driver</span>
          </div>
        </div>
        <div
          className={"card bg-zinc-950 text-white text-center p-7 rounded-xl"}
        >
          <div className="card-header sm:my-3 mb-2">
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
          </div>
          <div className="card-body sm:text-base text-sm mt-8">
            I really enjoy working for Kings Mountain. The office staff are very
            friendly and professional, they treat you like family. The pay is
            great, and the equipment is new, it`s a great company to work for.
          </div>
          <div className="card-footer">
            <div className="sm:mt-12 mt-4 sm:mb-1">
              <Image src={Person2} alt={"Kosar_Omar"} />
            </div>
            <p className={"text-sm"}>Kosar Omar</p>
            <span className={"text-gray-400 sm:text-sm text-xs"}>Driver</span>
          </div>
        </div>
        <div
          className={"card bg-zinc-950 text-white text-center p-6 rounded-xl"}
        >
          <div className="card-header sm:mt-4 sm:mb-3 mb-2">
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
          </div>
          <div className="card-body sm:text-base text-sm">
            As a driver for KMNC. I am pleased to know there is always 24 hour
            support for a dispatcher to respond at any of your needs. The work
            environment welcomes me staff with a friendly atmosphere. KMNC makes
            sure i have the hometime i need while I`m providing the financial
            support for my family.
          </div>
          <div className="card-footer">
            <div className="mt-4 sm:mb-1">
              <Image src={Person3} alt={"Brandon_Beckon"} />
            </div>
            <p className={"text-sm"}>Brandon Beckon</p>
            <span className={"text-gray-400 sm:text-sm text-xs"}>Driver</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsSection;
