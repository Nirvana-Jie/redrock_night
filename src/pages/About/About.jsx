/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import "./About.scss"
import {aboutcontent} from "../../data"
import Session from '../../components/Session/Session'

export default function About() {
    return (
        <div className="aboutInner">
        <div className="whom">
            <span>//我们是谁</span>
            
        </div>
         {
             aboutcontent.map((item) => {
                 return <Session key={item.id} title={item.title} content={item.content}></Session>
             })
         }
        </div>
    )
}

