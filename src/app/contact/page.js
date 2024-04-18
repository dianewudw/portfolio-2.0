'use client'
import Image from 'next/image'
import {FormEvent, useState} from 'react'
import {poppins} from "@/app/fonts";
import NavigationBar from  "@/app/navigationBar/page";

export default function Contact(){
    const [email, setEmail] = useState({
        title:'',
        emailAddress: '',
        message: '',
    })

    return(
        <>
            <div className='flex flex-col h-full w-full p-5 lg:p-24 text-white'>
                <NavigationBar />
                <div class={` ${poppins.className} flex lg:mt-30 h-lvh lg:h-svh justify-center w-full flex-col sm:flex-row`}>
                    <div class='flex w-full flex-col h-full lg:h-4/5 lg:flex-row justify-center bg-white/[0.05] my-10 lg:my-20 rounded-lg py-10 rounded'>
                        <div className='relative flex h-full lg:w-1/2 w-full'>
                            <Image src='/Contact_page.png' alt='placeholder' fill={true} class='w-1/2 px-10 object-scale-down absolute' />
                        </div>
                        <form className='flex flex-col text-left text-white self-center h-full lg:p-20 lg:w-1/2 w-full p-10 m-3'>
                            <label className='flex flex-col w-full py-3'>
                                Title:
                            </label>
                            <input name='title' placeholder='Message Title' class='bg-white/10 rounded-lg w-full stroke-gray p-3 my-5' onChange={e => setEmail({ title: (e.target.value)})}/>
                            <label className='flex flex-col py-3 w-full'>
                                Email Address:
                            </label>
                            <input name='emailAddress' placeholder='Email Address...' className='bg-white/10 rounded-lg stroke-gray w-full p-3 my-5' onChange={e => { setEmail({emailAddress: e.target.value})}}/>
                            <label className='flex flex-col py-3 w-full'>
                                Write your message:
                            </label>
                            <textarea name='postContent' placeholder='Message...' className='bg-white/10 rounded-lg stroke-gray p-3 w-full my-5 h-80' onChange={e => { setEmail({message: e.target.value})}}/>
                            <a href='/submit' className='bg-button/80 py-2 rounded-full w-full mt-3 text-center my-5 hover:bg-white/20 hover:border hover:border-white/20'>Send</a>
                        </form>
                    </div>
                </div>
                <div className='flex flex-row justify-end my-2 lg:h-1/6'>
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
            </div>
        </>
    )
}