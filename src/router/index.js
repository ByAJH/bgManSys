import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../views/Home.vue'

const Login = () => import('@/views/login/Login')
const Main = () => import('@/views/Main')
const Video = () => import('@/views/video/Video')
const UserManagement = () => import('@/views/usermanagement/UserManagement')
const Home = () => import('@/views/home/Home')
const Page1 = () => import('@/views/others/Page1')
const Page2 = () => import('@/views/others/Page2')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Home',
    // component: Main,
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login

  },
  // {
  //   path: '/main',
  //   // name: 'About',
  //   // // route level code-splitting
  //   // // this generates a separate chunk (about.[hash].js) for this route
  //   // // which is lazy-loaded when the route is visited.
  //   component: Main,
  //   children: [
  //     {
  //       path: '/',
  //       redirect: 'home'
  //     },
  //     {
  //       path: 'home',
  //       component: Home
  //     },
  //     {
  //       path: 'video',
  //       component: Video
  //     },
  //     {
  //       path: 'user',
  //       component: UserManagement
  //     },
  //     {
  //       path: 'page1',
  //       component: Page1
  //     },
  //     {
  //       path: 'page2',
  //       component: Page2
  //     }
  // ]
  // },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
