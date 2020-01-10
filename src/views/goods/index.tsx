import React,{useEffect} from "react"
import { useObserver } from 'mobx-react-lite';
import {History} from "history"
// import { DetailsAll } from '../../utils/types';
// import { withRouter } from 'react-router-dom'
import useStore from "../../utils/useStore"
import { match } from "react-router";
interface HistoryType{
    history: History,
    // specificationList:DetailsAll
    location: History.LocationState,
    match: match<{id:string}>
}

const Goods: React.FC<HistoryType> = (props)=>{
    let { Particulars } = useStore()
    useEffect(()=>{
        Particulars.getData(props.match.params.id)
    },[])
    return useObserver(()=><>
    {
        console.log(Particulars.specifinfo.name)
        // console.log((Particulars.specificationList as DetailsAll).info.id)
    }
</>)
}
export default Goods