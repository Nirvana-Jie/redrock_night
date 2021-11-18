import React from 'react'
import "./GeekSharing.scss"
import Union from "../../assets/images/Union.png"

export default function GeekSharing(props) {
    return (
        <div className="sharing">
          <div className="sharing-intro">
             <p className="title">{props.title}</p>
             <div className="speaker">
               <img src={Union} alt=""></img>
               <span>{props.name}</span>
             </div>
             <div className="line4"></div>
             <div className="from">
                <p>{props.from}</p>
             </div>      
          </div>
        </div>
    )
}
