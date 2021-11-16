import React from 'react'
import "./Session.scss"

export default function Session(props) {
    return (
        <div className="session">
            <span className="title">{props.title}</span>
            <div className="content" dangerouslySetInnerHTML={{ __html: props.content }}></div>
        </div>
    )
}
