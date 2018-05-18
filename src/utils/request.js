import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
// import store from '@/store'
import router from '@/router'
// import { getToken } from './auth'

//axios 配置
axios.defaults.timeout = 50000
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'

//http request interceptor
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data)

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

//http response interceptor
axios.interceptors.response.use(
  response => {
    const res = response.data;
    //通过res.errorCode来判断，进行errorPage跳转处理
    if(res.errorCode === 401){ //未登录
      store.dispatch('LogOut').then(() => {
        router.push({ path: '/login' })
      })
    }else if(res.errorCode === 404){ //未登录
      router.push({ path: '/404' })
    }else if(res.errorCode === 500){
      router.push({ path: '/500' })
    }else{
      return response
    }
  },
  error => {
    if (error.response.status === 500) {
      router.push({ path: '/500' })
    }else if (error.response.status === 404) {
      router.push({ path: '/404' })
    }else if(error.response.status === 401){
      store.dispatch('LogOut').then(() => {
        router.push({ path: '/login' })
      })
    }else{
      return Promise.reject(error)
    }
  }
)

const request = {
  /**
   * 封装get方法
   * @param url
   * @param data
   * @return {Promise}
   */
  get(url, params = {}) {
    if(params.urlParam){
      for(var key in params.urlParam){
        url = url.replace(`{${key}}`,params.urlParam[key]);
      }
      delete params.urlParam;
    }
    return new Promise((resolve, reject) => {
      axios.get(url, { params: params })
        .then(response => {
          resolve(response.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  /**
   * 封装post方法
   * @param url
   * @param data
   * @return {Promise}
   */
  post(url, data = {}) {
    if(data.urlParam){
      for(var key in data.urlParam){
        url = url.replace(`{${key}}`,data.urlParam[key]);
      }
      delete data.urlParam;
    }
    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default request
