import React, { useEffect, useState } from "react"
import useStore from "../../../utils/useStore"
import { useObserver } from "mobx-react-lite"
import "./index.module.scss"
import {History} from "history"
interface CategorysType {
    history: History
 }
const Catelog: React.FC<CategorysType> = (props) => {
    let store = useStore();
    let { cart, categorys } = store;
    // let [ curIndex, changeNum ] = useState(0)
    // 模拟didMount
    useEffect(() => {
        // 获取数据
        cart.setList()
    },[]);

    return useObserver(() => <>
    <div className="catelog">
        <div className="top" onClick={()=>{cart.handleSearch(props)}}>
            <div className="searchInput">
            搜索商品，共239款好物
            </div>
        </div>
        <div className="bottom">
        <div className="left">
            {
                cart.list.map((item, index) => {
                    return <ul className={cart.curIndex === index ? 'active' : ''} key={index}><li className={cart.curIndex === index ? 'active' : ''} onClick={() => cart.changeNum(index,item.id)}>{item.name}</li></ul>
                })
            }
        </div>
        <div className="right">
          {
            cart.rightList.map((val,ind)=>{
              return <div className="categoryWrap" style={{backgroundImage: `url("${val.wap_banner_url}")`}} key={ind}>
                {val.front_name}
            </div>
            })
          } 
          {
             cart.rightList.map((v,i)=>{
               return <div className="categoryTitle" key={i}>
              <div></div>
               {v.name}分类
              <div></div>
            </div>
          })
          }
            <div className="subCategory">
                {
                    cart.listItem.map((item,index)=>{
                    return <div className="subCategoryItem" key={index} onClick={() => categorys.handleCategorys(item.id,props,index)}><img src={item.wap_banner_url} /><div className="subCategoryItemName">{item.name}</div></div>
                    })
                }
            </div>
        </div>
        </div>
        </div>
    </>)
}

export default Catelog;