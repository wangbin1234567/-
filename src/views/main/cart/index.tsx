import React, { useEffect } from "react"
import useStore from '../../../utils/useStore'
import RouteItem from "../../../components/routeItem"
import { useObserver } from 'mobx-react-lite';
// import { withRouter } from 'react-router-dom'
import {History} from "history"
import "./cart.css"
import {Icon} from "antd"
// import request from "../../../request/request"
// console.log('request-----------', request('/').then(res))
interface HistoryType{
    history: History
}
const Cart: React.FC<HistoryType> = (props) => {
    // interface AxiosType {
    //     url: string,
    //     method: string
    // }
    let { Shppingcart } = useStore()
    useEffect(() => {
        //获取默认数据
        Shppingcart.cartIndex()
    },[])
    
    return useObserver(() => <div className='tabPageContent'>
    <div className="maincont">
        <span><Icon type="star" />30天无忧退货</span>
        <span><Icon type="star" />48小时快速退款</span>
        <span><Icon type="star" />满88元免邮费</span>
    </div>
    <RouteItem/>
    </div>)
}
export default Cart