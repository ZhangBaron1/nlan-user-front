import axios from 'axios'
import Qs from 'qs'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  config.transformRequest = [data => {
    data = Qs.stringify(data)
    return data
  }]
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
  /**
  * code为非200时报错 可结合自己业务进行修改
  */
    const res = response.data
    if (res.code !== 200) {
      Message({
        message: res.msg,
        type: 'error',
        duration: 2 * 1000
      })
      console.log('res...', res)
      if (res.code === 20002) {
        MessageBox.confirm('由于您的登录信息已过期，为了您的账户安全，已将您登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          center: true,
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.replace(`http://${location.host}/#/login`)
          })
        })
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
