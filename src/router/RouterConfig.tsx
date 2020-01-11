import React from 'react'
import RouterView from './RouterView'
import Topic from '../views/main/topic/index'
import Details from '../views/details/index'
import More from '../views/more/index'
import ADDList from '../views/addList/index'
import Main from "../views/main/index"
import Cart from "../views/main/cart/index"
import Goods from "../views/goods/index"
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
        component: () => <p>登陆页面</p>
    }, {
        path: '/main',
        component: (props: any) => (<>
            <div className="App">
                <RouterView routes={props.routes}></RouterView>
                <Main />
            </div>
        </>),
        children: [{
            path: '/main/home',
            component: () => <p>首页</p>
        }, {
            path: '/main/topic',
            component: Topic
        },{
            path: '/main/cart',
            component: Cart
        }, {
            path: '/main/mine',
            component: () => <div>我的</div>
        },{
            path: '/main/catelog',
            component: Catelog
        }]
    }, {
        path: "/goods/:id?",
        component: Goods
    },
    {
        path: '/details',
        component: Details
    },
    {
        path: '/more',
        component: More
    },
    {
        path: '/ADDList',
        component: ADDList
    }, {
        from: '*',
        to: '/login'
    }]


}