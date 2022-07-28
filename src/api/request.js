import axios from 'axios'
import { ElMessage } from 'element-plus'
import { diffTokenTime } from '@/utils/auth'
import store from '@/store'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use((config) => {
    if (localStorage.getItem('token')) {
        if (diffTokenTime()) {
            store.dispatch('app/logout')
            return Promise.reject(new Error('Token已失效'))
        }
    }
    config.headers.Authorization = localStorage.getItem('token')
    return config
}, err => {
    return Promise.reject(new Error(err))
})

service.interceptors.response.use((response) => {
    console.log(response)
    const { data, meta } = response.data
    if (meta.status === 200 || meta.status === 201) {
        return data
    } else {
        ElMessage.error(meta.msg)
        return Promise.reject(new Error(meta.msg))
    }
}, err => {
    err.response && ElMessage.error(err.response.data)
    return Promise.reject(new Error(err.response.data))
})

export default service
