import NavigationBar from "@/app/navigationBar/page";
import Image from 'next/image'
export default function EverHomeCare(){
    return(
        <>
            <div className='flex lg:px-24 lg:pt-24 flex-col'>
                <NavigationBar/>
            </div>
            <div className='flex lg:px-24 flex-col overflow-scroll lg:pt-10'>
                <Image src='/EHC_Introduction.png' alt='full_capstone_artfolio' height={1080} width={1920} className='object-contain flex self-center'/>
                <Image src='/EHC_Research.png' alt='full_capstone_artfolio' height={1080} width={1920} className='object-contain flex self-center'/>
                <Image src='/EHC_BusinesGoals.png' alt='EHC_BusinessGoals' height={1080} width={1920} className='object-contain flex self-center'/>
                <Image src='/EHC_branding.png' alt='full_capstone_artfolio' height={1080} width={1940}className='object-contain flex self-center'/>
                <Image src='/EHC_Low_Fi_Wireframes.png' alt='Wireframes_EHC' height={1080} width={1940} className='object-contain flex self-center'/>
                <Image src='/EHC_Mid_fi_Wireframes.png' alt='Wireframes_EHC' height={1080} width={1940} className='object-contain flex self-center'/>
                <Image src='/EHC_Style_Tile.png' alt='Wireframes_EHC' height={1080} width={1940} className='object-contain flex self-center'/>
                <Image src='/EHC_High_Fidelity_Wireframes.png' alt='Wireframes_EHC' height={1080} width={1940} className='object-contain flex self-center'/>
                <Image src='/EHC_Usability_Testing.png' alt='Wireframes_EHC' height={1080} width={1940} className='object-contain flex self-center'/>
                <Image src='/EHC_Iterations.png' alt='Wireframes_EHC' height={1080} width={1940} className='object-contain flex self-center'/>
                <Image src='/EHC_Final_Designs.png' alt='Final_Designs_EHC' height={1080} width={1940} className='object-contain flex self-center'/>

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