import React,{useEffect} from "react"
import {useObserver} from "mobx-react-lite";
import useStore from "../../utils/useStore"
//新品组件
    const NewGoods: React.FC = () => {

        const store = useStore ()
        const {home} = store;
        
        useEffect( () => {
            home.getCarousel ()
        },[])
        
        return useObserver( () => 
            <div className="newGoods-box">
                <div className="newGoods-title">新品首发</div>
                <div className="newGoods-wrap">
                    {
                        home.newGoodsList.map( (item,index)=>{
                            return (
                                <div key={index} className="newGoods-item">
                                    <img src={item.list_pic_url} alt=""/>
                                    <div className="newGoods-item-name">{item.name}</div>
                                    <div className="newGoods-item-minPrice">￥{item.retail_price}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
  export default  NewGoods