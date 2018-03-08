<template>
    <div class="app-wrapper">
        <router-view class="r-box"></router-view>
        <bottom-bar @tabTo="onTabTo"></bottom-bar>
    </div>
</template>
<style>
    body{
        margin: 0;
        padding: 0;
        background-color: white;
        color:#333;
    }

 .iconfont {
        font-family:iconfont;
    }

    .weex-text{
        font-size: 15px;
    }
</style>

<script>
    var modal = weex.requireModule('modal');
    import util from './assets/util';
    import BottomBar from '../assets/components/BottomBar.vue';

    export default {
        data () {
            return {
            }
        },
        components: {
            'bottom-bar': BottomBar
        },
        created () {
            util.initIconFont();
        },
        methods: {
            onTabTo(_result){
                let _key = _result.data.key || '';
                this.$router && this.$router.push('/'+_key)
            }
        }
    }
</script>