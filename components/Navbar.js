import Image from "next/image";
import Logo from '../public/kardan/logo.svg';
import Link from "next/link";
import { useState } from "react";
import Menu from "../public/menu.svg";
import closeBtn from "../public/kardan/main page/closeBtn.png";
import { useRouter } from "next/router";
import Button from "./button";

function Navbar() {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    return (
        <>
            <div
                className={"md:px-[1.6rem] sticky top-0 z-50"}>
                <div className={"flex justify-between items-center mx-auto container"}>
                    <Link href={"/"}>
                        <div className={"w-2/5"}>
                            <Image src={Logo} alt={'Logo'} height={"88"} />
                        </div>
                    </Link>
                    <div className={"w-3/5"}>
                        <div onClick={toggle}>
                            <ul className={!open ? "p-0 md:flex items-center hidden m-0 justify-end" : "bg-gray-250 md:static absolute top-full w-full items-center left-0 md:gap-0 gap-6 flex md:flex-row flex-col pb-5 md:flex m-0 justify-end"}>
                                <li onClick={() => setOpen(false)} className={router.asPath === '/' ? 'font-bold mx-5' : 'mx-5'}>
                                    <Link href={"/"}>Home</Link>
                                </li>
                                <li onClick={() => setOpen(false)}
                                    className={router.asPath === '/about-us' ? 'font-bold mx-5' : 'mx-5'}>
                                    <Link href={"/about-us"}>About us</Link>
                                </li>
                                <li onClick={() => setOpen(false)}
                                    className={router.asPath === '/services' ? 'font-bold mx-5' : 'mx-5'}>
                                    <Link href={"/services"}>Services</Link>
                                </li>
                                <li onClick={() => setOpen(false)}
                                    className={router.asPath === '/careers' ? 'font-bold mx-5' : 'mx-5'}>
                                    <Link href={"/careers"}>Careers</Link>
                                </li>
                                <li onClick={() => setOpen(false)}
                                    className={router.asPath === '/clients' ? 'font-bold lg:ml-5 text-end' : 'lg:ml-5 text-end'}>
                                    <Link href={"/clients"}>Clients</Link>
                                </li>
                                <li onClick={() => setOpen(false)}
                                    className={router.asPath === '/contact' ? 'font-bold lg:ml-5 text-end' : 'lg:ml-5 text-end'}>
                                    <Link href={"/contact"}>Contacts</Link>
                                </li>
                                <li onClick={() => setOpen(false)}
                                    className={'font-bold lg:ml-5 text-end'}>
                                    <Button classes={"px-4"} gradient={true} text={"Fuel card"} />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div onClick={toggle} className={"w-[8%] md:hidden block text-right"}>
                        <div className={open ? "hidden" : "block"}>
                            <Image src={Menu} alt={'Menu'} />
                        </div>
                        <div className={open ? "block" : "hidden"}>
                            <Image width="20" height="20" src={closeBtn} alt={'close-button'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
