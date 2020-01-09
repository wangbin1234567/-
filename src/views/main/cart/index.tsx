import React, { useEffect } from "react"
import useStore from '../../../utils/useStore'
import RouteItem from "../../../components/routeItem"
import { useObserver } from 'mobx-react-lite';
import { withRouter } from 'react-router-dom'
import {History} from "history"
import "./cart.css"
import axios from "axios"
import {Icon} from "antd"
// import request from "../../../request/request"
// console.log('request-----------', request('/').then(res))
interface HistoryType{
    history: History
}
const Cart: React.FC<HistoryType> = (props) => {
    interface AxiosType {
        url: string,
        method: string
    }
    let { Shppingcart } = useStore()
    // console.log('store-----', cart)

    useEffect(() => {
        axios.get('http://169.254.160.213:8888/cart/index', { headers: { 'x-nideshop-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwiaWF0IjoxNTc4NDY3MzkyfQ.lgny3Bm0_Bh1WD71y7efEZeHUrBcntdQ5M_z8a2FQss" } }).then(res => {
            // if(res.)
            Shppingcart.setList(res.data.data.cartList,res.data.data.cartTotal)
            // console.log('res----', res.data.data.cartList)
            console.log('cart.list-------------', Shppingcart.list)
        })
        // axios.
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
export default withRouter(Cart)