import React,{useEffect} from "react"
import {useObserver} from "mobx-react-lite";
import useStore from "../../utils/useStore"
//分类dnv
    const Category: React.FC = () => {

        const store = useStore ()
        const {cate} = store;
        
        useEffect( () => {
           cate.getCategory ()
        },[])
        
        return useObserver( () =>(
            <div>分类dnv</div>
        ))
    }
  export default Category