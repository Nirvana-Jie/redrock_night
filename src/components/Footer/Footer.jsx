import React from 'react'
import "./Footer.scss"
import {Link} from "react-router-dom"
import logo from "../../assets/images/logo.png"
import logo2 from "../../assets/images/bus.png"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer_content">
                <div className="footer-left">
                    <div className="logo">
                        <Link to="/">
                            <img alt="logo" src={logo}></img>
                        </Link>
                    </div>
                    <div className="line1"></div>
                    <div className="content1">与新世界对话<br/>为新技术发声</div>
                </div>
                <div className="footer-middle">
                    <Link>联系我们</Link>
                    <span>邮箱：hr@geeksummit.cn</span>
                    <Link>极客申请</Link>
                    <Link>极客咨询</Link>
                </div>
                <div className="footer-right">
                   <img src={logo2} alt=""></img>
                </div>
            </div>
            <div className="line2"></div>
            <div className="end">
                <span>COPYRIGHT&nbsp;@&nbsp;红岩网校工作站</span>
                <span> 主板:&nbsp;重庆邮电大学创新创业 x 红岩网校</span>
            </div>
        </footer>
    )
}
