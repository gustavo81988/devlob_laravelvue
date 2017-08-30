import Login    from './components/authentication/Login.vue';
import Register from './components/authentication/Register.vue';

export const routes = [
    {path: '/login'    , component: Login },
    {path: '/register' , component: Register }
]