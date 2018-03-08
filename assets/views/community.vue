<template>
    <div class="wrapper">
        <header2  title="专题"></header2>
        <scroller class="main-list" offset-accuracy="300px">
            <div  class="cell-button" >
            <block-4 :topics="topics"></block-4>
            </div>
            <div v-for="ar in articles" class="cell-button">
                <block-5 :article="ar" url=""></block-5>
            </div>
        </scroller>
    </div>
</template>
<style scoped>

    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #f4f4f4;
    }
    .main-list{
        margin-top: 113px;
        margin-bottom: 90px;
    }
    .cell-button{
        padding-bottom: 18px;
    }

</style>

<script>
    import Header2 from '../components/Header2.vue';
    import Block4 from '../components/ViewCommunity/Block4.vue';
    import Block5 from '../components/ViewCommunity/Block5.vue';
    export default {
        data () {
            return {
                topics:[
                    {name:'严选look',img:'https://yanxuan.nosdn.127.net/15030393722652401.jpg'},
                    {name:'严选推荐',img:'https://yanxuan.nosdn.127.net/d943675462a06f817d33062d4eb059f5.jpg'},
                    {name:'挑款师推荐',img:'http://yanxuan.nosdn.127.net/437cc656ff529f8f84db6efc48df9bf4.png'},
                    {name:'丁磊私物推荐',img:'https://yanxuan.nosdn.127.net/1de4da49367dd7c01af1f7a2b23b0237.jpg'},
                ],
                articles:[
                    {auther:'Apple',autherImg:'http://yanxuan.nosdn.127.net/3d860cbf663253590da6a64ff07f9919.png?imageView&thumbnail=64y64',tlt:'Apple 校园招聘开始啦',info:'让你的热爱，成为你的职业。',price:'9.28',img:'http://www.sxsimg.com/BF/9B/BF4A3086BEF5FB04C2B663C7B2B2D79B.png'},
                    {auther:'HR：小明',autherImg:'https://yanxuan.nosdn.127.net/15041772608140418.png?imageView&thumbnail=64y64',tlt:'这可能是国内工作环境最好的公司',info:'天空之镜的既视感，美哭辣...',price:'',img:['https://pic3.zhimg.com/50/f1dab346d6995fc7283f1cffce3929da_hd.jpg','https://pic4.zhimg.com/50/19798d078fe7b10e193eaffbf77f1ceb_hd.jpg','https://pic1.zhimg.com/50/17579e5bdef238a7dfcfadeee90fa1fc_hd.jpg']},
                    {auther:'阿里小蜜',autherImg:'https://yanxuan.nosdn.127.net/15040896357740404.png?imageView&thumbnail=64y64',tlt:'阿里内推来了',info:'如果你想坐在双十一项目室里买买买，那就来天猫吧...',price:'',img:['https://img.alicdn.com/tps/TB1DVOZPpXXXXcuXFXXXXXXXXXX-918-677.png','https://img.alicdn.com/tps/TB1.paZPpXXXXa2XFXXXXXXXXXX-916-654.png','https://img.alicdn.com/tps/TB1F7CYPpXXXXbZXFXXXXXXXXXX-1000-750.jpg']},
                    {auther:'编辑推荐',autherImg:'http://yanxuan.nosdn.127.net/3d860cbf663253590da6a64ff07f9919.png?imageView&thumbnail=64y64',tlt:'打开github的正确格式',info:'找工作不贴github怎么有竞争力',price:'29',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1110612156,1998721484&fm=27&gp=0.jpg'},
                ]
            }
        },
        components: {
            'header2': Header2,
            'block-4': Block4,
            'block-5': Block5,
        },
        methods: {

           
        }
    }
</script>