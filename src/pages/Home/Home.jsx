import React from 'react'
import "./Home.scss"
import ButtonLink from '../../components/ButtonLink/ButtonLink'
import Swip from '../../components/Swip/Swip'
import GeekSharing from "../../components/GeekSharing/GeekSharing";
import randomSort from "../../api/randomSort"
import {geekSharing} from "../../data/index"
import { SwiperSlide } from "swiper/react";


export default function Home() {
    return (
        <div className="homeInner">
            <section className="introduction">
                <div className="session-inner">
                    <div>与新世界对话，为新技术发声</div>
                    <ButtonLink>报名参加极客峰会</ButtonLink>
                    <span>线上预约报名时间：2021年11月20号-27号</span>
                </div>
            </section>
            <section className="share-content">
                <div className="share-header">
                    <span>第一届极客分享</span>
                    <span>Geek Sharing</span>
                    <div className="line3"></div>
                </div>
                <div className="share-session">
                    <Swip showNum="3" autoplay={true} changeTime="3000">
                        {
                            randomSort(geekSharing).map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <GeekSharing title={item.title} name={item.name} from={item.from}></GeekSharing>
                                    </SwiperSlide>
                                )
                            })
                         }
                       </Swip>
                    </div>
            </section>
        </div>
    )
}
