import { Card } from "./Card.jsx";
import { courses } from "../data/courses.js";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";


export const Courses = () => {
    var settings = {
        className : "center text-red-600" ,
        dots : true ,
        speed : 300 ,
        slidesToShow : 4 ,
        slidesToScroll : 1 ,
        initialSlide : 0 ,
        infinite : true ,
        autoplay : true ,
        autoplaySpeed : 1500 ,
        centerMode : true ,
        responsive : [ {
            breakpoint : 1280 , settings : {

                slidesToShow : 3 ,
                slidesToScroll : 1 ,
                infinite : true ,
                dots : true ,
                autoplay : true ,
                autoplaySpeed : 1500 ,
                centerMode : true ,
            }
        } , {
            breakpoint : 1024 , settings : {
                slidesToShow : 2 ,
                slidesToScroll : 1 ,
                infinite : true ,
                autoplay : true ,
                autoplaySpeed : 1500 ,
                centerMode : true ,
            }
        } , {
            breakpoint : 600 , settings : {
                slidesToShow : 1 ,
                slidesToScroll : 1 ,
                initialSlide : 1 ,
                autoplay : true ,
                autoplaySpeed : 1500 ,
                centerMode : true ,
            }
        } ]
    };


    return ( <>
        <section className="w-full lg:py-40 bg-white" id="course">
            <div className="lg:max-w-[1480px] max-w-[700px] mx-auto overflow-hidden flex flex-col  ">

                <div className="flex flex-col gap-4 mb-6">
                    <h1 className="text-[40px] text-[#06241B] font-medium">Most
                        Popular <span className="text-[#20B486]">Courses</span></h1>
                    <p className="text-xl font-normal text-[#6D737A] mb-4">Various versions have evolved over the years,
                        sometimes by accident,</p>
                </div>

                <Slider { ... settings } className="px-5 flex my-8">
                    { courses.map ( ( course ) => <Card course={ course }/> ) }
                </Slider>
            </div>
        </section>
    </> )
}