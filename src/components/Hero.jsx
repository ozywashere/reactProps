export const Hero = () => {
    return ( <>
        <section className="py-24 w-full bg-white" id="about">
            {/*Container*/ }
            <div className="lg:max-w-[1480px] max-w-[600px] mx-auto px-2 grid lg:grid-cols-2 gap-2">
                <div className="flex flex-col">
                    <p className="text-2xl text-[#20B486] font-medium py-2">START TO SUCCESS</p>
                    <h1 className="text-5xl md:text-[56px] leading-snug lg:leading-[72px] text-[#06241B] font-semibold py-2">Access To <span
                        className="text-[#20B486]">
                        5000+
                    </span> Courses from <span className="text-[#20B486]">
                        300
                    </span> Instructors & Institutions</h1>
                    <p className="text-lg text-[#6D737A]">Various versions have evolved over the years, sometimes by
                        accident,</p>
                    <form className="max-w-[700px]">
                        <div className="flex items-center mt-8 justify-between border  rounded-md p-4 shadow-md border-gray-100 input-box-shadow{">
                            <input type="search" placeholder="What do want to learn?" className="border-0 w-full bg-white focus:outline-0"/>
                            <img src="search.svg" alt="search" className="w-6 cursor-pointer"/>
                        </div>
                    </form>
                </div>
                    <img src="heroImg.png" alt="hero" className="w-full lg:order-last order-first h-[520px] object-fill"/>
            </div>
        </section>
    </> )
}