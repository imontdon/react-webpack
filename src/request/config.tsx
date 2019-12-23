import { AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'http://localhost:1997/api',
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
