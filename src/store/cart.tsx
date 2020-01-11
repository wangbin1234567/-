import React from 'react'
import {ItemType,listItemType} from "../utils/type"
import {observable, action, computed} from 'mobx'
import axios from "axios"
import { setList,changeNum } from '../service/index'
export default class CartStore{
    @observable
    list: ItemType[] = []
    @observable
    rightList: ItemType[] = []
    @observable
    curIndex: number=0
    @observable
    listItem: listItemType[]=[]
    @action
    async setList(){
       let res=await setList()
       this.list = res.data.categoryList
       this.listItem=res.data.categoryList[0].subCategoryList
       this.rightList=[res.data.categoryList[0]]
       this.curIndex=0
    }
    @action
    async changeNum(index:number,id:number){
        let res=await changeNum(id)
        this.listItem=res.data.currentCategory.subCategoryList
        this.rightList=[res.data.currentCategory]
        this.curIndex=index
    }
    @action
    handleSearch=(props:any)=>{
        props.history.push("/goodsSearch")
    }
}