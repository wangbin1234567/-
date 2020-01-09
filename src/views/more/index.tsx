import React, { useEffect } from 'react'
import { useObserver } from 'mobx-react-lite'
import useStore from '../../utils/useStore'
import {History}from 'history'
import './index.module.scss'

interface PropType{
    history: History,
    location: Location
}
const typeId = 1;
const page = 1;
const size = 96;
const More: React.FC<PropType> = (props) => {
    let {state} = props.location as {state?:any}
    let store = useStore();
    let {Topic} = store
    useEffect(()=>{
        Topic.getListen({valueId:state,typeId,page,size})
    },[Topic,state])
    let ItemClick = () => {
        props.history.goBack();
    }
    return useObserver(() => (
        <div className="list_Item">
            <header>
                <div>
                    <span onClick = {() => {ItemClick()}}>&lt;</span>
                    <p>查看更多评论</p>
                </div>
            </header>
            <main>
                {
                    Topic.getListItem.map((item,index) => {
                        return <li key={index}>
                            <p>
                                <span>{Object.values(item.user_info).length > 0 ?item.user_info.username:"匿名用户"}</span>
                                <span>{item.add_time}</span>
                            </p>
                            <p className="first">
                                {item.content}
                            </p>
                        </li>
                    })
                }
            </main>
        </div>
    ))
}

export default More