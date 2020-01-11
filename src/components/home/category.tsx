import React,{useEffect} from "react"
import {useObserver} from "mobx-react-lite";
import useStore from "../../utils/useStore"
//列表组件
    const Category: React.FC = () => {

        const store = useStore ()
        const {home} = store;
        
        useEffect( () => {
            home.getCarousel ()
        },[])
        
        return useObserver( () => 
            <div className="cateGory-box">
                {
                    home.categoryList.map((item:any,index:any)=>{
                        return (
                            <div className="cateGory-item" key={index}>
                                <div className="cateGory-name">{item.name}</div>
                                <div className="cateGory-wrap">
                                    {
                                        item.goodsList.map( (good:any,goodIndex:any)=>{
                                            return (
                                                <div className="good-item" key={goodIndex}>
                                                    <img src={good.list_pic_url} alt=""/>
                                                    <div className="good-item-name">{good.name}</div>
                                                    <div className="good-item-price">￥{good.retail_price}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }             
            </div>
        )
    }
  export default Category