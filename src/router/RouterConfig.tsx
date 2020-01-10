import React from 'react'
import RouterView from './RouterView'
import Main from "../views/main/index"
import Catelog from "../views/main/catelog/index"
import Categorys from "../views/categorys/index"  
import GoodsSearch from "../views/goodsSearch/index"  
export default {
    routes: [{
        path: "/goodsSearch",
        component: GoodsSearch
    },
    {
      path: "/categorys/:id",
      component: Categorys
     },
        {
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
            component: ()=><div>首页</div>
        },{
            path: '/main/topic',
            component: ()=><div>专题</div>
        },{
            path: '/main/catelog',
            component: Catelog
        },{
            path: '/main/cart',
            component: ()=><div>购物车</div>
        },{
            path: '/main/mine',
            component: ()=><div>我的</div>
        }]
    },{
        from: '*',
        to: '/login'
    }]
}