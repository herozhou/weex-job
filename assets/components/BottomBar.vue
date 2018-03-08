<template>
 
    <div class="wrapper">
        <div class="bar-item" @click="tabTo('home')">
            <text class="bar-ic iconfont" :style="testCS">&#xe665;</text>
            <text class="bar-txt">首页</text>
        </div>
        <div class="bar-item" @click="tabTo('community')">
            <text class="bar-ic iconfont">&#xe679;</text>
            <text class="bar-txt">社区</text>
        </div>
        

        <div class="bar-item" @click="tabTo('notice')">
            <text class="bar-ic iconfont" >&#xe69d;</text>

            <text class="bar-txt">消息</text>
        </div>
        <div class="bar-item" @click="tabTo('my')">
            <text class="bar-ic iconfont">&#xe759;</text>
            <text class="bar-txt">个人</text>
        </div>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        position: fixed;
        bottom: 0;
        left: 0;right: 0;
        height: 90px;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        border-top-width: 1px;
        border-top-color: #d9d9d9;
        background-color: #fafafa;
    }
    .bar-item{
        flex: 1;
    }
    .bar-txt,.bar-ic{
        color:#666;
        text-align: center;
    }
    .bar-active{
        color:#b4282d;
    }
    .bar-ic{
        padding-top: 14px;
        font-size: 38px;
    }
    .bar-txt{
        font-size: 22px;
        padding-top: 2px;
    }
    .act{

    }

.content{
  height: 1000px;
  z-index: 999;
  width: 100%;
  border-top: 1px solid #f8f8f8;
  background: #fff;
  align-items: center;
}

    .login {
  display: none;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
}




 .login .head {
  width: 100%;
}
 .login .head .h2 {
    margin-top: 150px;
  font-size: 40px;
  width: 100%;
  color: #000;
  box-sizing: border-box;
}
 .navbar {
  margin-top: 2rem;
  width: 100%;
 flex-direction: row;
}
.title-link{
    padding: 20px;
}

 .titlename {
  font-size: 30px;

  color: #000;
}
.titlename:after {
  content: '';
  display: inline-block;
  height: 6px;
  width: 6px;
  border-width: 2px 2px 0 0;
  border-color: #ffda44;
  border-style: solid;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  position: relative;
  margin-left: .2rem;
}
 .tip {
    font-size: 20px;
    color:#888;
  }

   .innerbox {
  background-color: #fff;
  margin:  auto;
  position: relative;
}
 .innerbox .open {
  width: 5rem;
  height: 5rem;
  display: block;
  margin: .4rem auto;
  background: url('https://sukura7.github.io/vue-xianyu-demo/static/img/X.2e900c7.png') no-repeat;
  -webkit-background-size: 4rem 4rem;
  background-size: 4rem 4rem;
  position: absolute;
  top: -4rem;
  left: -1.5rem;
}
.recomlist{
    width: 100%;
    height: 600px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}
.recomlist-type{
    flex-direction: column;
    flex: 1;
}
.explain{
    text-align: center;
}
.footer{
    height: 400px;
}
</style>
<script>

    var modal = weex.requireModule('modal');
    export default {
//        props: {
//            indexKey: {
//                type: String,
//                default: 'home'
//            },
//            reClick: {
//                type: Boolean,
//                default: false
//            },
//            items: {
//                type: Array,
//                default: function(){
//                    return [
//                        {
//                            icon:'&#xe660;',
//                            name:"首页",
//                            key:'home'
//                        }
//                    ]
//                }
//            }
//        },
        computed:{
            testCS:function () {
                return this.pIndexKey == 'home'?'color:#b4282d;':''
            }
        },
        data () {
            return {
                pIndexKey:'home',
                active: false,
                login:false,
            }
        },
        mounted(){
        },
        methods: {
            tabTo(_key){
                if(this.pIndexKey == _key) return;
                this.pIndexKey = _key;
                this.$emit('tabTo',{
                    status : 'tabTo',
                    data : {
                        key : _key
                    }
                })
            },
             change1 () {
            const login = document.querySelector('.login');
            login.style.display = 'block';
            this.active = false
              },
               change3 () {
                    const login = document.querySelector('.login');
                    this.active = true
                      login.style.display = 'none';
                  },
        }
    }
</script>