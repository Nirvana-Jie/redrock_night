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
                  <li><NavLink exact to="/" activeClassName="header-active" >峰会首页</NavLink></li>
                  <li><NavLink to="/about"  activeClassName="header-active">关于我们</NavLink></li>
                  <li><NavLink to="/values" activeClassName="header-active">极客价值观</NavLink></li>
                  <li><NavLink to="/share"  activeClassName="header-active">往届分享</NavLink></li>
                  <li><NavLink exact to="/faq" activeClassName="header-active">常见问题</NavLink></li>
              </ul>
           </div>
           <div className="message">
                <ButtonLink className="apply_button" to="/appointment">预约报名</ButtonLink>
                <ButtonLink className="apply_button" to="/apply">进入申请</ButtonLink>
           </div>
           
        </header>
    )
}
