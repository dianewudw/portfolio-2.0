'use client'
import Link from "next/link";
import Logo from './logo'
import Image from 'next/image';
import localFont from "next/font/local";

import {poppins} from "@/app/fonts";
//👇 Configure our local font object
export default function DesktopNavBar(){
    return(
        <>
        <div>
            <div className='hidden lg:flex contents-center rounded-full bg-[#CDCACA]/20 backdrop-blur-sm bg-cover p-5'>
                <Link href="/" passHref className={`${poppins.className} hidden lg:flex content-center no-underline margin mx-8 text-2xl hover:text-[#523FFF] text-white `}>
                    Home
                </Link>
                <Link href="/about" passHref className={`${poppins.className} hidden lg:flex content-center no-underline margin mx-8 text-2xl hover:text-button text-white`}>
                    About
                </Link>
                <a href="/Resume.pdf" className={`${poppins.className} hidden lg:flex content-center no-underline margin mx-8 text-2xl hover:text-button text-white`} download>
                    Resume
                </a>
                <Link href="/work" passHref className={`${poppins.className} hidden lg:flex content-center no-underline margin mx-8 text-2xl hover:text-button text-white`}>
                    Work
                </Link>
            </div>
        </div>
        </>
    )
}