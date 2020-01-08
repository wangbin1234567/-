import {observable, action} from 'mobx'
import {getCategory} from "../api/category"
export default class CateStore{
  
    @action 
    async getCategory () {
        const res: any = await getCategory()
        console.log(res)
    }
}