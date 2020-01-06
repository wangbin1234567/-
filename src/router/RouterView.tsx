import * as React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';

interface ItemType{
    path?: string,
    component?: any,
    from?: string,
    to?: any,
    children?: ItemType[]
}
interface PropType {
    routes: ItemType []
}
export default (props: PropType)=>{
    return <Switch>
        {
            props.routes.map((item: ItemType, index)=>{
                if (item.from === '*'){
                    return <Redirect key={index} to={item.to}/>
                }else if(item.from){
                    return <Redirect key={index} exact from={item.from} to={item.to}/>
                }

                return <Route key={index} path={item.path} render={(props)=>{
                    if (item.children){
                        /** 渲染组件，类似于<Tab/>
                         *  ...props 把路由信息展开传递下去
                         *  item.children 把子路由配置传递下去
                         */
                        return <item.component {...props} routes={item.children}/>
                    }else{
                        return <item.component {...props}/>
                    }
                }}></Route>
            })
        }
    </Switch>
}