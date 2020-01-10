import React,{useEffect} from "react"
import {useObserver} from "mobx-react-lite";
import useStore from "../../utils/useStore"
import {History} from "history"
    interface hisProp {
        history: History
    }
//icon列表详情
    const Category: React.FC<hisProp> = (props) => {

        const store = useStore ()
        const {cate} = store;
        //接收传递过来的id
        const id = props.history.location.state
        useEffect( () => {
           cate.getCategory (id)
        },[])
        
        return useObserver( () =>(
            <div>分类dnv</div>
        ))
    }
  export default Category