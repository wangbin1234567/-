import Shppingcart from './shppingcart'
import Particulars from "./particulars"
import Topic from './modules/Topic'
import Cart from './cart'
import Categorys from "./categorys"
import GoodsSearch from "./goodsSearch"
export default {
    Shppingcart: new Shppingcart(),
    Particulars: new Particulars(),
    Topic: new Topic(),
      cart: new Cart(),
    categorys: new Categorys(),
    goodsSearch: new GoodsSearch()
}
