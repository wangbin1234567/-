import request from "../utils/request"
export const cartIndex=()=>{
    return request('http://169.254.160.213:8888/cart/index')
}
export const cartChecked=(data:object)=>{
    return request({
        url:'http://169.254.160.213:8888/cart/checked',
        method:"POST",
        data
    })
}
export const cartDelete=(removeList:any)=>{
    return request({
        url:'http://202.96.155.121:8888/api/cart/delete',
        method:"POST",
        data:{
            productIds:removeList
        }
        
    })
}
export const cartUpdate=(data:object)=>{
    return request({
        url:'http://169.254.160.213:8888/api/cart/update',
        method:"POST",
      data
    })
}