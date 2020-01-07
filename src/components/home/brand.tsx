import React,{useEffect} from "react"
import {useObserver} from "mobx-react-lite";
import useStore from "../../utils/useStore"
//轮播图组件
    const Banner: React.FC = () => {

        const store = useStore ()
        const {home} = store;
        
        useEffect( () => {
            home.getCarousel ()
            console.log(home.brandList,"....brand")
        },[])
        
        return useObserver( () => <>
            
        </>)
    }
  export default Banner