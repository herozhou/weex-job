<template>
    <div class="wrapper">
        
        <scroller class="main-list" offset-accuracy="300px">
            
    <div style="flex-direction:row;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#ffda44;aligin-items:center;">
        <image style="width: 60px;height: 60px;flex:1;border-radius:60px" src="https://sukura7.github.io/vue-xianyu-demo/static/1.png"></image>

        <div style="flex:6;flex-direction:cloum;">
            <text style="padding:5px;font-size:20px">通知</text>
            <text style="color:#888;padding:5px;">咸鱼奇葩说|18分钟前</text>

        </div>
            </div>
        </scroller>
    </div>
</template>
<style scoped>
body{
    background-color: white;
}
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: white;
    }
    .main-list{
        margin-bottom: 90px;
        background-color: white;

    }
    .slogan{
        position: absolute;
        top:110px;
        width: 750px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .i-slg{
        height: 66px;
        
        padding-top: 16px;
        flex: 1;
        text-align: center;
        color: #b4282d;
    }
    .shop-cart{

    }
  
</style>

<script>
 
    export default {
    }
</script>