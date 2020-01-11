import React, { useEffect } from 'react'
import { useObserver } from 'mobx-react-lite'
import useStore from '../utils/useStore'
import { withRouter } from 'react-router-dom';
import {History}from 'history'

const page = 1;
const size = 20;
interface PropType{
    history: History
}
const Child: React.FC<PropType> = (props) => {
    let store = useStore();
    let {Topic} = store
    useEffect(()=>{
        Topic.getTopicList({page,size})
    },[Topic])

    let ClickTopic = (id:number) =>{
        props.history.push('/details',id)
    }

    return useObserver(() => (
        <div className="wrap-t">
            {
                Topic.list.map((item:any,index:any) => {
                    return <li className="listen" key={index} onClick={() => {ClickTopic(item.id)}}>
                        <img src={item.scene_pic_url} alt=""/>
                        <p>{item.title}</p>
                        <div className="Subtitles">{item.subtitle}</div>
                        <b>{item.price_info}元起</b>
                        <div className="info_list"></div>
                    </li>
                })
            }
        </div>
    ))
}

export default  withRouter(Child)