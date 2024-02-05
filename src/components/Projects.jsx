// import Titleone *******************
import TitleOne from "../UI/TitleOne"

// Import Swiper React components ***********
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Import Testimonials data ***********
import { ProjectsData } from "../data/Data";

// Shape png
import quotepng from "../assets/quote.png"

// React Icon Previous <--
import { FaArrowLeft } from "react-icons/fa6";

// React Icon Next -->
import { FaArrowRightLong } from "react-icons/fa6";

export default function Projects() {
  const breakpoints = {
    0:{
      spaceBetween: 0,
      slidesPerView: 1,
    },
    600:{
      spaceBetween: 30,
      slidesPerView: 2,
    },
    1024:{
      spaceBetween: 60,
      slidesPerView: 3,
    },
    
  }
  
  return (
    <section id="Projects">
      <div className="container projects-container">
      <TitleOne titleSm={"Recent projects"} title={"My recent "} titleEx={'Projects'} className={"projects-title"} />
          <Swiper className="projects-wrapper"
          // spaceBetween={60}
          // slidesPerView={3}
          breakpoints={breakpoints}
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
            ProjectsData.map(({projectImage, category, title, info, projectLink}, index) => {
              return(
                <SwiperSlide key={index}>
                  <article className="projects-article">
                    <div className="projects-image">
                      <img src={projectImage} alt="projectImage" />
                    </div>
                    <p className="category">{category}</p>
                    <h5>{title}</h5>
                    <small>{info}</small>
                    <a href={projectLink}>View <FaArrowRightLong /></a>
                  </article>
                </SwiperSlide>
              )
            })
          }
          {/* Swiper navigation button */}
          <div className="projects-navigation-buttons">
            <button className="projects-button-prev-slide"><FaArrowLeft /></button>
            <button className="projects-button-next-slide"><FaArrowRightLong /></button>
          </div>
        </Swiper>

        <a href="" className="btn btn-danger Explore-btn">Explore more</a>
      </div>
    </section>
  )
}
