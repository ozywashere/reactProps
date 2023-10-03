export const Footer = () => {
    return ( <>
        <footer className="py-24 bg-white w-full">
            <div className='md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0'>
                <div className="col-span-2">
                    <img src="/logo.svg" className="h-6" alt="logo"/>
                    <h3 className="mt-10 text-2xl font-bold text-[#1B1D1F]">Contact Us</h3>
                    <h3 className="text-base font-semibold text-[#6D737A] py-2">
                        Call : +91 9876543210
                    </h3>
                    <p className="text-[#6D737A] text-base py-2">Praesent nulla massa, hendrerit vestibulum gravida in,
                        feugiat auctor
                        felis.</p>
                    <p className="text-[#363A3D] py-2">Email: example@mail.com</p>
                    <div className="flex gap-4 py-4 mt-auto">
                        <div className="bg-[#E9F8F3] p-[14px] rounded-md hover:drop-shadow-md  duration-500">
                            <img src="/social/facebook.svg" className="w-5 h-5" alt="facebook"/>
                        </div>
                        <div className="bg-[#E9F8F3] p-[14px] rounded-md hover:drop-shadow-md  duration-500">
                            <img src="/social/dribble.svg" className="w-5 h-5" alt="dribble"/>
                        </div>
                        <div className="bg-[#E9F8F3] p-[14px] rounded-md hover:drop-shadow-md  duration-500">
                            <img src="/social/linkedIn.svg" className="w-5 h-5" alt="linkedIn"/>
                        </div>
                        <div className="bg-[#E9F8F3] p-[14px] rounded-md hover:drop-shadow-md  duration-500">
                            <img src="/social/instagram.svg" className="w-5 h-5" alt="instagram"/>
                        </div>
                        <div className="bg-[#E9F8F3] p-[14px] rounded-md hover:drop-shadow-md duration-500">
                            <img src="/social/behance.svg" className="w-5 h-5  " alt="behance"/>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl font-bold'>Explore</h3>
                    <ul className='py-6 text-[#6D737A]'>
                        <li className='py-2'>Home</li>
                        <li className='py-2'>About</li>
                        <li className='py-2'>Course</li>
                        <li className='py-2'>Blog</li>
                        <li className='py-2'>Contact</li>

                    </ul>
                </div>
                <div>
                    <h3 className='text-2xl font-bold'>Category</h3>
                    <ul className='py-6 text-[#6D737A]'>
                        <li className='py-2'>Design</li>
                        <li className='py-2'>Development</li>
                        <li className='py-2'>Marketing</li>
                        <li className='py-2'>Business</li>
                        <li className='py-2'>Lifestyle</li>
                        <li className='py-2'>Photography</li>
                        <li className='py-2'>Music</li>

                    </ul>
                </div>
                <div className='max-[780px]:col-span-2'>
                    <h3 className='text-2xl font-bold'>Subscribe</h3>
                    <h3 className='py-2 text-[#6D737A]'>Praesent nulla massa, hendrerit <br></br> vestibulum gravida in,
                        feugiat auctor felis.</h3>
                    <form className='py-4'>
                        <input
                            className='bg-[#F2F3F4] p-4 w-full rounded'
                            placeholder='Email here'
                        />
                        <button
                            className='max-[780px]:w-full my-4 px-6 py-3 rounded-md bg-[#20B486] text-white font-medium'>Subscribe
                            Now
                        </button>

                    </form>


                </div>
            </div>


        </footer>
    </> )
}