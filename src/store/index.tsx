// import React from 'react'
// 导入store
import Shppingcart from './shppingcart'
import Particulars from "./particulars"
import Topic from './modules/Topic'
import Cart from './cart'
import Categorys from "./categorys"
import GoodsSearch from "./goodsSearch"
import Home from "./home"
import Cate from "./category"
export default {
    Shppingcart: new Shppingcart(),
    Particulars: new Particulars(),
    Topic: new Topic(),
    cart: new Cart(),
    categorys: new Categorys(),
    goodsSearch: new GoodsSearch(),
    home: new Home(),
    cate: new Cate()
}
