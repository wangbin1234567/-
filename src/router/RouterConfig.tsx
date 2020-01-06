import React from 'react'
import RouterView from './RouterView'
import Main from "../views/main/index"
export default {
    routes: [{
        path: '/login',
        component: ()=><p>登陆页面</p>
    },{
        path: '/main',
        component: (props:any)=>(<>
           <div className="App">
             <RouterView routes={props.routes}></RouterView> 
             <Main />
           </div>
        </>),
        children: [{
            path: '/main/home',
            component: ()=><p>首页</p>
        },{
            path: '/main/topic',
            component: ()=><p>专题</p>
        },{
            path: '/main/catelog',
            component: ()=><p>分类</p>
        },{
            path: '/main/cart',
            component: ()=><p>购物车</p>
        },{
            path: '/main/mine',
            component: ()=><p>我的</p>
        }]
    },{
        from: '*',
        to: '/login'
    }]
}