import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import {poppins} from "@/app/fonts";
export default function MobileDrawer({isOpen, MobileMenuButton}){
    return(
        <div
            className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-2/5 w-full bg-[#CDCACA]/10 backdrop-blur-xl text-font transition-transform duration-300 transform ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >

            <div className='flex flex-col w-full'>
                <button onClick={MobileMenuButton} className='self-end mr-5 mb-16'>
                    <Image src='close.svg' alt='hamburger_icon' width={48} height={48} />
                </button>
                <ul className={`${poppins.className} flex flex-col justify-center items-center space-y-4 w-full text-white`}>
                    <Link href="/" passHref className='md:flex content-center no-underline margin mx-8 text-2xl hover:text-diane text-font'>
                        Home
                    </Link>
                    <Link href="/about" passHref className='md:flex content-center no-underline margin mx-8 text-2xl hover:text-diane text-font'>
                        About
                    </Link>
                    <a href="/Resume.pdf" className='md:flex content-center no-underline margin mx-8 text-2xl hover:text-diane' download>
                        Resume
                    </a>
                    <Link href="/work" passHref className='md:flex content-center no-underline margin mx-8 text-2xl hover:text-diane'>
                        Work
                    </Link>
                </ul>


            </div>

        </div>
    )
}