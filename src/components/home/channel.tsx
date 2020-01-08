import React,{useEffect} from "react"
import {useObserver} from "mobx-react-lite";
import useStore from "../../utils/useStore"
import {withRouter} from "react-router-dom"
import {History} from "history"
//icon组件
    interface hisProp {
        history: History
    }
    const Channel: React.FC<hisProp> = (props) => {

        const store = useStore ()
        const {home} = store;
        useEffect( () => {
            home.getCarousel ();
        },[])
        
        let tabCate = (id:number) =>{
            props.history.push("/category",id)
        }
        return useObserver( () => ( 
                <div className="channelWrap">
                    {
                        home.channel.map( (item,index) => {
                            return (
                                //点击跳转到icon详情页面并传入对应id
                                <li key={index} onClick={ ()=>{
                                    tabCate(item.id)
                                }}>
                                    <img src={item.icon_url} alt=""/>
                                    <p>{item.name}</p>
                                </li>
                            )
                        })
                    }
                </div>
        ))
    }
  export default withRouter(Channel)