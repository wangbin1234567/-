import React from "react"
import { NavLink } from "react-router-dom"
import { Icon } from "antd"
import "antd/dist/antd.css"
function Main() {
    return (
        <footer>
            <NavLink to="/main/home">
                <div className="itemIcon"><Icon type="home" /></div>
                <div className="itemName">首页</div>
            </NavLink>
            <NavLink to="/main/topic">
                <div className="itemIcon"><Icon type="switcher" /></div>
                <div className="itemName">专题</div>
            </NavLink>
            <NavLink to="/main/catelog">
                <div className="itemIcon"><Icon type="appstore" /></div>
                <div className="itemName">分类</div>
            </NavLink>
            <NavLink to="/main/cart">
                <div className="itemIcon"><Icon type="shopping-cart" /></div>
                <div className="itemName">购物车</div>
            </NavLink>
            <NavLink to="/main/mine">
                <div className="itemIcon"><Icon type="user" /></div>
                <div className="itemName">我的</div>
            </NavLink>
        </footer>
    )
}
export default Main
