import store from '../store/store'
import Router from '../../vendor/router'

import Register from '../views/auth/Register'
import Login from '../views/auth/Login'
import Home from '../views/Home'
import NotFound from '../../components/template/NotFound'
import About from '../views/About'
import Howitworks from '../views/Howitworks'
import Advantages from '../views/Advantages'
import Buy from '../views/Buy'
import instruction from '../views/instruction'

import {user} from '../models'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            auth: false,
        },
        children: [
            {
                name: 'about',
                path: '/',
                component: About
            },
            {
                name: 'howitworks',
                path: '/howitworks',
                component: Howitworks
            },
            {
                name: 'buy',
                path: '/buy',
                component: Buy
            },
            {
                name: 'advantages',
                path: '/advantages',
                component: Advantages
            },
            {
                name: 'instruction',
                path: '/instruction',
                component: instruction
            },
            {
                path: '/register',
                name: 'register',
                component: Register,
            },
            {
                path: '/login',
                name: 'login',
                component: Login,
            },
            ...user.getRoutes()
        ]
    },
    
    {
        path: '/404',
        name: '404',
        component: NotFound,
    },
    {
        path: '*',
        redirect: '/404'
    }
]

export default new Router(routes, store).getRouter()
