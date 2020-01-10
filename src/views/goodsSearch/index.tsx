import React, { useEffect, useRef } from "react"
import useStore from "../../utils/useStore"
import { useObserver } from "mobx-react-lite"
import "./index.module.scss"
import {History} from "history"
import { Icon } from "antd"
import "antd/dist/antd.css"
interface CategorysType {
    history: History
 }
const GoodsSearch: React.FC<CategorysType> = (props:any) => {
    let store = useStore();
    let { goodsSearch } = store;
    let values=useRef(null)
    // 模拟didMount
    useEffect(() => {
       goodsSearch.setHotKeywordList()
    },[]);

    return useObserver(() => <>
        <div className="goodsSearch">
           <div className="searchFix">
             <div className="goBack" onClick={()=>{goodsSearch.handleLeft(props)}}>
                <Icon type="left" />
             </div>
             <div className="icon">
                <Icon type="search" />
             </div>   
             <input placeholder="520元礼包抢先领" className="searchInput" onChange={(e)=>{goodsSearch.handleInput(e)}} ref={values} />
             <div className="cancelSearch" onClick={()=>{
                  goodsSearch.handleEmpty(values)            
             }}>
                 取消
             </div>
           </div>
           {goodsSearch.str?""
           :<div className="searchMsg">
               <div className="title">
                 <span>历史记录</span>
                 <span><Icon type="delete" /></span>
               </div>
               <div className="listWrap">
                   {
                        goodsSearch.listItem.map((item,index)=>{
                            return <button key={index}>
                                {item}
                            </button>
                        })
                   }  
               </div>
           </div>
           }
           {goodsSearch.str?""
           :<div className="searchItemWrap">
               <div className="title">
                 热门搜索
               </div>
               <div className="listWrap">
                  {
                     goodsSearch.list.map((item,index)=>{
                         return <button key={index}>
                             {item.keyword}
                         </button>
                     })
                  }  
               </div>
           </div>
            }
        </div> 
    </>)
}

export default GoodsSearch;