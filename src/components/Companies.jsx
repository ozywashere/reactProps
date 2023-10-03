export const Companies = () => {
    return ( <>
        <section className="pt-[50px] pb-[78px] w-full">
            <div className="lg:max-w-[1480px] max-w-[600px] mx-auto text-center">
                <div className="text-center lg:text-start flex flex-col items-center mb-4">
                    <h1 className="md:text-4xl text-3xl font-bold text-[#536E96] leading-[54px] mb-4">Trusted
                        by
                        over 25,000 teams around the world.</h1>
                    <p className="text-xl text-[#536E96] font-normal leading-[36px] font-inter mb-3">Leading
                        companies use the same courses to
                        help employees keep their skills fresh.</p>
                </div>
                <div className="inline-flex  flex-wrap justify-center gap-8">
                    <img src="/icons/addroll.svg" alt="addroll"
                         className="w-40 h-9"/>
                    <img src="/icons/segment.svg" className="w-40 h-9" alt="segment"/>
                    <img src="/icons/sendgrid.svg" className="w-40 h-9" alt="sendgrid"/>
                    <img src="/icons/toast.svg" className="w-40 h-9" alt="toast"/>
                </div>
            </div>
        </section>
    </> )
}