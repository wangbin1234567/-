import React from "react"
import {NavLink} from "react-router-dom"
function Main(){
        return (
             <footer>
                 <NavLink to="/main/home">首页</NavLink>
                 <NavLink to="/main/topic">专题</NavLink>   
                 <NavLink to="/main/catelog">分类</NavLink>
                 <NavLink to="/main/cart">购物车</NavLink>
                 <NavLink to="/main/mine">我的</NavLink>
             </footer> 
        )
}
export default Main