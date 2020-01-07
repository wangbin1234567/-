import React from "react"
import {useObserver} from "mobx-react-lite";
//引入轮播图组件
import Banner from "../../../components/home/banner"
//引入icon组件
import Channel from "../../../components/home/channel"
//引入品牌组件
import Brand from "../../../components/home/brand"
    const Example: React.FC = () => {       
        return useObserver( () => <>
           <Banner></Banner> 
           <Channel></Channel>
           <Brand></Brand>
        </>)
    }
  export default Example