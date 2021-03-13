import { request } from './request'

export function login(username, password) {
    return request({
        url: '/admin/loginData',
        method: 'post',
        data: {
            username,
            password
        }
    })
}