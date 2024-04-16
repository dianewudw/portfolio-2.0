import NavigationBar from "@/app/navigationBar/page";
import Image from "next/image";

export default function KetoDiet(){
    return(
        <>
            <div className='flex lg:px-24 lg:pt-24 flex-col'>
                <NavigationBar/>
            </div>
            <div className='flex lg:px-24 flex-col overflow-scroll lg:pt-10'>
                <Image src='/KetoDiet_Intro.png' alt='KetoDiet_Intro' height={1080} width={1920} className='object-contain flex self-center'/>
                <Image src='/KetoDiet_MarketResearch.png' alt='KetoDiet_MarketResearch' height={1080} width={1920} className='object-contain flex self-center'/>
                <Image src='/KetoDiet_ResearchSynthesis.png' alt='KetoDiet_ResearchSynthesis' height={1080} width={1920} className='object-contain flex self-center'/>
                <Image src='/KetoDiet_Wireframes.png' alt='KetoDiet_Wireframes' height={1080} width={1940}className='object-contain flex self-center'/>
                <Image src='/KetoDiet_TestingIterations.png' alt='KetoDiet_TestingIteratons' height={1080} width={1940} className='object-contain flex self-center'/>
            </div>
            <div className='flex flex-row justify-end my-2 lg:h-1/6 lg:px-24 lg:py-10'>
                <div className='flex justify-center self-center px-5'>
                    <a href='https://linkedin.com/in/dianewudw' >
                        <Image src='/linkedin_dark_mode.svg' alt='linkedin icon' className='object-contains' height={40} width={40}/>
                    </a>
                </div>
                <div className='flex justify-center self-center'>
                    <a href='https://github.com/dianewudw'>
                        <Image src='/github_dark_mode.svg' alt='github icon' className='object-contains' height={40} width={40}/>
                    </a>
                </div>
            </div>
        </>
    )
}