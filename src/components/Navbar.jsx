import { RxHamburgerMenu , RxLockClosed } from "react-icons/rx";
import { useState , useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ScrollToTop } from "./ScrollToTop.jsx";

const links = [ {
    id : 1 , name : "Home" , url : "home"
} , {
    id : 2 , name : "About" , url : "#about"
} , {
    id : 3 , name : "Course" , url : "#course"
} , {
    id : 4 , name : "Blog" , url : "#blog"
} , {
    id : 5 , name : "Contact" , url : "#contact"
} ]
export const Navbar = () => {
    const [ isOpen , setIsOpen ] = useState ( false )
    const [ scroll , setScroll ] = useState ( false )


    const sticky = () => {
        if ( window.scrollY >= 80 ) {
            setScroll ( true )
        } else {
            setScroll ( false )
        }
    }
    useEffect ( () => {
        window.addEventListener ( "scroll" , sticky )
        return () => {
            window.removeEventListener ( "scroll" , sticky )
        }
    } )
    return ( <>
        <ScrollToTop/>
        <header className={`${scroll?"sticky z-10 shadow-md bg-white top-0 border-gray-200 border-b":"bg-transparent"}`} id="#home">
            <nav className="bg-white  py-6 h-[96px]">
                <div className="max-w-[1480px] flex flex-wrap justify-between mx-auto items-center">
                    <a href="/" className="h-6">
                        <img src="logo.svg" alt="logo" className="h-full"/>
                    </a>
                    <div className="items-center lg:flex hidden lg:order-2">
                        <a href="/"
                           className="py-3 px-6 flex items-center gap-2 font-medium text-[#6D737A] hover:bg-gray-100 rounded-md duration-500 transition-all">
                            <img src="lock.svg" className="h-6 w-6" alt="lock.svg"/>
                            <span>Login</span>
                        </a>
                        <a href="/" className="bg-[#20B486] px-6 py-3 rounded-md text-white font-medium">
                            Sign up for Free
                        </a>
                    </div>
                    <button className="lg:hidden ml-6" onClick={ () => setIsOpen ( ! isOpen ) }>
                        { isOpen ? <AiOutlineClose className="h-6 w-6"/> : <RxHamburgerMenu className="h-6 w-6"/> }
                    </button>
                    <div
                        className={ `${ isOpen ? "block z-10" : "hidden" } lg:flex justify-between items-center w-full lg:w-auto lg:order-1  bg-white` }>
                        <ul className="flex flex-col mt-16 lg:mt-0 font-medium lg:flex-row  justify-between ">
                            { links.map ( ( link ) => {
                                const { id , name , url } = link
                                return ( <li key={ id }>
                                    <a href={ url }
                                       onClick={ () => setIsOpen ( false )}
                                       className="text-[#6D737A] hover:text-[#20B486] py-3 px-6 font-medium text-lg block border-gray-200 hover:bg-gray-100 transition-all duration-500 rounded">
                                        { name }
                                    </a>
                                </li> )
                            } ) }
                        </ul>
                        <div className="flex flex-col lg:hidden pb-8 lg:pb-0 ">
                            <a href="/"
                               className="py-3 px-6 flex items-center gap-2 font-medium text-[#6D737A] mb-2 justify-between bg-transparent hover:bg-gray-100 hover:text-[#20B486] rounded-md transition-all duration-500">
                                <img src="lock.svg" className="h-6 w-6" alt="lock.svg"/>
                                <span>Login</span>
                            </a>
                            <a href="/"
                               className="bg-[#20B486] px-6 py-3 rounded-md text-white font-medium transition-all duration-500 text-center ">
                                Sign up for Free
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="absolute w-screen h-screen" onClick={
                () => setIsOpen ( false )
            }>
            </div>
        </header>
    </> )
}