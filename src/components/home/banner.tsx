import React,{useEffect} from "react"
import {useObserver} from "mobx-react-lite";
import useStore from "../../utils/useStore"
import { Carousel, WingBlank } from 'antd-mobile';
//轮播图组件
    const Banner: React.FC = () => {

        const store = useStore ()
        const {home} = store;
        
        useEffect( () => {
            home.getCarousel ()
        },[])
        
        return useObserver( () => 
        <WingBlank>
            <Carousel
                autoplay={true}
                infinite={true}               
                 >
                {
                    home.banner.map((item: any, index: number) => (
                        <img src={item.image_url}
                            alt=""
                            key={index}
                            style={{ width: '100%', verticalAlign: 'top', height:'350px'}}
                        />
                    ))
                }
            </Carousel>
        </WingBlank>
      )
    }
  export default Banner