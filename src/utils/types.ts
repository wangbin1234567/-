//购物车内容
export interface ItemType {
    checked: number;
    goods_id: number,
    goods_name: string,
    goods_sn: string,
    goods_specifition_ids: string,
    goods_specifition_name_value: string,
    id: number,
    list_pic_url: string,
    market_price: number,
    number: number,
    product_id: number,
    retail_price: number,
    session_id: string,
    user_id: number,
    aaa: boolean
}
//axios 数据
export interface XHRType {
    errno: number,
    errmsg: string,
    data?: object
}
//详情
export interface Names {
    [x: string]: any; // 用任意的string去索引Names，得到的结果都是any
    // y: number;
    [z: number]: number; // 数字签名的索引返回值一定要是字符串索引返回值的子类型
}



export interface DetailsAll{
    info:Detailsinfo
    gallery:Array<Detailsgallery>
    // attribute:Array<Detailsattribute>
    // userHasCollect:number
    // issue:Array<Detailsissue>
    comment:Detailscomment
    brand:Detailsbrand
    // productList:DetailsproductList
    // specificationList:[]
}
 interface Detailsinfo {
    id: number
    category_id: number
    goods_sn: string
    name: string
    brand_id: number
    goods_number: number
    keywords: string
    goods_brief: string
    goods_desc: string
    is_on_sale: number
    add_time: number
    sort_order: number
    is_delete: number
    attribute_category: number
    counter_price: number
    extra_price: number
    is_new: number
    goods_unit: string
    primary_pic_url: string
    list_pic_url: string
    retail_price: number
    sell_volume: number
    primary_product_id: number
    unit_price: number
    promotion_desc: string
    promotion_tag: string
    app_exclusive_price: number
    is_app_exclusive: number
    is_limited: number
    is_hot: number
}
interface Detailsgallery {
    id: number
    goods_id: number
    img_url: string
    img_desc: string
    sort_order: number
}
interface Detailsattribute {
    value: string
    name: string
}
interface Detailsissue {
    id: number
    goods_id: string
    question: string
    answer: string
}
interface Detailsbrand {
    id: number
    name: string
    list_pic_url: string
    simple_desc: string
    pic_url: string
    sort_order: number
    is_show: number
    floor_price: number
    app_list_pic_url: string
    is_new: number
    new_pic_url: string
    new_sort_order: number
}

interface DetailsproductList {
    id: number
    goods_id: number
    goods_specification_ids: string
    goods_sn: string
    goods_number: number
    retail_price: number
}
interface Detailscomment {
    count: number
    data:DetailsData
}
interface DetailsData {
    content: string
    add_time: string
    pic_list: Detailspiclist[]
}
interface Detailspiclist {
    id: number
    comment_id: number
    pic_url: string
    sort_order: number
}

