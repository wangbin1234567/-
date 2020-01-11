export interface ItemType {
   id: number,
   name: string,
   keywords: null,
   front_desc: string,
   parent_id: number,
   sort_order: number,
   show_index: number,
   is_show: number,
   banner_url: string,
   icon_url: string,
   img_url: string,
   wap_banner_url: string,
   level: string,
   type: number,
   front_name: string,
   subCategoryList: []
}
export interface listItemType {
   id: number,
   name: string,
   keywords: null,
   front_desc: string,
   parent_id: number,
   sort_order: number,
   show_index: number,
   is_show: number,
   banner_url: string,
   icon_url: null,
   img_url: null,
   wap_banner_url: string,
   level: string,
   type: number,
   front_name: string
}
export interface GoodsList{
   id: number,
   name: string,
   list_pic_url: string,
   retail_price: number
}
export interface HotKeywordList{
   keyword: string,
   is_hot: number
}
export interface XHRType{
   errno: number,
   errmsg: string,
   data?: object
}