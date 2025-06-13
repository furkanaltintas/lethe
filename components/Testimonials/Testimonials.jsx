import useFetch from "@/hooks/useFetch"
import Testimonial from "../Testimonial/Testimonial"
import testimonialContentService from "@/services/testimonialContentService"

import Swiper from "swiper"

const Testimonials = () => {
    const {
        data: testimonialContent,
        loading: testimonialLoading,
        error: testimonialError,
        refetch: testimonialRefetch
    } = useFetch(() => testimonialContentService.get());

    if (testimonialLoading) return null;
    if (testimonialError) return null;

    return (
        <section className="s-testimonials">

            <div className="s-testimonials__header row row-x-center text-center">
                <div className="column xl-8 lg-12">
                    <p className="text-pretitle">
                        {testimonialContent.title}
                    </p>
                    <h3>
                        {testimonialContent.displayTitle}
                    </h3>
                </div>
            </div>

            <div className="row s-testimonials__content">
                <div className="column xl-12 testimonials">
                    <Testimonial />
                </div>
            </div>
        </section>
    )
}

export default Testimonials