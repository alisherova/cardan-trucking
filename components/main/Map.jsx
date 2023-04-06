import React from 'react'
import Image from 'next/image'
import map from '../../public/kardan/main page/map/United States map.svg'
import union from '../../public/kardan/main page/map/Union.png'
import progress from '../../public/kardan/main page/map/progress.png'
import truck from '../../public/kardan/main page/map/truck.png'


function Map() {
  return (
    <div className={"container text-center"}>
      <p className={'text-md font-semibold text-violet-500  pt-0 md:pt-7'}>About us</p>
      <div>
         <p className={'text-4xl md:text-5xl font-semibold pt-4 pb-6 md:pb-8'}>We`re a distributed team</p>
      </div>
      <p className={'text-xl font-normal mb-16'}>We have offices and teams all around the USA.</p>
      <Image  className={""} src={map} alt="United States map" />
      <div className={" grid grid-cols-1   md:grid-cols-2 xl:flex lg:gap-24 gap-16 text-start mt-12 md:mt-24"}>
         <div>
            <Image src={union} alt="truck" />
            <p className={'text-xl font-medium pt-4 pb-2'}>Clients</p>
            <p className={'text-lg font-normal pb-5 w-80'}>If you want us to serve you we will be more than happy to fulfill your needs.</p>
            <a className={'text-md font-medium text-violet-500'} href="">Learn more</a>
         </div>
         <div>
            <Image src={truck} alt="truck" />
            <p className={'text-xl font-medium pt-6 pb-2'}>Services</p>
            <p className={'text-lg font-normal pb-5 w-80'}>We work 24 hours a day / 7 days a week and provide the best service.</p>
            <a className={'text-md font-medium text-violet-500'} href="">Learn more</a>
         </div>
         <div>
            <Image src={progress} alt="truck" />
            <p className={'text-xl font-medium pt-4 pb-2'}>Career for drivers</p>
            <p className={'text-lg font-normal pb-5 w-80'}>We are always looking for hardworking and dedicated people to join.</p>
            <a className={'text-md font-medium text-violet-500'} href="">Learn more</a>
         </div>
      </div>
    </div>
  )
}

export default Map