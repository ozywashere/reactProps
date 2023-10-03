import { SlGraduation } from 'react-icons/sl'
import { FiVideo } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";

export const Achievement = () => {
    return ( <>
        <section className="py-32 w-full">
            <div className="lg:max-w-[1480px] w-full m-auto max-w-[600px] grid lg:grid-cols-2">
                <div className="flex flex-col justify-center text-center lg:text-start">
                    <div className="text-center lg:text-start flex flex-col gap-4 mb-6">
                        <h1 className="text-[40px] text-[#06241B] font-public font-semibold ">Our <span
                            className="text-[#20B486]">Achievements</span></h1>
                        <p className="text-[#6D737A] text-xl mb-6">Various versions have evolved over the years,
                            sometimes
                            by accident,. </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className=" flex py-6 ">
                            <div className="p-4 bg-[#E9F8F3]  rounded-xl">
                                <SlGraduation
                                    className=" text-[#1A906B] " size={ 44 }/>
                            </div>
                            <div className="px-3">
                                <h3 className="text-black font-semibold text-3xl ">300</h3>
                                <p className="text-[#6D737A] text-xl font-normal">Instructor</p>
                            </div>
                        </div>
                        <div className="flex  py-6">
                            <div className="flex gap-6 bg-[#FFFAF5] rounded-xl bg-opacity-50 p-4">
                                <FiVideo size={ 44 }
                                         className="text-[#FFC27A]"/>
                            </div>
                            <div className="px-3">
                                <h3 className="text-black font-semibold text-3xl">10,000+</h3>
                                <p className="text-[#6D737A] text-xl font-normal">Video</p>
                            </div>
                        </div>
                        <div className="flex py-6">
                            <div className="p-4 bg-[#FFEEF0] rounded-xl">
                                <SlGraduation size={ 44 } className="text-[#ED4459] "/>
                            </div>
                            <div className="px-3">
                                <h3 className="text-black font-semibold text-3xl ">20,000+</h3>
                                <p className="text-[#6D737A] text-xl font-normal">Student</p>
                            </div>
                        </div>
                        <div className="flex py-6">
                            <div className="p-4 bg-[#F0F7FF] rounded-xl">
                                <HiOutlineUserGroup size={ 44 } className="text-[#0075FD] "/>
                            </div>
                            <div className="px-3">
                                <h3 className="text-black font-semibold text-3xl ">1,00,000+</h3>
                                <p className="text-[#6D737A] text-xl font-normal">User’s</p>
                            </div>
                        </div>
                    </div>
                </div>
               <div className=" flex items-center lg:justify-end justify-center lg:order-last order-first">
                   <img src="achievementImg.png"  className="h-[520px] max-w-full" />
               </div>
            </div>
        </section>
    </> )
}