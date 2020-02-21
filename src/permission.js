import router, {
    asyncRouts
} from "./router/index"
import store from "./store/index"
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
    // console.log(store)
    let token = store.state.user.token
    if (token) {
        if (to.path === '/login') {
            // 若已登录没有必要显示登录页，重定向至首页
            next('/')
        } else {
            let role = store.state.user.role //获取当前用户的权限，进行动态路由的追加
            if (role.length) {
                console.log(1)
                next()
            } else {
                store.dispatch("user/getInfo").then(() => {
                    try {
                        let role = store.state.user.role //获取当前用户的权限，进行动态路由的追加
                        // data进行筛选权限
                        let ro = []
                        asyncRouts.forEach(sss => {
                            if (role.includes(sss.path)) {
                                router.addRoutes([sss])
                            }
                        })
                        next({
                            ...to,
                            replace: true
                        })

                    } catch (err) {
                        new Error("err")
                    }

                }).catch(err => {
                    console.log(err)
                })

            }

        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            // 白名单中路由放过
            next()
        } else {
            // 重定向至登录页
            next(`/login?redirect=${to.path}`)
        }
    }
})