// import React from 'react'
import {observable, action} from 'mobx'
import {bannerType,channelType,brandLstType,newGoodsListType,hotGoodsListType,topicListType,categoryListType} from "./homeType"
import {getCarousel} from "../api/home"
export default class HomeStore{

    @observable
    banner: bannerType[] = [] //轮播图
    @observable
    brandList: brandLstType[] = [] //品牌
    @observable
    categoryList: categoryListType[] = [] //列表
    @observable
    channel: channelType[] = []   //icon
    @observable
    hotGoodsList: hotGoodsListType[] = [] //人气
    @observable
    newGoodsList: newGoodsListType[] = [] //新品    
    @observable
    topicList: topicListType[] = [] //专题
    
    @action 
    async getCarousel () {
        const res: any = await getCarousel()
        //轮播图       
        this.banner = res.banner
        //品牌
        this.brandList = res.brandList
        //列表
        this.categoryList = res.categoryList
        //icon
        this.channel = res.channel
        //人气
        this.hotGoodsList = res.hotGoodsList
        //新品
        this.newGoodsList = res.newGoodsList     
        //专题
        this.topicList = res.topicList       
    }
}