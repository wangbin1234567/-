import React from 'react'
// 导入store
import Cart from './cart'
import Categorys from "./categorys"
import GoodsSearch from "./goodsSearch"
export default {
    cart: new Cart(),
    categorys: new Categorys(),
    goodsSearch: new GoodsSearch()
}