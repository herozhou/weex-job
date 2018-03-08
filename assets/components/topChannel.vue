<template>
    <div class="wrapper">
        <scroller class="scroller"  scroll-direction="horizontal" flex-direction="row" loadmoreoffset="750px" show-scrollbar=false>
            <text  :class="item.classList" v-for=" (item,index) in tag_list" @click="chooseChannel(index)">{{item.title}}</text>

        </scroller>
        <text class="more iconfont">&#xe611;</text>
    </div>
</template>
<style scoped>

   
    .wrapper{
        position: fixed;
        top: 114px;
        left: 0;right: 0;
        height: 54px;
        z-index: 10;
        background-color: #fafafa;
        border-bottom-width: 1px;
        border-bottom-color: #d9d9d9;
    }
    .scroller{
        height: 54px;
    }
    .i-c{
        padding-top:10px;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom:6px;
        margin-left: 30px;
        margin-right: 30px;
        color:#333;
    }
    .c-act{
        color:rgb(16, 142, 233);
        border-bottom-color: rgb(16, 142, 233);
        border-bottom-style: solid;
        border-bottom-width: 4px;
    }
  
    .more{
        position: absolute;
        top:0;
        right:0;
        height: 52px;
        width: 100px;
        background-color: #fafafa;
        text-align: center;
        padding-top: 10px;
        opacity: 0.9;
        box-shadow:-6px -4px 4px #fafafa;
    }
</style>
<script>
    const dom = weex.requireModule('dom');
    const animation = weex.requireModule('animation')
    const modal = weex.requireModule('modal')
    export default {
        data () {
            return {
                tag_list:[
                   { title:'全部',classList : ['i-c', 'c-act']},
                   { title:'BAT',classList : ['i-c']},
                   { title:'前端',classList : ['i-c']},
                   { title:'后端',classList : ['i-c']},
                   { title:'Android',classList : ['i-c']},
                   { title:'IOS',classList : ['i-c']},
                   { title:'测试',classList : ['i-c']},
                    { title:'算法',classList : ['i-c']},
                   { title:'人工智能',classList : ['i-c']},
                   { title:'计算机视觉',classList : ['i-c']},
                   { title:'Node',classList : ['i-c']},
                   { title:'Java',classList : ['i-c']},
                   { title:'Go',classList : ['i-c']},
                   { title:'Python',classList : ['i-c']},
                   { title:'PHP',classList : ['i-c']},
                   { title:'Ruby',classList : ['i-c']},
                   { title:'Linux',classList : ['i-c']},
                   { title:'数据',classList : ['i-c']},
                   { title:'  ',classList : ['i-c']},

                ]
            }
        },
        methods: {
            chooseChannel: function (index) {
                    this.tag_list.forEach((e) =>{
                            e.classList= ['i-c'];
                    })
                    this.tag_list[index].classList.push('c-act');
                    this.$emit('changeEvent',this.tag_list[index].title);
            }
        }
    }
</script>


