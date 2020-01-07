import React,{useEffect} from "react"
import {useObserver} from "mobx-react-lite";
import useStore from "../../utils/useStore"
//品牌组件
    const Brand: React.FC = () => {

        const store = useStore ()
        const {home} = store;
        
        useEffect( () => {
            home.getCarousel ()
        },[])
        
        return useObserver( () =>
            <div className="brand-box">
                <div className="brand-title">品牌制造商提供</div>
                <div className="brand-wrap">
                    {
                        home.brandList.map((item,index)=>{
                            return (
                                <div key={index} className="brand-item">
                                    <div className="brand-item-name">{item.name}</div>
                                    <div className="brand-item-minPrice">{item.floor_price}元起</div>
                                    <img src={item.new_pic_url} alt=""/>
                                </div>
                            )
                        })
                    }
                </div>
            </div> 
        )
    }
  export default Brand