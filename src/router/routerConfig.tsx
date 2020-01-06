import React from 'react'
import RouterView from './RouterView'
import Home from "../views/main/home/index"
export default {
    routes: [{
        path: '/login',
        component: ()=> <p>登录</p>
    },{
        path: '/main',
        component: (props:any)=>(<>
            <p>主页面</p>
            <RouterView routes={props.routes}></RouterView>
        </>),
        children: [{
            path: '/main/home',
            component: ()=><Home></Home>
        },
        {
            path:'/main/special',
            component: ()=><p>专题</p>
        },
        {
            path: '/main/classify',
            component: ()=><p>分类</p>
        },
        {
            path: '/main/cart',
            component: ()=><p>购物车</p>
        },
        {
            path: '/main/my',
            component: ()=><p>我的</p>
        }]
    },{
        from: '*',
        to: '/main'
    }]
}