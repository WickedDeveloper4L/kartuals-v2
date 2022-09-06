
import {Pagination, Scrollbar, A11y } from 'swiper';
import './carousel.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';


import 'swiper/css';
import 'swiper/scss/effect-fade';
import 'swiper/css/pagination';
import Carousel1 from './carousel image/clay-banks-N3SsG7xR-Dg-unsplash.webp'
import Carousel2 from './carousel image/burgess-milner-OYYE4g-I5ZQ-unsplash.webp'
import Carousel3 from './carousel image/edwin-chen-wGStSPAvuIo-unsplash.webp'
import Carousel4 from './carousel image/markus-winkler-1lmPFQ7ZXeM-unsplash.webp'
import Carousel5 from './carousel image/martin-adams-zbPDL84kvRg-unsplash.webp'
import Carousel6 from './carousel image/mick-haupt-joHasPcobwg-unsplash.webp'


 const Carousel=() => {
  return (
    <Swiper
      // install Swiper modules
      modules={[EffectFade, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      effect='fade'
     
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      
    >
      <SwiperSlide ><img src={Carousel1} alt="" className='swiper__container'/></SwiperSlide>
      <SwiperSlide ><img src={Carousel2} alt="" className='swiper__container'/></SwiperSlide>
      <SwiperSlide ><img src={Carousel3} alt="" className='swiper__container'/></SwiperSlide>
      <SwiperSlide ><img src={Carousel4} alt="" className='swiper__container'/></SwiperSlide>
      <SwiperSlide ><img src={Carousel5} alt="" className='swiper__container'/></SwiperSlide>
      <SwiperSlide ><img src={Carousel6} alt="" className='swiper__container'/></SwiperSlide>

      
    </Swiper>
  );
};

export default Carousel