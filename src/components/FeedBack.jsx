import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import { FeedBackCard } from "./FeedBackCard.jsx";

export const FeedBack = () => {
    var settings = {
        dots : true ,
        speed : 300 ,
        slidesToShow : 2 ,
        slidesToScroll : 1 ,
        initialSlide : 0 ,
        infinite : true ,
        autoplay : true ,
        autoplaySpeed : 2000 ,
        centerPadding : "40px" ,
        centerMode : true ,
        responsive : [ {
            breakpoint : 1280 , settings : {

                slidesToShow : 2 ,
                slidesToScroll : 1 ,
                infinite : true ,
                dots : true ,
                autoplay : true ,
                autoplaySpeed : 1500 ,
                centerMode : true ,
            }
        } , {
            breakpoint : 1024 , settings : {
                slidesToShow : 1 ,
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
        <section className="feedback py-24" id="blog">
            <div className="lg:max-w-[1480px] m-auto">
                <div className="text-center lg:text-start flex flex-col gap-4 mb-4">
                    <h1 className="text-[40px] text-[#06241B] font-medium">Student <span
                        className="text-[#20B486]">Feedback</span></h1>
                    <p className="text-[#6D737A] text-xl">Various versions have evolved over the years, sometimes by
                        accident,</p>
                </div>
                <Slider { ... settings } className="py-8 w-full">
                    <FeedBackCard avatar="avatar1.svg" quotation="quotationMark.svg"/>
                    <FeedBackCard avatar="avatar2.svg" quotation="quotationMark.svg"/>
                    <FeedBackCard avatar="avatar3.svg" quotation="quotationMark.svg" />
                    <FeedBackCard avatar="avatar1.svg" quotation="quotationMark.svg"/>
                    <FeedBackCard avatar="avatar2.svg" quotation="quotationMark.svg"/>
                    <FeedBackCard avatar="avatar3.svg" quotation="quotationMark.svg" />
                </Slider>
            </div>
        </section>

    </> )
}