<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="success" @click="login">登录</el-button>
    <router-link to="/firstpage">Go to firstpage</router-link>
  </div>

</template>

<script>
    export default {
        name: "login",
        data(){
          return{
            form:{
              name:'',
              password:''

            }

          }

        },
        methods:{
          login(){
            var param={
              userName:this.form.name,
              userPsw:this.form.password
            }


            this.$http.post('api/login',param).then(res=>{
              console.log(res)
            })


          }
        }
    }
</script>

<style scoped>
  .login{
    width: 35%;
  }

</style>
