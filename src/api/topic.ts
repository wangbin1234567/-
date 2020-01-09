import request from '../utils/request';

//专题数据
export let getTopic=(params:any)=>{
    return request.get(`/topic/list?page=${params.page}&size=${params.size}`)
}
//专题详情
export let getDetail=(id:number)=>{
    return request.get(`/topic/detail?id=${id}`)
}
//专题相关
export let getRelated=(id:number)=>{
    return request.get(`/topic/related?id=${id}`)
}
//留言
export let getList=(params:any)=>{
    return request.get('/comment/list',params)
}