import cookies from 'js-cookies'

export default {
    state: {
        menu: null,
    },
    mutations: {
        setMenu(state, payLoad) {
            state.menu = payLoad
            console.log(state.menu)
        }
    },
    actions: {
        transMenu({ state, commit }, payLoad) {
            console.log(payLoad)
            payLoad.menu.forEach(r => {
                console.log(r.url)
                r.component = () => import(`@/views/${r.url}`)
                if (r.children) {
                    r.children.forEach(rc => {
                        if (rc.url)
                            rc.component = () => import(`@/views/${rc.url}`)
                    })
                }
            })
            console.log('menu', payLoad.menu[0])
            payLoad.router.addRoute(payLoad.menu[0])

        }
    }

}