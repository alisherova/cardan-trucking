import Image from 'next/image'
import React from 'react'
import Truck from '../../public/kardan/about-us/Rectangle 4.png'
function FirstSection() {
  return (
    <div className={'container'}>
      <div className={'card'}>
        <div className={'card-header'}>
          <Image src={Truck} className={'w-full'} alt={'truck'} />
        </div>
        <div className={"card-body"}>
          <p className="md:text-5xl text-4xl font-semibold md:mt-12 mt-8 mb-6">About us</p>
          <p className={'text-gray-300 lg:text-lg text-base'}>We are proud our customer-driven, purpose -focused approach to knowledge solutions in supply chain. We put safety and security above all, we operate
            well-established network of assets, we hire resourceful and highly -skilled specialists who are passionate about providing premium service.
          </p>
          <p className={'mt-5 text-gray-300 lg:text-lg text-base'}>
            We are a vibrant growing company where service and customer satisfaction matters. We have beeen hauling loads with an excellent reputation for years with the biggest logistics in the U.S.A such as Amazon, UPS, FedEx, Uber Freight and USPS. We work with customers who have expedited needs and have no time for average service.
            Ensuring that our partners receive their freight exactly when and where they need it is our top priority and core value.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FirstSection