 import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
import {routes} from './routes';
import VueResource from 'vue-resource';
import Auth from './packages/auth/Auth';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Auth);



const router = new VueRouter({
  mode: 'history',
  routes
}); 

router.beforeEach(
    (to, from, next) => {
        if( to.matched.some( record => record.meta.forVisitors ) ){
            if(Vue.auth.isAuthenticated()){
                next({ path: '/feed' });
            }else{
                next();
            }
        } else if ( to.matched.some( record => record.meta.forAuth ) ){
            if( !Vue.auth.isAuthenticated() ){
                next({ path: '/login' });
            }else{
                next();
            }
        }else {
            next();
        }
    }
);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
