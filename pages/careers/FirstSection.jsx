import Image from 'next/image'
import React from 'react'
import Truck3 from '../../public/kardan/careers/Rectangle 4.png'
function FirstSection() {
  return (
    <div className='container'>
      <div className="mt-8 lg:mt-20 mb-6 md:mb-10">
        <Image src={Truck3} alt={'truck_3'} className={'w-full'} />
      </div>
      <div>
        <p className="sm:pb-9 pb-5 md:text-5xl text-4xl font-medium lg:text-start text-center">Careers for drivers</p>
        <p className="text-gray-300 md:text-xl text-lg lg:text-start sm:text-center">We offer dedicated freight from biggest logisties companies all over the U.S:</p>
      </div>
    </div>
  )
}

export default FirstSection