import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Login from '../pages/Login.vue'
import Details from '../pages/HomePage/sub/Details.vue'

Vue.use(VueRouter)

const routes =[
    {
        path: '/',
        redirect: '/home'
    },      
    {
        path:'/home',
        component:Home,
        name:'Home',
        meta:{
            isLogin:true
        }
    },
    {
        path:'/about',
        component:About,
        name:'About',
        meta:{
            isLogin:true
        }
    },
    {
        path:'/params',
        component:()=>import('../pages/Params'),
        name:'Params',
        meta:{
            isLogin:true
        }
    },
    {
        path:'/ADCategory',
        component:()=>import('../pages/ADCategory'),
        name:'ADCategory',
        meta:{
            isLogin:true
        }
    },
    {
        path:'/login',
        component:Login,
        name:'Login'
    },
    {
        path:'/details',
        name:'Detiles',
        component:Details,
        children:[
            {
                path:'openproduct',
                name:'OpenProduct',
                component:()=>import('../pages/HomePage/sub/openproduct.vue')
            },
            {
                path:'golife',
                name:'Golife',
                component:()=>import('../pages/HomePage/sub/golife.vue')
            },
            {
                path:'height',
                name:'Height',
                component:()=>import('../pages/HomePage/sub/height.vue')
            },
            {
                path:'logo',
                name:'Logo',
                component:()=>import('../pages/HomePage/sub/logo.vue')
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router