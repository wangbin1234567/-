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
//icon
export interface channelType {
    icon_url:string,
    id:number,
    name:string,
    url:string,
    sort_order:number
}
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