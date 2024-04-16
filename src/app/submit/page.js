'use client'
import NavigationBar from "@/app/navigationBar/page";
import Image from 'next/image'
import { abrilFatface, poppins } from "@/app/fonts";

export default function Submit(){
    return(
        <>
            <div class='flex flex-col h-full w-full p-5 lg:p-24 text-white'>
                <NavigationBar/>
                <h1 className={`${abrilFatface.className} flex self-center font-display pt-20 text-4xl md:text-5xl my-20`}>Email Sent!</h1>
                <div className='flex h-2/3 w-full relative overflow-scroll'>
                    <Image src='/email_sent_image.png' alt='email sent image' height={1080} width={1920} className='rounded-lg'/>
                </div>
            </div>
        </>

    )
}