import { AxiosResponse, AxiosRequestConfig } from 'axios'
import { post, get } from './service'

export const test = (params?: any, type?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<any>> => post('/test', params, type, config)

export const mockFetchNav = (params?: any, type?: string, config?: AxiosRequestConfig): Promise<AxiosResponse<any>> => post('/mock/nav', params, type, config)
