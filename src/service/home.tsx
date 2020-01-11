import request from '../utils/request'

export const setList = ()=>{
    return request('/catalog/index');
}
export const changeNum = (id:number)=>{
    return request(`/catalog/current?id=${id}`);
}
export const setHotKeywordList = ()=>{
    return request('/search/index',{headers: {
        'x-nideshop-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwiaWF0IjoxNTc4NDY2MDYyfQ.AGC-1bv2b5Yf-7-0bsl4vFvNN6YFo-PBhFacNBjxuzc'
       }});
}
export const setBrotherCategory = (id:number)=>{
    return request(`/goods/category?id=${id}`);
}
export const setGoodsList = (id:number)=>{
    return request(`/goods/list?page=1&size=1000&categoryId=${id}`);
}
export const getGoodsList = (id:number)=>{
    return request(`/goods/list?page=1&size=1000&categoryId=${id}`);
}
export const getCurrentCategory = (id:number)=>{
    return request(`/goods/category?id=${id}`);
}