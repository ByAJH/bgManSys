import Mock from 'mockjs'
let userList = []
let count = 200
let items = 7

for(let i=0; i < count; i++) {
    userList.push(
        {
            id: Mock.Random.guid().slice(0,8),
            name: Mock.Random.cname(),
            age: Mock.Random.natural(18,60), 
            gender: Mock.Random.integer(0, 1),
            address: Mock.Random.city()
        }
    )
}



export default {
    getUserData:params => {
        let page = parseInt(params.url.split("?")[1].split("=")[1])
        return [userList.slice(page*items-items, page*items), Math.ceil(userList.length/items)]
    },

    /**
   * 增加用户
   * @param name, addr, age, birth, gender
   * @return {{code: number, data: {message: string}}}
   */
 createUser: config => {
   console.log(config)
    const { name, address, age,  gender } = JSON.parse(config.body)
    const gender_g = gender === '男' ? 1:0
    console.log(JSON.parse(config.body))
    userList.unshift({
      id: Mock.Random.guid().slice(0,8),
      name: name,
      age: age,
      gender: gender,
      address: address
    })
    return {
      code: 20000,
      data: {
        message: '添加成功'
      }
    }
  },
  /**
   * 删除用户
   * @param id
   * @return {*}
   */
  deleteUser: param => {
    console.log(param)
    const id  = param.url.split("?")[1].split("=")[1]
    if (!id) {
      return {
        code: -999,
        message: '参数不正确'
      }
    } else {
      userList = userList.filter(u => u.id !== id)
      return {
        code: 20000,
        message: '删除成功'
      }
    }
  },
  /**
   * 修改用户
   * @param id, name, addr, age, birth, sex
   * @return {{code: number, data: {message: string}}}
   */
   editUser: config => {
    const { id, name, address, age,  gender } = JSON.parse(config.body)
    const gender_g =  gender === '男' ? 1:0
    userList.some(u => {
      if (u.id === id) {
        u.name = name
        u.address = address
        u.age = age
        u.gender = gender_g
        return true
      }
    })
    return {
      code: 20000,
      data: {
        message: '编辑成功'
      }
    }
  },

  searchUser: param => {
    
    const name  = decodeURI(param.url.split("?")[1].split("=")[1])
     
    return userList.filter(u => {
      if(u.name===name) {
        return true
      }
    })
  }
}