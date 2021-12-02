import React from 'react'
import "./Unopen.scss"
import groups from "../../assets/images/Groups.png"

export default function Unopen() {
    return (
        <div className="unopen-inner">
            <div className="groups">
                <img src={groups} alt=""></img>
            </div>
            <div className="unopen-content">该功能暂未开放，敬请期待</div>
        </div>

    )
}
