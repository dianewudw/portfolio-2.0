import { useState } from 'react'
import MobileDrawer from './mobileDrawer'
import Link from "next/link";
export default function MobileNavBar({isOpen, MobileMenuButton}){
    return(
        <>
            <MobileDrawer isOpen={isOpen} mobileMenuButton={MobileMenuButton}/>
        </>
    )
}