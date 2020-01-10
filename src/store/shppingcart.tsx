import React from 'react'
import { ItemType } from "../utils/types"
import { observable, action, computed } from "mobx"
import { cartIndex, cartChecked, cartDelete, cartUpdate } from "../serveier/index"
interface checkedAllType {
}
interface listNum {
    goodsCount: number,
    goodsAmount: number,
    checkedGoodsCount: number,
    checkedGoodsAmount: number
}
export default class Shppingcart {
    @observable
    list: ItemType[] = []
    @observable
    listtotal: listNum = { goodsCount: 0, goodsAmount: 0, checkedGoodsCount: 0, checkedGoodsAmount: 0 }
    @action
    setList(list: ItemType[], listtotal: listNum) {
        list.forEach(item => {
            item.aaa = true
        })
        this.list = list
        this.listtotal = listtotal
    }
    @computed
    get shoppingFalg() {
        return this.list.every(item => item.checked)
    }
    @action
    async remove() {
        let removeList: any = []
        this.list.forEach(item => {
            if (!item.aaa) {
                removeList.push(item.product_id)
            }
        })
        let res = await cartDelete(removeList)
    }
    @action
    setListTotal(listtotal: listNum) {
        this.listtotal = listtotal
    }
    @action
    async checkedAll() {
        let arrNew: checkedAllType[] = []
        let checkedAllNumber = 0
        if (this.shoppingFalg) {
            checkedAllNumber = 0
            this.list.forEach(item => {
                arrNew.push(item.product_id)
            })
        } else {
            checkedAllNumber = 1
            this.list.forEach(item => {
                arrNew.push(item.product_id)
            })
        }
        let data = {
            isChecked: checkedAllNumber,
            productIds: arrNew
        }
        let res = await cartChecked(data)
        this.list = res.data.cartList
        this.listtotal = res.data.cartTotal
    }
    @action
    async cartIndex() {
        let res = await cartIndex()
        this.list = res.data.cartList
        this.listtotal = res.data.cartTotal
    }
    @action
    async checketreal(id: number, checked: number) {
        checked === 1 ? checked = 0 : checked = 1
        let data = {
            isChecked: checked,
            productIds: id
        }
        let res = await cartChecked(data)
        this.list = res.data.cartList
        this.listtotal = res.data.cartTotal
    }
    @action
    async addSum(additem: any, type: string) {
        console.log(this.list)
        this.list.forEach(item => {
            if (item.product_id === additem.product_id) {
                if (type === '+') {
                    item.number++
                } else {
                    if (item.number <= 1) {
                        return
                    }
                    item.number -= 1
                }
            }
        })
        let data = {
            goodsId: additem.goods_id,
            id: additem.id,
            number: additem.number,
            productId: additem.product_id
        }
        let res = await cartUpdate(data)
        this.list = res.data.cartList
        this.listtotal = res.data.cartTotal
    }
}
