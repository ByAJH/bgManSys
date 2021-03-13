
const admins = [
    {
        username: 'admin',
        password: '123'
    },
    {
        username: 'abc',
        password: '123'
    }
]

const menus = {
    super: [
        {
            path: '/main',
            url: 'Main',
            children: [
                {
                    path: '/',
                    redirect: 'home'
                },
                {
                    path: 'home',
                    url: 'home/Home'
                },
                {
                    path: 'video',
                    url: 'video/Video'
                },
                {
                    path: 'user',
                    url: 'usermanagement/UserManagement'
                },
                {
                    path: 'page1',
                    url: 'others/Page1'
                },
                {
                    path: 'page2',
                    url: 'others/Page2'
                }
            ]
        }
    ],
    normal: [
        {
            path: '/main',
            url: 'Main',
            children: [
                {
                    path: '/',
                    redirect: 'home'
                },
                {
                    path: 'home',
                    url: 'home/Home'
                },
                {
                    path: 'video',
                    url: 'video/Video'
                }
            ]
        }
    ]
}

const sAside = [
    {
        path: "/main/home",
        name: "home",
        label: "首页",
        icon: "s-home",
    },
    {
        path: "/main/video",
        name: "video",
        label: "视频管理",
        icon: "video-play",
    },
    {
        path: "/main/user",
        name: "user",
        label: "用户管理",
        icon: "user",
    },
    {
        label: "其他",
        name: "other",
        icon: "setting",
        children: [
            {
                path: "/main/page1",
                name: "page1",
                label: "page1",
            },
            {
                path: "/main/page2",
                name: "page2",
                label: "page2",
            },
        ],
    },]


export default {
    login: config => {
        console.log(config)
        config.data = JSON.parse(config.body)
        let code = 10000
        let menu = null
        let aside = null
        admins.some(loginMsg => {
            if (config.data.username === loginMsg.username && config.data.password === loginMsg.password) {
                if (config.data.username === 'admin') {
                    menu = menus.super
                    aside = sAside
                } else {
                    menu = menus.normal
                    aside = sAside.filter(a => a.name === 'home' || a.name === 'video')
                }
                code = 20000
                return true
            } else {
                code = 40000
            }
        })
        return { code, menu, aside }

    }
}