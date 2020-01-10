import React, { useEffect, useState } from "react"
import useStore from "../../utils/useStore"
import { useObserver } from "mobx-react-lite"
import "./index.module.scss"
import { History } from "history"
interface CategorysType {
  history: History
}
const Categorys: React.FC<CategorysType> = (props: any) => {
  let store = useStore();
  let { categorys } = store;
  // 模拟didMount
  useEffect(() => {
    categorys.setBrotherCategory(props.match.params.id)
    categorys.setGoodsList(props.match.params.id)
  }, []);

  return useObserver(() => <>
    <div className="noTabPageContent">
      <div className="header">
        <div className="left" onClick={() =>{categorys.handleLt(props)}}>&lt;</div>
        <div className="title">奇趣分类</div>
        <div className="right"></div>
      </div>
      <div className="tabWrap">
        <div className="box">
          {
            categorys.list.map((item, index) => {
              return <span key={index} className={categorys.curIndex === index ? 'active' : ''} onClick={() => categorys.handleGoodsList(index,item.id)}>{item.name}</span>
            })
          }
        </div>
      </div>
      <div className="wrap">
      {
        categorys.listItem.map((item, index) => {
          return <div className="categoryDetail" key={index}>
            <div>{item.name}</div>
            <div>{item.front_name}</div>
          </div>
        })
      }
      <div className="goodsList">
        {
          categorys.goodsList.map((item, index) => {
            return <div key={index} className="goodsItem">
              <div className="goodsItemImg">
                <img src={item.list_pic_url} />
              </div>
              <div className="goodsItemName">
                {item.name}
              </div>
              <div className="goodsItemPrice">
                ￥{item.retail_price}元
              </div>
            </div>
          })
        }
      </div>
      </div>
    </div>
  </>)
}

export default Categorys;

