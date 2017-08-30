<template>
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="form-group">
                        <input
                            v-model="email"
                            class="form-control"
                            type="email"
                            placeholder="Email"
                        >
                    </div>
                    <div class="form-group">
                        <input
                            v-model="password"
                            class="form-control"
                            type="password"
                            placeholder="Password"
                        >
                    </div>
                    <button @click="login" class="btn btn-success">Login</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        login(){
            let data = {
                client_id     : 2,
                client_secret : 'Ssak3Tptso5VwxVEeHAy0UDykmnKPAQYii7V72hx',
                grant_type    : 'password',
                username      : this.email,
                password      : this.password
            }
            
            
            this.$http.post("http://localhost/devlob_laravelvue/public/oauth/token",data).then( (response) => {
                console.log(response);
            });
            
        }
    }
}
</script>

<style lang="css">
</style>
