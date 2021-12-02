/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import "./About.scss"
import {aboutcontent} from "../../../data"
import Session from '../../../components/Session/Session'
import whom from "../../../assets/images/whom.png"
import useScrollToTop from '../../../hooks/useScrollToTop'

export default function About() {
    useScrollToTop()
    return (
        <div className="aboutInner">
        <div className="whom">
            <div className="whom-title">
                <img src={whom} alt=""></img>
            </div>
            <div className="whom-inner">
                <div>“我们是谁”这个问题，是一个非常抽象也可能非常具象的问题。从宏观且符合大众的认知的角度来回答，我们是极客峰会的运营方，我们是 学生&极客，不属于任何一方利益，我们只携极客峰会的初衷去为更多极客服务。</div>
                <div className="whom-context">
                    <p>我们是你，是极客，只不过是第一批站出来的极客。</p>
                    <p>未来的你，也是我们。</p>
                </div>
               
            </div>
        </div>
         {
             aboutcontent.map((item) => {
                 return <Session key={item.id} title={item.title} content={item.content}></Session>
             })
         }
        </div>
    )
}

