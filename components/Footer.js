import Image from "next/image";
import Logo from '../public/kardan/logo.svg';
import Twitter_logo from '../public/kardan/icons/twitter/24/Outline.svg';
import Facebook_logo from '../public/kardan/icons/facebook/24/Outline.svg';
import Instagram_logo from '../public/kardan/icons/social media/24/Outline.svg';
import Link from "next/link";

function Footer() {
   return (
      <>
         <div className={"w-100 h-px bg-gray-700"}></div>
         <div className={"container lg:text-start text-center"}>
            <div className={" flex flex-wrap sm:flex-row flex-col lg:items-start items-center pt-4 sm:pb-16"}>
               <div className={"lg:order-first order-last lg:w-[25%] sm:w-[50%]"}>
                  <Link href={"/"}>
                     <Image src={Logo} alt={'Logo'} height={"88"} />
                  </Link>
               </div>
               <div className={"lg:w-[19%] sm:w-[50%]"}>
                  <div className={"sm:pb-5 pb-3"}>
                     <p className={"font-medium sm:text-lg text-base"}>Phone number</p>
                     <p className={"lg:text-lg sm:text-base text-sm text-gray-300 hover:opacity-50 cursor-pointer sm:pt-1"}>(704)-259-7744</p>
                  </div>
                  <div className={"lg:p-0 sm:pb-5 pb-3"}>
                     <p className={"font-medium sm:text-lg text-base"}>Fax</p>
                     <p className={"lg:p-0 sm:pb-5 pb-3 text-gray-300 lg:text-lg sm:text-base text-sm hover:opacity-50 cursor-pointer sm:pt-1"}>888-509-2189</p>
                  </div>
               </div>
               <div className={"lg:w-[36%] sm:w-[50%]"}>
                  <div className={"sm:pb-5 pb-3"}>
                     <p className={"font-medium sm:text-lg text-base"}>Main office</p>
                     <p className={"hover:opacity-50 text-gray-300 lg:text-xl sm:text-base text-sm cursor-pointer sm:pt-1"}>3901 Graham St, Charlotte, NC 28206</p>
                  </div>
                  <div>
                     <p className={"font-medium sm:text-lg text-base"}>Branch address</p>
                     <p className={"lg:p-0 sm:pb-5 pb-3 text-gray-300 lg:text-xl sm:text-base text-sm hover:opacity-50 cursor-pointer sm:pt-1"}>6100 Lake Ellenor Dr Orlando, FL 32809</p>
                  </div>
               </div>
               <div className={"lg:w-[20%] sm:w-[50%]"}>
                  <div className={"sm:pb-10 pb-3"}>
                     <p className={"font-medium sm:text-lg text-base"}>Email</p>
                     <p className={"hover:opacity-50 text-gray-300 lg:text-xl sm:text-base text-sm cursor-pointer sm:pt-1"}>safety@kmncarries.com189</p>
                  </div>
                  <ul className={'flex gap-4 lg:justify-start justify-center sm:pt-2'}>
                     <li>
                        <a href="">
                           <Image className={"hover:opacity-50 cursor-pointer"} src={Twitter_logo} alt="twitter-logo" />
                        </a>
                     </li>
                     <li>
                        <a href="">
                           <Image className={"hover:opacity-50 cursor-pointer"} src={Facebook_logo} alt="facebook-logo" />
                        </a>
                     </li>
                     <li>
                        <a href="">
                           <Image className={"hover:opacity-50 cursor-pointer"} src={Instagram_logo} alt="instagram-logo" />
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </>)
}

export default Footer;