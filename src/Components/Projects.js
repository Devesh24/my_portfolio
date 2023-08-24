import React from "react";
import ProjectCard from "./ProjectCard";
import { myProjects } from "../data";
import {Swiper, SwiperSlide} from "swiper/react"
import {EffectCoverflow, Pagination, Navigation} from "swiper/modules"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Projects() {
  return (
    <>
      <div className="d-flex flex-column app py-5" id="projects">
        <h1 className="pb-5 heading">&lt;Projects&gt;</h1>
        <section className="projects_pc">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={2}
            coverflowEffect={
              {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5
              }
            }
            pagination={{el: '.swiper-pagination', clickable: true}}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true
            }}
            modules={[EffectCoverflow, Pagination,Navigation]}
            className="swiper_container d-flex flex-column justify-content-center"
          >
            <div>
          {myProjects.map((elem)=>{
            return <SwiperSlide><ProjectCard project={elem} key={elem.id}/></SwiperSlide>
          })}</div>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow"><i class="fa-solid fa-backward"></i></div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next slider-arrow"><i class="fa-solid fa-forward"></i></div>
          </div>
          </Swiper>
        </section>
        <section className="projects_mob">
        {myProjects.map((elem)=>{
            return <SwiperSlide><ProjectCard project={elem} key={elem.id}/></SwiperSlide>
          })}
        </section>
        <h1 className="pt-3 heading">&lt;/Projects&gt;</h1>
      </div>
    </>
  );
}
