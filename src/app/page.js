import Image from "next/image";
import NavigationBar from "@/app/navigationBar/page";
import {gentiumBookPlus} from "@/app/fonts";
import {poppins} from "@/app/fonts";
export default function Home() {
  return (
    <main className="flex min-h-screen p-5 lg:px-24 lg:pt-24">
      <div className="z-10 flex-col min-w-full min-h-full justify-between font-mono text-sm lg:flex">
          <NavigationBar/>
          <div className={`flex justify-between max-h-svh flex-col-reverse lg:flex-row lg:mt-50 mt-20 rounded-lg bg-white/[0.05] py-5 lg:py-0`}>
              <div className='flex lg:w-1/2 flex-col lg:mb-40 lg:mt-40 mx-3 text-center lg:text-start lg:ml-20'>
                  <div>
                      <p className={`${gentiumBookPlus.className} text-5xl lg:text-8xl text-font italic py-1`} > Hello, <br></br> My name is Diane </p>
                  </div>
                  <div className={`${poppins.className} flex font-body text-xl lg:text-3xl my-5 text-font`}>
                    <p>{`I'm a Product Designer & Developer based in Austin. I specialize in Responsive Web Design and Visual Development. Currently studying UX/UI at Design Lab.`}</p>
                  </div>
                  <div className='my-5'>
                      <a href='/contact' className={`${poppins.className} bg-button hover:bg-white/20 hover:border hover:border-white/20 text-white p-5 rounded-full lg:text-lg my-5`}>Contact Me</a>
                  </div>
              </div>
              <div className={`flex w-full h-96 lg:h-full lg:w-1/4 content-end relative flex-auto lg:self-end mb-10 lg:mb-0 rounded-full`}>
                  <Image src='/prof_pic_1.png' alt='profile pic' fill={true} className='flex absolute object-cover lg:rounded-br-lg' />
              </div>
          </div>

          <div className={`${poppins.className} flex bg-white/[0.05] my-10 lg:my-20 rounded-lg lg:h-auto w-justify-center flex-col lg:flex-row max-h-full lg:w-full`}>
              <div className='flex m-3 lg:ml-6 lg:my-6 rounded-lg bg-white/10 border-2 border-white/10 lg:w-1/3 flex-col'>
                  <div className='flex relative lg:h-48 lg:m-5 h-52'>
                      <Image src='/KetoDiet.png' alt='KetoDiet_Portfolio_Pic' fill={true} className='flex absolute object-contain'/>
                  </div>
                  <div className='flex p-5 flex-col justify-between items-center lg:items-start text-white'>
                      <p className='flex py-2 font-bold text-2xl w-full justify-center'>KetoDiet</p>
                      <p className='flex  py-2 w-full justify-center'>UX/UI Design</p>
                      <div className='flex items-center justify-center py-2 lg:w-full lg:flex-row flex-col'>
                          <a href='https://www.figma.com/proto/EJBe9X8t7cgG07k7AQ3D0v/KetoDiet?type=design&node-id=519-3721&t=ZEku7QSHNW2jCOt5-0&scaling=min-zoom&page-id=470%3A2861&starting-point-node-id=519%3A3721' className='flex bg-button px-10 py-3 rounded-full mx-2 my-3 lg:my-0 hover:bg-white/20 hover:border hover:border-white/20' >
                              Prototype
                          </a>
                          <a href='/work/ketodiet' className='flex text-white bg-button px-8 py-3 rounded-full mx-2 hover:bg-white/20 hover:border hover:border-b-white/20'>
                              Case Study
                          </a>
                      </div>
                  </div>
              </div>
              <div className='flex m-3 lg:my-6 rounded-lg bg-white/10 border-2 border-white/10 lg:w-1/3 flex-col max-w-full'>
                  <div className='flex relative lg:h-48  lg:my-5 h-52'>
                      <Image src='/EverHomeCare.png' alt='EHC_Portfolio_Pic' fill={true} className='flex absolute object-contain'/>
                  </div>
                  <div className={`${poppins.className} flex p-5 flex-col justify-between items-center lg:items-start text-white`}>
                      <p className='flex py-2 font-bold text-2xl w-full justify-center'>Ever Home Care</p>
                      <p className='flex py-2 w-full justify-center'>UX/UI Design, Branding, Software Development</p>
                      <div className='flex items-center justify-center py-3 lg:w-full lg:flex-row flex-col'>
                          <a href='https://www.figma.com/proto/E0i1yaM0HAkUNuX0qzhkSD/Ever-Home-Care?type=design&node-id=425-657&t=rHXlX4a8g4lBPJkC-0&scaling=min-zoom&page-id=359%3A244&starting-point-node-id=417%3A2641&show-proto-sidebar=1' className='flex bg-button px-10 py-3 rounded-full mx-2 my-3 lg:my-0 hover:bg-white/20 hover:border hover:border-white/20' >
                              Prototype
                          </a>
                          <a href='/work/everhomecare' className='flex text-white bg-button px-8 py-3 rounded-full mx-2 hover:bg-white/20 hover:border hover:border-white/20'>
                              Case Study
                          </a>
                      </div>
                  </div>
              </div>

              <div className='flex m-3 lg:mr-6 lg:my-6 rounded-lg bg-white/10 border-2 border-white/10 lg:w-1/3 flex-col max-w-full text-white'>
                  <div className='flex relative lg:h-48 lg:my-5 h-52'>
                      <Image src='/Artfolio.png' alt='Artfolio_Portfolio_Pic' fill={true} className='flex absolute object-contain'/>
                  </div>
                  <div className='flex p-5 flex-col justify-between items-center lg:items-start'>
                      <p className='flex py-2 font-bold text-2xl w-full justify-center'>Artfolio</p>
                      <p className='flex py-2 w-full justify-center'>UX/UI Design, Branding</p>
                      <div className='flex items-center justify-center py-4 lg:w-full lg:flex-row flex-col'>
                          <a href='https://www.figma.com/proto/ExbARABarm9eYIrwMjs64K/Digital-Wallet?page-id=665%3A6522&type=design&node-id=688-53177&viewport=198%2C435%2C0.03&t=xbUtB71lwZWCn4JQ-1&scaling=scale-down&starting-point-node-id=683%3A40469&show-proto-sidebar=1' className='flex bg-button px-10 py-3 rounded-full mx-2 my-3 lg:my-0 hover:bg-white/20 hover:border hover:border-white/20' >
                              Prototype
                          </a>
                          <a href='/work/artfolio' className='flex text-white bg-button px-8 py-3 rounded-full mx-2 hover:bg-white/20 hover:border hover:border-white/20'>
                              Case Study
                          </a>
                      </div>
                  </div>
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
    </main>
  );
}
