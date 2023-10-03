import { BiArrowToTop , BiDownArrow } from "react-icons/bi";
import { useState , useEffect } from "react";

export const ScrollToTop = () => {
    const [ showButton , setShowButton ] = useState ( false );

    useEffect ( () => {
        window.addEventListener ( "scroll" , () => {
            if ( window.scrollY > 50 ) {
                setShowButton ( true );
            } else {
                setShowButton ( false );
            }
        } );
    } , [] );

    const scrollToTop = () => {
        window.scrollTo ( {
            top : 0 , behavior : "smooth"
        } );
    }
    return ( <>
            { showButton && <a href="#!" onClick={ scrollToTop }
                                    className="fixed bottom-4 right-4 z-50 bg-[#20B486] text-white rounded-md p-2 animate-bounce">
                <BiArrowToTop size={ 30 }/>
            </a>

            }
        </> )
}