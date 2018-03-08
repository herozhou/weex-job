<template>
    <div class="">
        <div class="header"  >
            <image class="header-bg" resize="cover" src="http://yanxuan.nosdn.127.net/6ae93353e95b3450a2710bb43f925a63.jpg"></image>
            <image class="i-photo" resize="cover" src="https://avatars0.githubusercontent.com/u/16045604?v=4&s=460"></image>
            <text class="i-name">herozhou</text>
            <div class="b-tlt">
                <text class="txt-tag">前端实习生</text>
            </div>
        </div>
     
            <div class="box-tlt border-bottom"><text class="box-txt">我的服务</text></div>
            <div class="box-line line-serve border-bottom">
                <div @click="jumpTo('mycollection')" ><text class="i-box-icon iconfont i-c-orange">&#xe601;</text><text class="i-box-tlt">我的收藏</text></div>
                <div ><text class="i-box-icon iconfont i-c-yellow">&#xe61d;</text><text class="i-box-tlt">我的题目</text></div>
                <div ><text class="i-box-icon iconfont i-c-orange">&#xef12;</text><text class="i-box-tlt">我的简历</text></div>
            </div>
          
    </div>
</template>
<style scoped>

    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #f4f4f4;
    }
    .cell-button{
        margin-bottom: 18px;
    }
    .header{
        height: 200px;
    }
    .header-bg{
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        height: 200px;
    }
    .i-photo{
        position: absolute;
        top:50px;
        left: 30px;
        height: 90px;
        width: 90px;
        border-radius: 90px;
    }
    .i-name{
        position: absolute;
        top:70px;
        left: 150px;
        color:#fff;
    }
    .b-tlt{
        position: absolute;
        top:120px;
        left: 150px;
        height: 40px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
  
    .txt-tag{
        color:#b4a078;
        flex: 1;
        height: 40px;
        overflow: hidden;
        lines:1;
        text-overflow: ellipsis;
    }
 
    .box-txt{
        padding: 25px;
        color:#333;
    }
    .i-box-in{
        position: absolute;
        top:34px;
        right: 30px;
        color:#333;
    }
    .box-line{
        display: flex;
        padding-right: 30px;
        flex-direction: row;
        justify-content: space-between;
    }
  
    .i-box-icon{
        text-align: center;
        padding-top: 15px;
        font-size: 32px;
        padding-bottom: 10px;
        color:#666;
    }
    .i-box-tlt{
        text-align: center;
        color:#666;
    }
    .line-serve{
        padding: 20px;
    }
    .border-bottom{
        border-bottom-width: 1px;
        border-bottom-color: rgba(0,0,0,.15) ;
    }
    .i-c-orange{
        color:#ff744d;
    }
    .i-c-yellow{
        color:#f6a121;
    }
    .i-c-blue{
        color:#689de5;
    }
</style>

<script>

    export default {
        data () {
            return {
            }
        },
        components: {
        },
        methods: {
            jumpTo(to){
                 this.$router.push(to)
            }
        }
    }
</script>