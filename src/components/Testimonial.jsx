// import Titleone *******************
import TitleOne from "../UI/TitleOne"

// Import Swiper React components ***********
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Import Testimonials data ***********
import { TestimonialsData } from "../data/Data";

// Shape png
import quotepng from "../assets/quote.png"

// React Icon Previous <--
import { GoArrowLeft } from "react-icons/go";

// React Icon Next -->
import { GoArrowRight } from "react-icons/go";

export default function Testimonial() {
  return (
    <section id="Testimonials">
      <div className="container testimonials-container">
      <TitleOne titleSm={"What my colleagues say"} title={"Testimonial"} className={"Testimonial-title"} />
          <Swiper className="testimonial-wrapper"
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          modules={[Navigation]}
          navigation = {
            {
            prevEl: '.button-prev-slide',
            nextEl: '.button-next-slide'
          }
          }
        >
          {
            TestimonialsData.map(({testText, name, info}, index) => {
              return(
                <SwiperSlide key={index}>
                  <article className="testimonial-article">
                    <p className="test-text">{testText}</p>
                    <div className="em-div"></div>
                    <h5>{name}</h5>
                    <small>{info}</small>
                  </article>
                </SwiperSlide>
              )
            })
          }
          {/* Swiper navigation button */}
            <div className="navigation-buttons">
            <button className="button-prev-slide"><GoArrowLeft /></button>
            <button className="button-next-slide"><GoArrowRight /></button>
            </div>
            <div className="quote-png"><img src={quotepng} alt="quotes" /></div>
        </Swiper>
      </div>
    </section>
  )
}
