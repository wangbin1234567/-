import React from 'react'
import {HotKeywordList} from "../utils/type"
import {observable, action, computed} from 'mobx'
import axios from "axios"
import { setHotKeywordList } from '../service/index'
export default class CartStore{
    @observable
    list: HotKeywordList[] = []
    @observable
    listItem: Array<string> = []
    @observable
    str: string=""
    @action
    async setHotKeywordList(){
        let res=await setHotKeywordList()
        this.list=res.data.hotKeywordList
        this.listItem=res.data.historyKeywordList
    }
    @action
    handleInput(e:any){
      this.str=e.target.value
    }
    @action    
    handleEmpty(values:any){
       this.str=""
       values.current.value=""
    }
    @action
    handleLeft(props:any){
        props.history.push("/main/catelog")
    }
}