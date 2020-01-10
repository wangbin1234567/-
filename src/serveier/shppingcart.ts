import request from "../utils/request"
export const cartIndex=()=>{
    return request('/cart/index')
}
export const cartChecked=(data:object)=>{
    return request({
        url:'/cart/checked',
        method:"POST",
        data
    })
}
export const cartDelete=(removeList:any)=>{
    return request({
        url:'/api/cart/delete',
        method:"POST",
        data:{
            productIds:removeList
        }
        
    })
}
export const cartUpdate=(data:object)=>{
    return request({
        url:'/api/cart/update',
        method:"POST",
      data
    })
}