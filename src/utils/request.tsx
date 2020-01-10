import axios from 'axios';
import {AxiosResponse} from 'axios'
import {XHRType} from './type'

// 创建axios实例
const instance = axios.create({
    baseURL: '//169.254.160.213:8888',
    timeout: 3000,
    // headers: {'X-Custom-Header': 'foobar'}
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
instance.interceptors.response.use(function(response: AxiosResponse<XHRType>):any {
    // Do something with response data
    // return response;
    if (response.status == 200 && response.data.errno == 0){
        return response.data;
    }else{
        console.log('error...', response.data.errmsg)
    }
    return Promise.resolve(null);
  }, function (error: any) {
    // Do something with response error
    console.log('error...', error)
    return Promise.resolve(null);
  }
);

export default instance;