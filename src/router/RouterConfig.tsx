import React from 'react'
import RouterView from './RouterView'
import Topic from '../views/main/topic/index'
import Details from '../views/details/index'
import More from '../views/more/index'
import ADDList from '../views/addList/index'
import Main from "../views/main/index"
import Cart from "../views/main/cart/index"
import Goods from "../views/goods/index"
console.log(Cart)
export default {
    routes: [{
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
        }, {
            path: '/main/catelog',
            component: () => <p>分类</p>
        }, {
            path: '/main/cart',
            component: Cart
        }, {
            path: '/main/mine',
            component: () => <p>我的</p>
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
        to: '/main/home'
    }]


}
// export default {
//     routes: [
//         {
//             path: '/login',
//             component: ()=><h3>Welcome to  登录页面</h3>
//         },
//         {
//             path: '/main',
//             component: (props:any)=>(<>
//                 <div className="App">
//                     <RouterView routes={props.routes}></RouterView> 
//                     <Main />
//                 </div>
//             </>),
//             children: [
//                 {
//                     path: '/main/home',
//                     component: ()=><div>首页</div>
//                 },
//                 {
//                     path: '/main/topic',
//                     component: Topic
//                 },
//                 {
//                     path: '/main/catelog',
//                     component: ()=> <div>分类</div>
//                 },
//                 {
//                     path: '/main/cart',
//                     component: ()=><div>购物车</div>
//                 },
//                 {
//                     path: '/main/mine',
//                     component: ()=><div>我的</div>
//                 }
//             ]
//         },
//         {
//             path: '/details',
//             component: Details
//         },
//         {
//             path: '/more',
//             component: More
//         },
//         {
//             path: '/ADDList',
//             component: ADDList
//         },
//         {
//             from: '*',
//             to: '/main/home'
//         }
//     ]