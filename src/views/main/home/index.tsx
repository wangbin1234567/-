import React from "react"
import {useObserver} from "mobx-react-lite";
//引入轮播图组件
import Banner from "../../../components/home/banner"
//引入icon组件
import Channel from "../../../components/home/channel"
//引入品牌组件
import Brand from "../../../components/home/brand"
//引入新品组件
import NewGoods from "../../../components/home/newGoods"
//引入人气组件
import HotGoods from "../../../components/home/hotGoods"
//引入专题组件
import Topic from "../../../components/home/topic"
//引入列表组件
import Category from "../../../components/home/category"

    const Example: React.FC = () => {       
        return useObserver( () => <>
           <Banner></Banner> 
           <Channel></Channel>
           <Brand></Brand>
           <NewGoods></NewGoods>
           <HotGoods></HotGoods>
           <Topic></Topic>
           <Category></Category>
        </>)
    }
  export default Example