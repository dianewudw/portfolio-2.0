'use client'
import DesktopNavBar from './desktopNavBar'
import MobileNavigation from "./mobileNavigation";
import Logo from './logo'
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
                <MobileNavigation isOpen={isOpen} MobileMenuButton={MobileMenuButton}/>
            </div>
        </>
    )
}