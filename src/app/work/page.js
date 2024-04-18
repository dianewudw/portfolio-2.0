import NavigationBar from "@/app/navigationBar/page";
import Image from 'next/image'
import {poppins, abrilFatface} from "@/app/fonts";
export default function Work(){
    return(
        <>
            <div className='flex max-h-full lg:h-svh w-full p-5 lg:p-24 flex-col'>
                <NavigationBar/>
                <h1 className={` ${abrilFatface.className} flex text-4xl lg:text-6xl self-center lg:pt-20 mt-10 mb-5 font-display text-font`}>Case Studies</h1>
                <div className={` ${poppins.className} flex bg-white/[0.05] mb-10 lg:my-20 rounded-lg lg:h-dvh justify-center flex-col lg:flex-row h-full text-white w-full`}>
                    <div className='flex m-3 lg:ml-6 lg:my-10 rounded-lg bg-white/10 border-2 border-white/10 lg:w-1/3 flex-col max-w-full'>
                        <div className='flex relative lg:h-1/2 lg:m-5 h-52 mx-2 lg:mx-0'>
                            <Image src='/KetoDiet.png' alt='KetoDiet_Portfolio_Pic' fill={true} className='flex absolute object-contain'/>
                        </div>
                        <div className='flex p-5 flex-col justify-between content-between items-center lg:items-start w-full'>
                            <p className='flex py-2 font-bold text-2xl w-full justify-center'>KetoDiet</p>
                            <p className='flex py-2 self-center'>UX/UI Design</p>
                            <div className='flex items-center justify-center py-2 lg:w-full lg:flex-row flex-col'>
                                <a href='https://www.figma.com/proto/EJBe9X8t7cgG07k7AQ3D0v/KetoDiet?type=design&node-id=519-3721&t=ZEku7QSHNW2jCOt5-0&scaling=min-zoom&page-id=470%3A2861&starting-point-node-id=519%3A3721' className='flex bg-button px-10 py-3 rounded-full mx-2 my-3 lg:my-0' >
                                    Prototype
                                </a>
                                <a href='/work/ketodiet' className='flex text-white bg-button px-8 py-3 rounded-full mx-2 my-3 lg:my-0'>
                                    Case Study
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='flex m-3 lg:my-10 rounded-lg bg-white/10 border-2 border-white/10 lg:w-1/3 flex-col max-w-full'>
                        <div className='flex relative lg:h-1/2 lg:m-5 h-52 mx-2 lg:mx-0'>
                            <Image src='/EverHomeCare.png' alt='EHC_Portfolio_Pic' fill={true} className='flex absolute object-contain'/>
                        </div>
                        <div className={`${poppins.className} text-white flex p-5 flex-col justify-between items-center lg:items-start w-full`}>
                            <p className='flex py-2 font-bold text-2xl w-full justify-center'>Ever Home Care</p>
                            <p className='flex py-2 align-center justify-center text-center w-full'>UX/UI Design, Branding, Software Development</p>

                            <div className='flex items-center justify-center py-3 lg:w-full lg:flex-row flex-col'>
                                <a href='https://www.figma.com/proto/E0i1yaM0HAkUNuX0qzhkSD/Ever-Home-Care?type=design&node-id=425-657&t=rHXlX4a8g4lBPJkC-0&scaling=min-zoom&page-id=359%3A244&starting-point-node-id=417%3A2641&show-proto-sidebar=1' className='flex bg-button px-10 py-3 rounded-full  mx-2 my-3 lg:my-0' >
                                    Prototype
                                </a>
                                <a href='/work/everhomecare' className='flex text-white bg-button px-8 py-3 rounded-full mx-2 '>
                                    Case Study
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='flex m-3 lg:my-10 lg:mr-6 rounded-lg bg-white/10 border-2 border-white/10 lg:w-1/3 flex-col max-w-full'>
                        <div className='flex relative lg:h-1/2 lg:m-5 h-52 mx-2 lg:mx-0'>
                            <Image src='/Artfolio.png' alt='Artfolio_Portfolio_Pic' fill={true} className='flex absolute object-contain'/>
                        </div>
                        <div className={`${poppins.className} text-white flex p-5 flex-col justify-between items-center lg:items-start w-full`}>
                            <p className='flex py-2 font-bold text-2xl w-full justify-center'>Artfolio</p>
                            <p className='flex py-2 justify-center w-full'>UX/UI Design, Branding</p>
                            <div className='flex items-center justify-center py-4 lg:w-full lg:flex-row flex-col'>
                                <a href='https://www.figma.com/proto/ExbARABarm9eYIrwMjs64K/Digital-Wallet?page-id=665%3A6522&type=design&node-id=688-53177&viewport=198%2C435%2C0.03&t=xbUtB71lwZWCn4JQ-1&scaling=scale-down&starting-point-node-id=683%3A40469&show-proto-sidebar=1' className='flex bg-button px-10 py-3 rounded-full  mx-2 my-3 lg:my-0' >
                                    Prototype
                                </a>
                                <a href='/work/artfolio' className='flex text-white bg-button px-8 py-3 rounded-full mx-2 '>
                                    Case Study
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex flex-row justify-end my-2 lg:h-1/6 px-5 pb-5 lg:px-24 pb:5 lg:pb-10'>
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