import { request } from '@/network/request'

export function getUserData(page) {
    return request({
        url: '/user/getData',
        params: {
            page
        }
    })
}
export function addUserData(newUserData) {
    return request({
        url: '/user/addData',
        method: 'post',
        data: newUserData
    })
}

export function deleteUserData(id) {
    return request({
        url: '/user/deleteData',
        method: 'get',
        params: {
            id
        }
    })
}

export function editUserData(editUserData) {
    return request({
        url: '/user/editData',
        method: 'post',
        data: editUserData
    })
}

export function searchUserData(name) {
    return request({
        url: '/user/searchData',
        params: {
            name
        }
    })
}