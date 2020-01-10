import React from "react"
import { action, computed, observable } from "mobx"
import { goodsDetail } from "../serveier/index"
import { Detailsinfo } from "../utils/types"
export default class Particulars {
    @observable
    specifinfo: Detailsinfo = {
        // info: {
            id: 0,
            category_id: 0,
            goods_sn: '',
            name: '',
            brand_id: 0,
            goods_number: 0,
            keywords: '',
            goods_brief: '',
            goods_desc: '',
            is_on_sale: 0,
            add_time: 0,
            sort_order: 0,
            is_delete: 0,
            attribute_category: 0,
            counter_price: 0,
            extra_price: 0,
            is_new: 0,
            goods_unit: '',
            primary_pic_url: '',
            list_pic_url: '',
            retail_price: 0,
            sell_volume: 0,
            primary_product_id: 0,
            unit_price: 0,
            promotion_desc: '',
            promotion_tag: '',
            app_exclusive_price: 0,
            is_app_exclusive: 0,
            is_limited: 0,
            is_hot: 0
        // }

    }

    @action
    async getData(id: string) {
        let res = await goodsDetail(id)
        console.log(res)
        this.specifinfo = res.data.info

    }
}
