import React,{useEffect} from "react"
import {useObserver} from "mobx-react-lite";
import useStore from "../../utils/useStore"
//icon组件
    const Channel: React.FC = () => {

        const store = useStore ()
        const {home} = store;
        
        useEffect( () => {
            home.getCarousel ();
        },[])
        
        return useObserver( () =>( 
                <div className="channelWrap">
                    {
                        home.channel.map( (item,index) => {
                            return (
                                <li key={index}>
                                    <img src={item.icon_url} alt=""/>
                                    <p>{item.name}</p>
                                </li>
                            )
                        })
                    }
                </div>
        ))
    }
  export default Channel