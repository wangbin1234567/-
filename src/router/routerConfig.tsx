import React from 'react'
import RouterView from './RouterView'
import Home from '../view/home'
import Index from '../view/home/index'
export default {
    routes: [
        {
            path: '/login',
            component: ()=><p>登陆页面</p>
        },
        {
            path: '/main',
            component: (props:any)=>(<>
                <div className="wrap-h">
                    <RouterView routes={props.routes}></RouterView>
                    <Home />
                </div>
            </>),
            children: [
                {
                    path: '/main/home',
                    component: ()=><div className="main"><Index></Index></div>
                },
                {
                    path: '/main/special',
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
                }
            ]
        },
        {
            from: '*',
            to: '/main/home'
        }
    ]
}