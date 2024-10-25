import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'

import './Protofolio.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SwiperrB } from '../Swiper/SwiperButton';


export default function App() {
  return (
    <div className='Container' id='portfolio'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide> <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide> <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide> <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
    
      </Swiper>
    </div>
  );
}

