import axios from 'axios' 

export function request(config) {

    const instance = axios.create({
        baseURL: '', 
        timeout: 5000
    })

    instance.interceptors.request.use( config => {
        return config
    },error => {
        config(error)
    })

    instance.interceptors.response.use( response => {
        let res = {} 
        // if()判断状态码跳转到响应页面
        res.status = response.status
        res.data = response.data
        return res
    },error => {
        console.log(error)
    })


    return instance(config)
}

