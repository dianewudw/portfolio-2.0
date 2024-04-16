'use client'
import NavigationBar from  "@/app/navigationBar/page";
import Image from 'next/image'
import { abrilFatface, poppins } from "@/app/fonts";

export default function About(){
    return(
        <>
            <div class='flex flex-col h-svh w-full p-5 lg:p-24 text-white '>
                <NavigationBar/>
                <h1 className={`${abrilFatface.className} flex self-center font-display lg:my-20 text-4xl lg:text-6xl`}>About Me</h1>
                <div className='flex flex-col md:flex-row justify-center md:items-center w-full lg:h-4/5 h-screen rounded-lg bg-white/5 py-10'>
                    <div className='flex relative w-full lg:w-1/2 lg:self-center justify-center align-center overflow-hidden h-full' >
                        <Image src='/memoji.png' alt='Prof Pic' fill={true} class='flex object-contain rounded-full absolute'/>
                    </div>
                    <div className={` ${poppins.className} flex flex-col min-h-fit md:max-h-full md:w-1/2 md:justify-items-center text-center lg:text-start`}>
                        <p class='flex pt-4 text-xl md:text-2xl lg:p-10'>
                            Diane is a product designer and developer from Austin, Texas. Her interest in building cool stuff comes from a love of aesthetics without sacrificing function. This led her to begin a career in developing products, from developing haircare products for cosmetic giants to building microservices for unicorn start-ups.
                        </p>
                        <p class='flex pt-4 text-xl md:text-2xl lg:p-10'>
                            Currently, she's a consultant for a biotech startup company in the Bay Area. Providing expertise in product design, development and branding.
                        </p>
                        <p class='flex pt-4 text-xl md:text-2xl lg:p-10'>
                            Forever a thinker and tinkerer, she's always down to make things that make the world a better place.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-end my-2 lg:h-1/6 mt-5 px-5 lg:px-24 pb:5 lg:pb-10'>
                <div className='flex justify-center self-center px-5'>
                    <a href='https://linkedin.com/in/dianewudw' >
                        <Image src='/linkedin_dark_mode.svg' alt='linkedin icon' className='object-contains' height={40} width={40}/>
                    </a>
                </div>
                <div className='flex justify-center self-center px-5'>
                    <a href='https://github.com/dianewudw'>
                        <Image src='/github_dark_mode.svg' alt='github icon' className='object-contains' height={40} width={40}/>
                    </a>
                </div>
            </div>
        </>

    )
}