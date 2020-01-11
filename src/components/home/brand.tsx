import React,{useEffect} from "react"
import {useObserver} from "mobx-react-lite";
import useStore from "../../utils/useStore"
import {withRouter} from "react-router-dom"
import {History} from "history"
//品牌组件
    interface hisProps {
        history: History
    }
    const Brand: React.FC<hisProps> = (props) => {

        const store = useStore ()
        const {home} = store;
        
        useEffect( () => {
            home.getCarousel ()
        },[])
        let tabBrand = (id:number) =>{
            console.log(id)
        }
        return useObserver( () =>
            <div className="brand-box">
                <div className="brand-title">品牌制造商提供</div>
                <div className="brand-wrap">
                    {
                        home.brandList.map((item,index)=>{
                            return (
                                <div key={index} className="brand-item" onClick={()=>{
                                    tabBrand(item.id)
                                }}>
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
  export default withRouter(Brand)