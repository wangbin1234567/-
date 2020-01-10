import React from "react"
import { action, computed, observable } from "mobx"
import { goodsDetail } from "../serveier/index"
import { DetailsAll } from "../utils/types"
export default class Particulars {
    @observable
    specifinfo: DetailsAll = {
        info: {
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
        },
        gallery: [{
            id: 0,
            goods_id: 0,
            img_url: "",
            img_desc: "",
            sort_order: 0,
        }],
        brand: {
            id: 0,
            name: "",
            list_pic_url: "",
            simple_desc: "",
            pic_url: "",
            sort_order: 0,
            is_show: 0,
            floor_price: 0,
            app_list_pic_url: "",
            is_new: 0,
            new_pic_url: "",
            new_sort_order: 0
        },
        comment: {
            count: 0,
            data: {
                content: "",
                add_time: "",
                pic_list: [{
                    id: 0,
                    comment_id: 0,
                    pic_url: "",
                    sort_order: 0,
                }]
            }
        }
    }
    @action
    async getData(id: string) {
        let res = await goodsDetail(id)
        console.log(res)
        this.specifinfo = res.data

    }
}
