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
        
        return useObserver( () => <>
            
        </>)
    }
  export default Category