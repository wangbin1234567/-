import React,{useEffect} from "react"
import {useObserver} from "mobx-react-lite";
import useStore from "../../utils/useStore"
//人气组件
    const HotGoods: React.FC = () => {

        const store = useStore ()
        const {home} = store;
        
        useEffect( () => {
            home.getCarousel ()
        },[])
        
        return useObserver( () =>
            <div className="hotBoods-box">
                <div className="hotBoods-title">人气推荐</div> 
                <div className="hotBoods-wrap">
                    {
                        home.hotGoodsList.map( (item,index)=>{
                            return (
                                <div className="hotBoods-item" key={index}>
                                    <img src={item.list_pic_url} alt=""/>
                                    <div className="hotBoods-infos">
                                        <div className="hotBoods-item-name">{item.name}</div>
                                        <div className="hotBoods-item-info">{item.goods_brief}</div>
                                        <div className="hotBoods-item-price">￥{item.retail_price}</div>
                                    </div>
                                </div>  
                            )
                        })
                    }                   
                </div>
            </div>
        )
    }
  export default HotGoods