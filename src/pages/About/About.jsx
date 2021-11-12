import React from 'react'
import "./About.scss"
import {aboutContext} from "../../data"

export default function About() {
    return (
        <div className="aboutInner">
         {
             aboutContext.map((item) => {
                 return <div className="session">
                          <span className="title">{item.title}</span>
                          <div dangerouslySetInnerHTML={{__html:item.context}}></div>
                        </div>
             })
         }
        </div>
    )
}

