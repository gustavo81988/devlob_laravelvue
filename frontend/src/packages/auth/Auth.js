export default function (Vue){
    Vue.auth = {
        setToken (token, expiration  ) {
            localStorage.setItem('token', token);
            localStorage.setItem('expiration', expiration);
        },
        getToken(){
            let token      = localStorage.getItem('token');
            let expiration = localStorage.getItem('expiration');
            
            if( !token || !expiration ){
                return null;
            }
            
            if( Date.now() > parseInt(expiration) ){
                return null;
            } else {
                return token;
            }
        },
        destroyToken (){
            localStorage.removeItem('token');
            localStorage.removeItem('expiration');
        },
        isAuthenticated () {
            if( this.getToken() ){
                return true;
            }else{
                return false;
            }
        }
    },
    
    Object.defineProperties(Vue.prototype, {
        $auth: {
            get: () => {
                return Vue.auth
            }
        }
    });
}