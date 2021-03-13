import Mock from 'mockjs'
import homeApi from './home'
import userApi from './userManagement'
import loginApi from './admin'

//设置200-2000延时，模拟请求耗时
Mock.setup({
    timeout: '200-1000'
})


//登录页面
Mock.mock(/\/admin\/loginData/, 'post', loginApi.login)

//首页
//拦截的是/home/getData

Mock.mock(/\/home\/getData/, 'get', homeApi.getHomeData)

Mock.mock(/\/user\/getData/, 'get', userApi.getUserData)

//用户管理页
Mock.mock(/\/user\/addData/, 'post', userApi.createUser)

Mock.mock(/\/user\/deleteData/, 'get', userApi.deleteUser)

Mock.mock(/\/user\/editData/, 'post', userApi.editUser)

Mock.mock(/\/user\/searchData/, 'get', userApi.searchUser)

