import React,{useEffect} from 'react'
import {ItemType} from "../utils/types"
import {observable, action, computed} from "mobx"
import axios from 'axios';

interface listNum {
    goodsCount:number,
    goodsAmount:number,
    checkedGoodsCount:number,
    checkedGoodsAmount:number
}
export default class Shppingcart{
    
    @observable
    list:ItemType[]=[]
    @observable
    listtotal:listNum={goodsCount:0,goodsAmount:0,checkedGoodsCount:0,checkedGoodsAmount:0}
    
    @action
    setList(list:ItemType[],listtotal:listNum){
        list.forEach(item=>{
            item.aaa=true
        })
        this.list=list
        this.listtotal=listtotal
       
        // console.log('this.list------------------', this.list)
    }
    @computed
    get shoppingFalg(){
        return this.list.every(item=>item.checked)
    }
    // @action
    // checkedAll(){

    // }
    @action
    setListTotal(listtotal:listNum){
        this.listtotal=listtotal
    }

    @action
    checketreal(id:number,checked:number){
        checked===1?checked=0:checked=1
        let params={
            isChecked:checked,
            productIds:id
        }
        console.log(params)
        axios.post('http://169.254.160.213:8888/cart/checked',params,{headers:{['x-nideshop-token']:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwiaWF0IjoxNTc4NDY3MzkyfQ.lgny3Bm0_Bh1WD71y7efEZeHUrBcntdQ5M_z8a2FQss'}}).then(res=>{
            console.log('res老骥伏枥', res)
            this.list=res.data.data.cartList
            this.listtotal=res.data.data.cartTotal
           
            
        })
    }
}
