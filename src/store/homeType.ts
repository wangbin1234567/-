//banner
export interface bannerType {
    ad_position_id:number,
    content:string,
    enabled:number,
    end_time:number,
    id:number,
    image_url:string,
    link:string,
    pmedia_type:number,
    name:string,
}
//品牌
export interface brandLstType {
    app_list_pic_url:string,
    floor_price:number,
    id:number,
    is_new:number,
    is_show:number,
    list_pic_url:string,
    name:string,
    new_pic_url:string,
    new_sort_order:number,
    pic_url:string,
    simple_desc:string,
    sort_order:number
}
//列表
export interface categoryListType {
    id:number,
    name:string,
    goodsList:any
}
//icon
export interface channelType {
    icon_url:string,
    id:number,
    name:string,
    url:string,
    sort_order:number
}
//人气
export interface hotGoodsListType {
    goods_brief:string,
    id:number,
    list_pic_url:string,
    name:string,
    retail_price:number
}
//新品
export interface newGoodsListType {
    id:number,
    list_pic_url:string,
    name:string,
    retail_price:number,
}
//专题
export interface topicListType {
    avatar:string,
    content:string,
    id:number,
    is_show:number,
    item_pic_url:string,
    price_info:number,
    read_count:string,
    scene_pic_url:string,
    sort_order:number,
    subtitle:string,
    title:string,
    topic_category_id:number,
    topic_tag_id:number,
    topic_template_id:number
}
