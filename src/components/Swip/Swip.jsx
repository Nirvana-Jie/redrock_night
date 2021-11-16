import { Swiper} from "swiper/react";
import React from 'react'
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperCore, {Navigation, Pagination, Autoplay} from "swiper"
SwiperCore.use([Autoplay,Navigation,Pagination])
export default function Swip(props) {
    const {navigation,pagination,autoplay,showNum,children,autoStop,changeTime} = props 
    console.log(changeTime);
    return (
        <Swiper
        spaceBetween={10}
        slidesPerView={showNum?showNum:3}
        centeredSlides={true}
        slideToClickedSlide={true}
        loop={true}
        navigation={navigation?true:false}
        pagination={pagination?{
            pagination: true,
            clickable: true,

        }:false}
        autoplay={autoplay?{
            delay:Number(changeTime),
            disableOnInteraction: false,
            stopOnLastSlide: true,
            pauseOnMouseEnter:{autoStop}
        }:false}
        >
           {children}
      </Swiper>
    )
}
