import { StarRating } from "./StarRating.jsx";


export const Card = ({course}) => {
    const {rating, title , price ,category, linkImg } = course
    const formatCurrency = ( value ) => {
        return value.toLocaleString ( "en-US" , {
            style : "currency" , currency : "USD"
        } )
    }
    return ( <>

        <div className="bg-white h-80 drop-shadow-md rounded-2xl p-4 flex flex-col lg:mb-8 mx-4" >
            <img
                src={ linkImg }
                alt={ title}
                className="w-full h-40 object-cover block rounded-2xl hover:scale-105 transition-transform duration-300"/>
            <div>
                <h4 className="font-2xl my-4 ">{
                    title?.length > 30 ? title.slice ( 0 , 30 ) + "..." : title
                }</h4>
                <div className="flex w-full mb-4">
                    <StarRating/>
                    <span className="ml-4">({rating})</span>
                </div>
            </div>
            <p className="mt-auto text-lg">{formatCurrency(price)}</p>
            <div className="absolute top-2 rounded-md px-[12px] py-[3px] bg-white bg-opacity-50 m-3 font-bold">
                {category}
            </div>
        </div>
    </> )
}