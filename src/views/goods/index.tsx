import React, { useEffect } from "react"
import { useObserver } from 'mobx-react-lite';
import { History } from "history"
import { Icon } from "antd"
import { Carousel, WingBlank } from 'antd-mobile';
// import { DetailsAll } from '../../utils/types';
// import 'antd-mobile/dist/antd-mobile.css'; 
// import { withRouter } from 'react-router-dom'
import styles from './goods.module.scss'
import useStore from "../../utils/useStore"
import { match } from "react-router";
interface HistoryType {
    history: History,
    // specificationList:DetailsAll
    location: History.LocationState,
    match: match<{ id: string }>
}

const Goods: React.FC<HistoryType> = (props) => {
    let { Particulars } = useStore()
    useEffect(() => {
        Particulars.getData(props.match.params.id)
    }, [])
    return useObserver(() => <>
        {
            console.log(Particulars.specifinfo.gallery.length)
        }
        <header className="header" >
            <div className="header_left">></div>
            <div className="header_cont">{Particulars.specifinfo.info.name}</div>
            <div className="header_right"></div>
        </header>
        <WingBlank>
            <Carousel
                autoplay={false}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
            >
                {
                    Particulars.specifinfo.gallery.map((item, index) => {
                        return <li key={index}><img className={styles.imgs} src={item.img_url} alt="" /></li>
                    })

                }
                <ul>
                    {/* {
                Particulars.specifinfo.gallery.length.((item,index)=>{
                    return <li></li>
                })
            } */}
                </ul>
                {/* {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))} */}
            </Carousel>
        </WingBlank>
        <div className="maincont" style={{ background: '#fff' }}>
            <span><Icon type="star" />30天无忧退货</span>
            <span><Icon type="star" />48小时快速退款</span>
            <span><Icon type="star" />满88元免邮费</span>
        </div>
        <div className='goodsMsgWrap'>
            <div className='goodsNameTitle'>{Particulars.specifinfo.info.name}</div>
            <div>{Particulars.specifinfo.info.goods_brief}</div>
            <div className='goodsPriceTitle'>￥ {Particulars.specifinfo.info.retail_price}</div>
            <div className='goodsBrandTitle'>
                <div>{Particulars.specifinfo.brand.name}</div>
            </div>
        </div>
        <div className='goodsSize'>
            <div></div>
            <div>x0</div>
            <div>选择规格</div>
        </div>
        <div className='goodsComment'>
            <div className='goodsCommentTitle'>
                    <div>评论 ({Particulars.specifinfo.comment.count})</div>
                    <div>查看全部</div>
            </div>
            <div className='commentList'>
                <div className='commentItem'>
                    <div className='userInfo'>
                        <div>匿名用户</div>
                        <div>{Particulars.specifinfo.comment.data.add_time}</div>
                    </div>
                    <div className='userComment'>{Particulars.specifinfo.comment.data.content}</div>
                    <div className='commentPicList'>
                        {
                           Particulars.specifinfo.comment.data.pic_list.map((item,index)=>{
                               return <img src={item.pic_url} key={index} alt=""/>
                           })
                        }
                    </div>
                </div>
            </div>
        </div>

        {
            console.log(Particulars.specifinfo.gallery)
            // console.log((Particulars.specificationList as DetailsAll).info.id)
        }
    </>)
}
export default Goods