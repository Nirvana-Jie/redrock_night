import React from 'react'
import Swip from '../../../components/Swip/Swip'
import "./Faq.scss"
import {faq} from "../../../data"
import randomSort from "../../../api/randomSort"
import { SwiperSlide } from "swiper/react";
import ladder from "../../../assets/images/Union2.png"
import useScrollToTop from '../../../hooks/useScrollToTop'

export default function Faq() {
    useScrollToTop()
    return (
        <div className="faqInner">
             <p>极客Q&A</p>
             <Swip pagination={true} showNum="1" autoplay={true} autoStop={true} changeTime="5000">
                 {
                     randomSort(faq).map((item,index)=>{
                         return(
                             <SwiperSlide key={index} >
                                <div className="faq-box">
                                  <div className="faq-q">Q:{item.Q}</div>
                                  <div className="faq-a" dangerouslySetInnerHTML={{ __html:item.A}}></div>
                                </div>
                             </SwiperSlide>
                         )
                     })
                 }
             </Swip>
             <div className="ladder">
                <img src={ladder} alt=""></img>
            </div>

             
        </div>
    )
}
