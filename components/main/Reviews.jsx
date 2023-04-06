import Image from "next/image";
import React from "react";
import Star from "../../public/kardan/icons/Social Proof/Icon/Solid/Property 39.svg";
import Person1 from "../../public/kardan/main page/drivers review/Ellipse 1493.png";
import Person2 from "../../public/kardan/main page/drivers review/Ellipse 1493-4.png";
import Person3 from "../../public/kardan/main page/drivers review/Ellipse 1493-2.png";
import Person4 from "../../public/kardan/main page/drivers review/Ellipse 1493-3.png";
import Person5 from "../../public/kardan/main page/drivers review/Ellipse 1493-1.png";

function CardsSection() {
  return (
    <div className={"container py-10"}>
      <div className="text-center pt-16 md:pt-24">
        <p className={"text-md font-semibold text-violet-600 pt-2"}>Reviews</p>
        <p className={"text-4xl md:text-5xl font-semibold py-3"}>Drivers reviews</p>
      </div>
      <div 
      className={"flex flex-wrap gap-x-8 gap-y-11 justify-center lg:items-start pt-8 md:pt-11"}
      // className="grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center items-start gap-y-11 gap-4 pt-8 md:pt-11 pb-10 md:pb-16 text-white"
      >
        <div
          className={"card text-center p-6 pb-4 rounded-xl lg:w-[31%] md:w-[40%] sm:w-[70%] bg-zinc-950"}
        >
          <div className="card-header mt-4 mb-3">
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
          </div>
          <div className="card-body">
            “I have had the pleasure of working with Kings Mountain National
            Carries INC past two years and have found them all to be very
            professional. The best thing is they “do what they promise to do.”
          </div>
          <div className="card-footer pb-5">
            <div className="mt-4 mb-1">
              <Image src={Person1} alt={"Said_Hashi"} />
            </div>
            <p className={"mb-1 font-medium text-xs"}>Alan Fenner</p>
            <span className={"text-gray-400 text-xs"}>Landstar</span>
          </div>
        </div>
        <div
          className={"card text-center p-6 rounded-xl lg:w-[31%] md:w-[40%] sm:w-[70%] bg-zinc-950"}
        >
          <div className="card-header mt-4 mb-3">
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
          </div>
          <div className="card-body">
            “Working with Kings Mountain National Carries INC is fantastic
            because they’re so easy to work with. The office staff is friendly
            and really stays on top of things and their drivers are always
            courteous and professional.
          </div>
          <div className="card-footer pb-5">
            <div className="mt-8 mb-1">
              <Image src={Person2} alt={"Kosar_Omar"} />
            </div>
            <p className={"mb-1 font-medium text-xs"}>Joe Telez</p>
            <span className={"text-gray-400 text-xs"}> Emerge transportation</span>
          </div>
        </div>
        <div
          className={"card text-center p-6 rounded-xl lg:w-[31%] md:w-[40%] sm:w-[70%] bg-zinc-950"}
        >
          <div className="card-header mt-4 mb-3">
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
          </div>
          <div className="card-body">
            “I have been working with Kings Mountain National Carries INC for
            over 2 years now. I continue to work with them because of the
            excellent service, timely communication, dedicated sales team and
            efficiency.”
          </div>
          <div className="card-footer pb-3">
            <div className="mt-4  mb-1">
              <Image src={Person3} alt={"Brandon_Beckon"} />
            </div>
            <p className={"mb-1 font-medium text-xs"}>Katie Cash</p>
            <span className={"text-gray-400 text-xs"}>Silchuk Transportation</span>
          </div>
        </div>
        <div
          className={"card text-center p-6 rounded-xl lg:w-[32%] md:w-[40%] sm:w-[70%] bg-zinc-950 justify-self-center"}
        >
          <div className="card-header my-4">
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
          </div>
          <div className="card-body text-base">
            “The team at Kings Mountain National Carries INC has always been a
            pleasant and forward thinking partner when it comes to booking loads
            daily. Their drivers are consistently on time and easy to talk to,
            while their dispatchers are completely transparent and proactive
            when it comes resolving issues at any capacity. I highly recommend
            working with Kings Mountain National Carries INC.”
          </div>
          <div className="card-footer">
            <div className="mt-6 mb-1">
              <Image src={Person4} alt={"Kosar_Omar"} />
            </div>
            <p className={"mb-1 font-medium text-xs"}>Victor Cabrera</p>
            <span className={"text-gray-400 text-xs"}>Syfan Logistics</span>
          </div>
        </div>
        <div
          className={"card text-center p-6 rounded-xl lg:w-[32%] md:w-[40%] sm:w-[70%] bg-zinc-950 justify-self-end"}
        >
          <div className="card-header mt-4 mb-3">
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
            <Image src={Star} alt={"star-icon"} />
          </div>
          <div className="card-body mt-9 text-base">
            “Kings Mountain National Carries INC is the most dependable &
            reliable carrier we use. Their service record is impeccable. Their
            team drivers are courteous, dependable, hard working &amp; are on
            time consistently. In addition, the dispatch team is first rate.
            They are available 24/7 & always come thru on booked freight.A++”
          </div>
          <div className="card-footer pb-3">
            <div className="mt-11 mb-1">
              <Image src={Person5} alt={"Brandon_Beckon"} />
            </div>
            <p className={"mb-1 font-medium text-xs"}>Zack Campbell, Coyote Logistics</p>
            <span className={"text-gray-400 text-xs"}>Coyote Logistics</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsSection;
