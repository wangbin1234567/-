import React,{useEffect} from "react"
import "antd/dist/antd.css";
import { Carousel } from 'antd';
import {useObserver} from "mobx-react-lite";
import useStore from "../../utils/useStore"
//专题组件
    const Topic: React.FC = () => {

        const store = useStore ()
        const {home} = store;
        
        useEffect( () => {
            home.getCarousel ()
        },[])
    
        return useObserver( () =>
            <div className="topGoods-box">
                <div className="topGoods-title">专题精选</div>
                <Carousel dots={false}>
                    {
                        home.topicList.map( (item,index) => {
                            return (                            
                                <div key={index} className="topGoods-item">
                                    <img src={item.item_pic_url} alt=""/>
                                    <div className="topGoods-name">{item.subtitle}</div>
                                    <div className="topGoods-text">{item.title}</div>
                                </div>                                
                            )
                        })
                    }
                </Carousel>    
            </div>
        )
    }
  export default Topic