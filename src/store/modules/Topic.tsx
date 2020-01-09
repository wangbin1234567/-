import { specialType } from '../types/topic'
import {observable, action} from 'mobx'
import { getTopic, getDetail, getRelated, getList } from '../../api/topic'

export default class CartStore{
    //定义数据
    @observable
    list: specialType[] = [];//专题数据
    @observable
    DetaiList: specialType[] = []//专题详情
    @observable
    RelatedList: specialType[] = []//专题相关
    @observable
    getListItem: specialType[] = []

    //请求数据的方法
    @action
    async getTopicList(obj:Object){
        const res:any = await getTopic(obj)
        this.list = res.data     
    }
    @action
    async getDetailList(id:number){
        const res:any = await getDetail(id);
        this.DetaiList=[res]
    }
    @action
    async RelatedListen(id:number){
        const res:any = await getRelated(id);
        this.RelatedList = res
    }
    @action
    async getListen(params:any){
        const res:any = await getList(params)
        this.getListItem = res.data
        // console.log(this.getListItem,'>>>????????-------');
        
    }
}