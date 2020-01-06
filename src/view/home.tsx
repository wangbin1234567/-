import React from 'react'
import { NavLink } from 'react-router-dom'
function Home(){
    return <>
        
        <footer>
            <span><NavLink to="/main/home">首页</NavLink></span>
            <span><NavLink to="/main/special">专题</NavLink></span>
            <span><NavLink to="/main/classify">分类</NavLink></span>
            <span><NavLink to="/main/cart">购物车</NavLink></span>
            <span><NavLink to="/main/my">我的</NavLink></span>
        </footer>
    </>
}

export default Home