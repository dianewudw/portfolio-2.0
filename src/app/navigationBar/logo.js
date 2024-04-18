'use client'
import Image from "next/image";
import Link from "next/link";
import { shrikhand } from '../fonts'
import localFont from 'next/font/local'
import { useState } from 'react'

//👇 Configure our local font object
const saunde = localFont({ src: '../font/Saunde.otf' })
export default function Logo({ MobileMenuButton}){

    return(
        <>
            <div className="flex w-full justify-between items-center content-center font-header">
                <div className="lg:flex w-full flex-nowrap inline-flex items-center no-underline max-h-full ml-12 lg:ml-0">
                    <a href='/ ' className={`${saunde.className} text-4xl lg:text-5xl w-full text-white text-center lg:text-start hover:text-button`}>Diane Wu</a>
                    <Image src='Open.svg' alt='hamburger_icon' height={48} width={48} onClick={MobileMenuButton} className='lg:hidden'/>
                </div>
            </div>
        </>
    )
}