import {observable, action} from 'mobx'
import {getCategory} from "../api/category"
export default class CateStore{
  
    @action 
    async getCategory (id:number) {
        console.log(id,"....caaa")
        const res: any = await getCategory(id)
        console.log(res)
    }
}