'use client'
import Link from "next/link";
import { shrikhand } from './fonts'
import localFont from 'next/font/local'
import DesktopNavBar from "@/app/desktopNavBar";
import MobileNavBar from "@/app/mobileNavBar";
import Logo from './logo'
import MobileDrawer from './mobileDrawer'
import {useState} from "react";

//👇 Configure our local font object
export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false)
    function MobileMenuButton() {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className='flex w-full align-center h-20 lg:justify-between'>
                <Logo MobileMenuButton={MobileMenuButton}/>
                <DesktopNavBar/>
                <MobileDrawer isOpen={isOpen} MobileMenuButton={MobileMenuButton}/>
            </div>
            {/*<div className='lg:hidden md:flex contents-center rounded-b-lg bg-[#CDCACA]/60 backdrop-blur-sm bg-cover p-5 flex-col max-h-fit'>*/}
            {/*    <Link href="/about" passHref class='hidden md:flex content-center no-underline margin mx-8 text-2xl hover:text-diane text-gray'>*/}
            {/*        About*/}
            {/*    </Link>*/}
            {/*    <a href="/Resume.pdf" className='hidden md:flex content-center no-underline margin mx-8 text-2xl hover:text-diane text-gray' download>*/}
            {/*        Resume*/}
            {/*    </a>*/}
            {/*    <Link href="/work" passHref class='hidden md:flex content-center no-underline margin mx-8 text-2xl hover:text-diane text-gray'>*/}
            {/*        Work*/}
            {/*    </Link>*/}
            {/*    <div className='flex opacity-40 h-full w-full'>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}





