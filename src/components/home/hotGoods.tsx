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
        
        return useObserver( () => <>
            
        </>)
    }
  export default HotGoods