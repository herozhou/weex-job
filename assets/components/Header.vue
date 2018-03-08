<template>
    <div class="wrapper">
        <div class="scan">
            <text class="ic iconfont">&#xe606;</text>
            <text class="txt">扫一扫(装b)</text>
        </div>
<div class="search">
        <text class="ic iconfont search-iconfont">&#xe600;</text>
         <input type="text" placeholder="搜索职位或者城市关键字" class="input"  value=""  @change="onchange"/>
</div>
        <div class="notice">
            <text class="ic iconfont">&#xe7f9;</text>
            <text class="txt">分类(好看)</text>
        </div>
    </div>
</template>
<style scoped>

    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        position: fixed;
        top: 0;
        left: 0;right: 0;
        height: 114px;
        padding-top: 44px;
        display:flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        z-index: 101;
        background-color: #108ee9;
        opacity: .99;
    }
    .scan,.notice{
        height: 80px;
        width: 150px
    }
    .ic,.txt,.search{
        text-align: center;
        color:#666;
        font-weight: 300;
    }
    .ic{
        font-size: 32px;
        color:white;
    }
    .txt{
        font-size: 18px;
        color:white;
     }
    .search-iconfont{
        flex: 1;
        font-size: 26px;
        background-color: #fff;
        color:black;
        border-radius: 10px;
        text-align: center;
        justify-content: center;
    }
    .search{
        flex-direction:row;background-color:white;height:60px;
        border-radius: 10px;
        width: 350px;

    }

   .search .input{
        flex: 6;
        font-size: 23px;
        border-radius: 10px;

    }
</style>
<script>
    export default {
        data () {
            return {
            }
        },
        created () {
        },
        methods: {
            jumpto(_url) {
                this.$router.push(_url);
            },
           onchange: function (event) {
               this.$emit('inputEvent',event.value);
                console.log('onchange', event.value);
            },
        }
    }
</script>