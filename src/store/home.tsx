// import React from 'react'
import {observable, action} from 'mobx'
import {bannerType,channelType,brandLstType} from "./homeType"
import {getCarousel} from "../api/home"
export default class HomeStore{

    @observable
    carouselList: bannerType[] = [] //轮播图
    iconList: channelType[] = []   //icon
    brandList: brandLstType[] = [] //品牌
    @action 
    async getCarousel () {
        const res: any = await getCarousel()
        console.log(res)
        //轮播图       
        this.carouselList=res.banner
        //icon
        this.iconList = res.channel
        console.log(this.iconList)
        this.brandList = res.brandList
        console.log(this.brandList)
    }

}