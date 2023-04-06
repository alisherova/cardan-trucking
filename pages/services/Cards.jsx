import React from "react";
import Image from "next/dist/client/image";
import Rectangle_1 from "../../public/kardan/services/Rectangle 4.png";
import Rectangle_2 from "../../public/kardan/services/Rectangle 4-1.png";
import Rectangle_3 from "../../public/kardan/services/Rectangle 4-2.png";

const Cards = () => {
  return (
    <div className={"container"}>
      <p className={"lg:text-5xl text-4xl font-medium sm:pb-14 pb-7 sm:pt-8  lg:text-start text-center"}>Services</p>
      <div className={"flex items-center lg:flex-row flex-col-reverse  lg:gap-20 xl:gap-40 gap-7"}>
        <div className={"flex-1"}>
          <p className={"lg:text-4xl text-2xl font-medium"}>Logistics</p>
          <p className={"text-gray-300 lg:text-lg text-base pt-4"}>
            Team of Dispatchers are always on their position to help our drivers
            with any issue regardless if it is about road problems, issues with
            facility or with Brokerage teams. We are always on the line with the
            drivers and brokers to be able to ease the work for everyone in our
            company. We work 24/7 and 365 days a year and provide the best and
            quickest service as well as support to our team members.
          </p>
        </div>
        <Image src={Rectangle_1} alt="Logistics" />
      </div>
      <div className={"flex items-center lg:flex-row flex-col-reverse lg:gap-20 xl:gap-32 gap-7 lg:py-28 py-12"}>
        <Image src={Rectangle_2} alt="Logistics" />
        <div className={"flex-1 order-first lg:order-last"}>
          <p className={"lg:text-4xl text-2xl font-medium"}>Safety first</p>
          <p className={"text-gray-300 lg:text-lg text-base pt-4"}>
            Our team is accompanying the load at all time, securing safety both,
            customer and Drivers who are actually doing the hardest job in our
            company. The safety of our drivers is the most important part of our
            work because nothing matters but life which is priceless. However at
            the same time we are assuring our customers to have their freight at
            given time safely. We are always in touch with our Truck providers
            that are Ryder and Penske, for any emergency case that may occur we
            have 24/7 support from them to help us quickly no matter where our
            trucks are. High qualified safety department members are providing
            an excellent fleet management to guarantee safety of our drivers and
            customers
          </p>
        </div>
      </div>
      <div className={"flex items-center lg:flex-row flex-col-reverse lg:gap-20 xl:gap-40 gap-7 pb-7"}>
        <div className={"flex-1"}>
          <p className={"lg:text-4xl text-2xl font-medium"}>Transportation</p>
          <p className={"text-gray-300 lg:text-lg text-base pt-4"}>
            The Logistics business is developing, so keeping steady over the
            most recent mechanical headways is important to flourish and
            develop. KMNC perceives the significance of fulfilling time-delicate
            delivery needs, with no space for blunder. By using the most
            developed GPS tracking, ELD, and the executives software by Samsara,
            you can feel settled realizing your shipment is being taken care of
            with the most extreme precision and artfulness. Furthermore, our
            clients can access the system to see where their freight is, with a
            live share system. When it comes to the most important part, hauling
            the load; our drivers are high qualified and trained in this
            business to ensure your product safety and on-time delivery. Our
            drivers are exceptionally specific and defensive about the loads
            they have in their trucks. They are confident, experienced, and
            educated in the transportation of a wide range of freight.
          </p>
        </div>
        <Image src={Rectangle_3} alt="Logistics" />
      </div>
    </div>
  );
};

export default Cards;
