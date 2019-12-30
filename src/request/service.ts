import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'
import config from './config'

const service: AxiosInstance = axios.create(config)

service.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse<any> | Promise<AxiosResponse<any>> => {
    const debug = process.env.NODE_ENV === 'development'
    if (response.status === 200) {
      if (debug) {
        console.log(`url: ${response.config.url}, method: ${response.config.method}`)
        console.log('data: ', response.config.url.includes('mock') ? JSON.parse(response.data) : response.data)
      }
    }
    // console.log(debug, process.env, response)
    return response
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

const getConfigHeader = (type: string, config: AxiosRequestConfig = {}): AxiosRequestConfig => {
  switch(type) {
    case 'form':
      config.headers = {
        'Content-type': 'multipart/form-data'
      }
      break
    case 'base': 
      config.headers = {
        'Content-type': 'application/x-www-form-urlencoded'
      }
      break
    default:
      config.headers = {
        'Content-type': 'application/json'
      }
      break
  }
  return config
}

const post = (url: string, data?: any, type?: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<any>> => {
  config = getConfigHeader(type, config)
  return service.post(url, data, config)
}

const get = (url: string, data?: any, type?: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<any>> => {
  config = getConfigHeader(type, config)
  /**
   * { a: b, c: d } => url?a=b&c=d
   */
  if (data) {
    Object.keys(data).forEach((key, index) => {
      url += (index === 0 ? `?{key}=${data[key]}` : `&{key}=${data[key]}`)
    })
  }
  return service.get(url, config)
}

export {
  post,
  get
}