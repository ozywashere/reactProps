export const Cta = () => {
    return ( <>
        <section className="py-24 bg-[#E9F8F3B2] w-full">
            <div className="lg:max-w-[1480px] m-auto max-w-[600px] grid lg:grid-cols-2 items-center">
                <div className="flex items-center ">
                    <img className="w-[500px] object-cover" src="ctaImg.png" alt="cta"/>
                </div>
                <div className="inline-flex flex-col justify-center items-center lg:items-start gap-12 w-[534px]">
                    <div className="flex flex-col">
                        <h1 className="text-center text-[#06241B] font-semibold text-[40px] leading-tight lg:text-start mb-4">Join <span
                            className="text-[#20B486]"> World's largest</span> learning platform today</h1>
                        <p className="text-[#06241B] text-2xl">Start learning by registering for free</p>
                    </div>

                    <button className="bg-[#20B486] text-white py-3 px-6 rounded-md font-medium text-base">Sign up for
                        Free
                    </button>


                </div>

            </div>
        </section>
    </> )
}