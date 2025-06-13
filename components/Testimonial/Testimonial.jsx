import useFetch from "@/hooks/useFetch"
import testimonialService from "@/services/testimonialService"
import Image from "next/image";

import Swiper from "swiper"

const Testimonial = ({ testimonials, pageSlider = 'page-slider' }) => {
    return (
        <div className={`swiper-container testimonials__slider ${pageSlider}`}>
            <div className="swiper-wrapper">
                {
                    testimonials.map((testimonial) => (
                        <div className="testimonials__slide swiper-slide" key={testimonial.id}>
                            <p>
                                {testimonial.description}
                            </p>
                            <div className="testimonials__author">
                                <Image src={testimonial.imagePath} alt={testimonial.fullName} className="testimonials__avatar" width={56} height={56} />
                                <cite className="testimonials__cite">
                                    <strong>{testimonial.fullName}</strong>
                                    <span>{testimonial.profession}</span>
                                </cite>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="swiper-pagination"></div>
        </div>
    )
}

export default Testimonial