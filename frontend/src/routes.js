import Login    from './components/authentication/Login.vue';
import Register from './components/authentication/Register.vue';

export const routes = [
    {path: '/login'    , component: Login, meta : {forVisitors : true} },
    {path: '/register' , component: Register, meta : {forVisitors : true} }
]