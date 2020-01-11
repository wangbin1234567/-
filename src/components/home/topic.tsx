import React,{useEffect} from "react"
import {useObserver} from "mobx-react-lite";
import useStore from "../../utils/useStore"
import { Carousel, WingBlank } from 'antd-mobile';

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
                <WingBlank>
                    <Carousel className="space-carousel"
                    frameOverflow="visible"
                    cellSpacing={10}
                    slideWidth={0.8}
                    infinite={true}
                    >
                    {
                        home.topicList.map((item, index) => (                    
                            <img key={index}
                                src={item.item_pic_url}
                                alt=""
                                style={{height:'220.8px' }}
                            />                           
                        ))
                    }
                    </Carousel>
            </WingBlank>
            </div>
        )
    }
  export default Topic

  