import React from 'react'
import './Values.scss'
import Session from '../../components/Session/Session'
import { valuescontent } from '../../data'
import circular from '../../assets/images/Group23.png'
import ladder from "../../assets/images/Union2.png"
import useScrollToTop from '../../hooks/useScrollToTop'


export default function Values() {
    useScrollToTop()
    return (
        <div className="valuesInner">
            <div className="sphere">
                <img src={circular} alt=""></img>
            </div>
            {
                valuescontent.map((item) => {
                    return (
                        <Session key={item.id} title={item.title} content={item.content}></Session>
                    )
                })
            }
            <div className="ladder">
                <img src={ladder} alt=""></img>
            </div>
        </div>
    )
}
