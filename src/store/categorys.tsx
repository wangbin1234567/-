import React from 'react'
import { observable, action } from 'mobx'
import axios from "axios"
import { listItemType, ItemType, GoodsList } from "../utils/type"
import { setBrotherCategory,setGoodsList,getGoodsList,getCurrentCategory } from '../service/index'
export default class CategorysStore {
    @observable
    list: listItemType[] = []
    @observable
    listItem: ItemType[] = []
    @observable
    goodsList: GoodsList[] = []
    @observable
    curIndex: number = 0
    @action
    handleCategorys(id: number, props: any, index: number) {
        props.history.push(`/categorys/${id}`)
        this.curIndex=index
    }
    @action
    async setBrotherCategory(id:number){
       let res=await setBrotherCategory(id)
       this.list=res.data.brotherCategory
       this.listItem = [res.data.currentCategory]
    }
    @action
    async setGoodsList(id:number) {
        let res=await setGoodsList(id)
        this.goodsList = res.data.goodsList
    }
    @action
    async handleGoodsList(index: number,id:number) {
        let res=await getGoodsList(id)
        this.goodsList=res.data.goodsList
        let res1=await getCurrentCategory(id)
        this.listItem = [res1.data.currentCategory]
        this.curIndex = index
    }
    @action
    handleLt = (props:any) => {
        props.history.push("/main/catelog")
      }
}