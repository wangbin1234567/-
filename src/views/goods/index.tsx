import React,{useEffect} from "react"
import { useObserver } from 'mobx-react-lite';
import ss from "../../utils/useStore"
const Goods: React.FC = ()=>{
    useEffect(()=>{
        
    },[])
    return useObserver(()=><>
    123
</>)
}
export default Goods