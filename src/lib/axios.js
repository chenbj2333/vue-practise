import axios from 'axios'
import { baseUrl } from '@/config'

class HttpRequest {
  constructor(baseURL = baseUrl) {
    this.baseUrl = baseURL
    // 请求队列
    this.queue = {}
  }

  getInsideConfig() {
    // 默认的配置
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }

  // 拦截器
  interceptors(instance, url) {
    // 添加请求拦截器
    instance.interceptors.request.use(config => {
      // 在发送请求之前做某事
      // 如果请求队列里有值，可以添加全局loading
      if (!Object.keys(this.queue).length) {
        // Spin.show()
      }
      this.queue[url] = url
      return config
    }, error => {
      // 请求错误时做些事
      return Promise.reject(error)
    })

    // 添加响应拦截器
    instance.interceptors.response.use(res => {
      // 对响应数据做些事
      delete this.queue[url]
      const { data, status } = res
      return { data, status }
    }, error => {
      // 请求错误时做些事
      delete this.queue[url]
      return Promise.reject(error)
    })
  }

  request(options) {
    // 使用自定义配置创建axios的新实例
    const instance = axios.create()
    // 默认配置和传入的配置合并，相同的配置默认会被传入的覆盖
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
