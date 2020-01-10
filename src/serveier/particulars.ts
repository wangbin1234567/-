import request from "../utils/request"


export const  goodsDetail=(id:string)=>{
    return request({
        url:'http://202.96.155.121:8888/api/goods/detail',
        method:'GET',
        params:{
            id
        }
    })
}