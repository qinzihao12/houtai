import { color } from 'echarts'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [{
        path: '/huan',
        name: 'huan',
        meta: {
            title: '首页'
        },
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/huan.vue')

    }, {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            title: 'home'
        }

    },
    {
        path: '/chenyu',
        name: 'chenyu',

        meta: {
            title: 'chenyu'
        },
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/chenyu.vue')

    },

    {
        path: '/about',
        name: 'About',
        meta: {
            title: 'About'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/love',
        name: 'love',
        meta: {
            title: 'love'
        },
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/love.vue')
    },
    {
        path: '/todolist',
        name: 'todolist',
        meta: {
            title: 'todolist'
        },
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/todolist.vue')
    },
    {
        path: '/fly',
        name: 'fly',
        meta: {
            title: 'fly'
        },
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/fly.vue')
    },
    {
        path: '/main',
        name: 'main',
        meta: {
            title: '设置'
        },
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/main.vue')
    },
    {
        path: '/ceshi',
        name: 'ceshi',


        meta: {
            title: 'ceshi'
        },
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/ceshi.vue'),
        children: [{
            path: '/xiao',
            name: 'xiao',
            meta: {
                title: '小小の游戏',
                color: 'red'
            },
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/xiao.vue'),
            children: [{
                path: '/snake',
                name: 'tanchishe',
                meta: {
                    title: '贪吃蛇'
                },
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/game/snake.vue')
            }, {
                path: '/halashao',
                name: 'els',
                meta: {
                    title: '俄罗斯方块'
                },
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/game/halashao.vue')
            }, ]
        }, ]
    },
]

const router = new VueRouter({
    routes
})

export default router