import React,{useEffect} from "react"
import "antd/dist/antd.css";
import { Carousel } from 'antd';
import {useObserver} from "mobx-react-lite";
import useStore from "../../utils/useStore"
//轮播图组件
    const Banner: React.FC = () => {

        const store = useStore ()
        const {home} = store;
        
        useEffect( () => {
            home.getCarousel ()
            console.log(home.carouselList,"...carouse")
        },[])
        
        return useObserver( () => <>
            <Carousel autoplay >
                {
                    home.carouselList.map( (item,index) => {
                        return (                            
                            <div key={index} className="carouse-box">
                                <img src={item.image_url} alt=""/>
                            </div>                                
                        )
                    })
                }
            </Carousel>    
        </>)
    }
  export default Banner