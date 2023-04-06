import React from 'react'
import Button from '../../components/button'

function CareersSecondSection() {
    return (
        <div className={'container'}>
            <section className={'md:w-53 lg:pt-8'}>
                <p className={'md:text-4xl text-2xl font-medium md:mb-6'}>Job description</p>
                <p className={"text-gray-300 lg:text-lg text-base sm:my-7 my-4"}>We need a dedicated and reliable over-the-road (OTR) Truck Driver to join our fleet team.
                    You must be at least 21 years old, have a valid commercial driver`s license (CDL). We prefer
                    candidates with at least one year of OTR experience and the flexibility to take long haul
                    jobs. Some overnights are required.Once hired, you must pass a background check and drug test.
                </p>
            </section>
            <section className={'md:w-[60%]'}>
                <p className={'lg:text-4xl text-2xl font-medium sm:mt-16 mt-8 mb-3 md:mb-7'}>OTR truck driver duties and responsibilities:</p>
                <ul className={'text-gray-300 lg:text-lg text-base list-disc pl-5'}>
                    <li>Drive loads to their destination by the time determined in the contract</li>
                    <li>Follow all safety protocols while driving</li>
                    <li>Keep accurate documentation for all shipments</li>
                    <li>Maintain trucks to ensure they are running property</li>
                    <li>Ne in touch the dispatch team while on Duty</li>
                </ul>
            </section>
            <section className={'md:w-53'}>
                <p className={'lg:text-4xl text-2xl font-medium sm:mt-16 mt-8 mb-3 md:mb-7'}>Requirements</p>
                <ul className={'text-gray-300 lg:text-lg text-base'}>
                    <li>Applicants should have U.S. travel eligiblity and must have:</li>
                    <li>A valid CDL class A license </li>
                    <li>Verifiable 1 years experience</li>
                    <li>Winter mountain driving and reefer experience a define asset</li>
                    <li>Clean driving abstract</li>
                    <li>Clear criminal record</li>
                </ul>
                <Button classes={'bg-blue-600 sm:w-[70%] w-[45%] sm:py-3 py-2 mt-4 md:mt-8'} text={'Apply now'} />
            </section>
            <section className={'md:w-53'}>
                <p className={'lg:text-4xl text-2xl font-medium sm:mt-16 mt-8 mb-3 md:mb-8'}>Owner operators</p>
                <p className={'text-gray-300 sm:mt-7 lg:text-lg text-base'}>Have a truck and Ready to Roll just missing a Company name on your door?
                    We have companies that would love to get you moving! </p>
                <Button classes={'bg-blue-600 sm:w-[70%] w-[45%] sm:py-3 py-2 mt-4 md:mt-8'} text={'Apply now'} />
            </section>
        </div>
    )
}

export default CareersSecondSection