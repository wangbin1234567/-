import React from 'react'
import RouterView from './RouterView'
import Main from "../views/main/index"
import Home from "../views/main/home/index"
import CategoryDetail from "../views/categoryDetail/index"
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
            component: ()=><div><Home></Home></div>
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
    },
    //icon详情页面
    {
        path:`/categoryDetail`,
        component: CategoryDetail
    },{
        from: '*',
        to: '/login'
    }]
}