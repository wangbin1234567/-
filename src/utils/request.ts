import axios from "axios"
import {AxiosResponse} from "axios"
import {XHRType} from "./types"
const instance = axios.create({
    baseURL: 'http://169.254.160.213:8888',
    timeout: 1000,
    headers: {'x-nideshop-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwiaWF0IjoxNTc4NDY3MzkyfQ.lgny3Bm0_Bh1WD71y7efEZeHUrBcntdQ5M_z8a2FQss'}
});

// 请求拦截器
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
// 响应拦截器
instance.interceptors.response.use(function (response:AxiosResponse<XHRType>):any {
    // Do something with response data
    // return response;
    if (response.status == 200&&response.data.errno == 0){
        return response.data;
    }else{
        console.log('error...', response.data.errmsg)
    }
    return Promise.resolve(null);
  }, function (error:any) {
    console.log('error...', error)
    return Promise.resolve(null);
    // Do something with response error
    // return Promise.reject(error);
  }
);

export default instance;