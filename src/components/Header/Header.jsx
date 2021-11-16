import React from 'react'
import "./Header.scss"
import logo from "../../assets/images/logo.png"
import {NavLink,Link} from "react-router-dom"
import ButtonLink from '../ButtonLink/ButtonLink'

export default function Header() {
   
    return (
        <header className="header">
           <div className="logo">
              <Link to="/">
                <img alt="logo" src={logo}></img>
              </Link>
           </div>
           <div className="links">
              <ul>
                  <li><NavLink exact to="/" >峰会首页</NavLink></li>
                  <li><NavLink to="/about">关于我们</NavLink></li>
                  <li><NavLink to="/values">极客价值观</NavLink></li>
                  <li><NavLink to="/share">往届分享</NavLink></li>
                  <li><NavLink exact to="/faq">常见问题</NavLink></li>
              </ul>
           </div>
           <div className="message">
                <ButtonLink className="apply_button">预约报名</ButtonLink>
                <ButtonLink className="apply_button">进入申请</ButtonLink>
           </div>
           
        </header>
    )
}
