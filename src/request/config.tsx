import { AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'http://localhost:1998/api',
  transformResponse: [(data: AxiosResponse) => data],
  paramsSerializer: (params: any) => { return qs.stringify(params) },
  headers: {
    'Content-type': 'application/json'
  },
  timeout: 3000,
  withCredentials: true,
  responseType: 'json'
}

export default axiosConfig

// export interface AxiosRequestConfig {
//   url?: string; // 请求链接
//   method?: string; // 请求方法
//   baseURL?: string; // 请求的基础链接
//   xsrfCookieName?: string; // CSRF 相关
//   xsrfHeaderName?: string; // CSRF 相关
//   headers?: any; // 请求头设置
//   params?: any; // 请求参数
//   data?: any; // 请求体
//   timeout?: number; // 超时设置
//   withCredentials?: boolean; // CSRF 相关
//   responseType?: XMLHttpRequestResponseType; // 响应类型
//   paramsSerializer?: (params: any) => string; // url query 参数格式化方法
//   onUploadProgress?: (progressEvent: any) => void; // 上传处理函数
//   onDownloadProgress?: (progressEvent: any) => void; // 下载处理函数
//   validateStatus?: (status: number) => boolean;
//   adapter?: AxiosAdapter;
//   auth?: any;
//   transformRequest?: AxiosTransformer | AxiosTransformer[];
//   transformResponse?: AxiosTransformer | AxiosTransformer[];
//   cancelToken?: CancelToken;
// }
// axios.create = (config: AxiosRequestConfig): void => {
  
// }
