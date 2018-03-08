<template>
  <div class="wrapper">
        <header2  title="登录"></header2>
        <scroller class="main-list" offset-accuracy="300px">

            <div>
                <div style="background-color: #286090">
                  <text class="title" style="height: 80 ;padding: 20;color: #FFFFFF">账号</text>
                </div>
                <input type="text" placeholder="请输入账号" class="input" :autofocus=true value="" @input="inputAccount" />
            </div>
            <div>
                <div style="background-color: #286090">
                  <text class="title" style="height: 80 ;padding: 20;color: #FFFFFF">账号</text>
                </div>
                <input type="password" placeholder="请输入密码" class="input"  value="" @input="inputPassword"/>
              </div>

              <text> 账号最好是邮箱，之后会出订阅功能。密码最少为6位字母和数字组合</text>

        <div  class="button" @click="login">
                <text style="color:#0f88eb;text-align:center">登录</text>
       </div>

              
        </scroller>
    </div>

</template>
<style scoped>
  .wrapper{
        background-color: #f4f4f4;
    }
    .main-list{
        margin-top: 113px;
        margin-bottom: 90px;
    }
    .input {
    font-size: 60px;
    height: 80px;
    width: 750px;
  }
    .button {
    width: 700px;
      margin: 15px auto;
    text-align: center;
    background-color: white;
      border-width: 2px;
    border-style: solid;
    border-color: #0f88eb;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 30px;
    color: #0f88eb;

    border-radius: 10px;
  }
  

</style>

<script>
    import Header2 from '../components/Header2.vue';
    import util from '../../src/assets/util';

     const modal = weex.requireModule('modal')
     const stream = weex.requireModule('stream')
 const storage = weex.requireModule('storage')

    export default {
        data () {
            return {
                account:'',
                password:'',
            }
        },
        components: {
             'header2': Header2,
        },
        methods: {
            jumpTo(to){
                 this.$router.push(to)
            },
            inputAccount(event){
                 this.account=  event.value;
            },
            inputPassword(event){
                 this.password=  event.value;
                
            },
             postApi (api,obj_str,callback) {
                return stream.fetch({
                  method: 'POST',
                  type: 'json',
                  headers:{
                    "Content-Type": 'application/x-www-form-urlencoded'
                  },
                  body: obj_str,
                  url: 'http://192.168.43.75:8880'+api
                }, callback)
           },
            login(){
                console.log(util.validateEmail(this.account))
                //!util.validateEmail(this.account)
                if(this.account==='' ){
                  modal.toast({ message: '请输入正确的账号', duration: 1 })
                }else if(this.password==='' || !util.validatePassword(this.password)){
                  modal.toast({ message: '请输入正确的密码', duration: 1 })
                }else {
        
                  let obj = new Object();
                  obj.user_name =  this.account;
                  obj.password = this.password;
                  obj.login_time = new Date().toLocaleDateString();
                  obj.collection = [];
                  let obj_str = JSON.stringify(obj);
                  console.log(obj_str)
                  this.postApi('/login',obj_str,res => {
                      if(res.ok && res.data.data === "登录成功"){

                  this.postApi('/user_info', obj.user_name, res => {
                        if( !res.ok ) return ;
                      let user_info = res.data;
                      let str_user_info = JSON.stringify(user_info[0]);
                      console.log(str_user_info)
                       storage.setItem('user_info', str_user_info, event => {
                           modal.toast({ message: '登录成功', duration: 1 })
                           this.$router.push('home');
                  }) })
                       
                      }else {
                        console.log(res)
                          modal.toast({ message: '登录失败: ' + res.data.error , duration: 1 })
                      }
                  })
                }
            },
        }
    }
</script>