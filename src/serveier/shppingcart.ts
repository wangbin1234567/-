import request from "../utils/request"

export const  ShppingCart=()=>{
    return request({
        url:'http://202.96.155.121:8888/api/goods/detail?id=1151013'
    })
}