export const FeedBackCard = ({avatar,quotation}) => {


    return ( <div className="bg-white p-8 border border-black border-opacity-50 rounded-3xl shadow-2xl my-8 mx-6">
        <div className="flex gap-4 justify-between items-start ">
            <img src={avatar} className="w-20 h-20" alt=""/>
            <div className="flex-1 flex flex-col gap-2">
                <h1 className="text-2xl font-semibold ">
                    Jenny Wilson
                </h1>
                <p>
                    UI/UX Designer
                </p>
            </div>
            <img src={quotation} alt="quote.svg" className="h-8"/>
        </div>

        <p className="py-8">Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac
            habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
            Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac
            habitasse platea dictumst
        </p>

    </div> )
}