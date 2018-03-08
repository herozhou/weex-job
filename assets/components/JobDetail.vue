<template>
    <div class="wrapper">
      <div class="head">
        <text @click="goback" class="back iconfont">&#xe622;</text>
       <text class="title">详情</text> 
        <text @click="addCollection" class="back iconfont" :style="{ 'color': activeColor }">&#xe601;</text>

    </div>
        <div v-html="job_detail" style="margin-bottom:100px"></div>

    </div>
</template>
<style scoped>
.wrapper{
  margin-top:50px;
  margin-bottom: 50px;
}
  .list{
    justify-content: center;
    margin-top: 120px;
    margin-bottom: 100px;
  }

  p{
    line-height: 1.6;
  }
  .head {
  align-items: center;
  border-bottom: 1px solid #f8f8f8;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  z-index: 1000;
  flex-direction: row;
  background-color: #f7f7f7;
}
.back {
  width:30px;
  text-align: center;
  font-size:25px;
  font-weight: 500;
}
.title {
  flex: 1;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
}
</style>

<script>
     const modal = weex.requireModule('modal')
     const stream = weex.requireModule('stream')
 const storage = weex.requireModule('storage')


  const LOADMORE_COUNT = 4

  export default {
      components: {
        },
    data () {
      return {
        activeColor: '#cdcdcd',
        job_detail:'',
        job_id:0,
      }
    },
    methods: {
    
      getJobList (api,callback) {
        return stream.fetch({
          method: 'GET',
          type: 'json',
          url: 'http://192.168.43.75:8880'+api
        }, callback)
      },
      postApi (api,user_info_str,callback) {
        return stream.fetch({
          method: 'POST',
          type: 'json',
          headers:{
            "Content-Type": 'application/x-www-form-urlencoded'
          },
          body: user_info_str,
          url: 'http://192.168.43.75:8880'+api
        }, callback)
      },
      jumpTo(id){
        this.$router.push('job_detail/'+id)
      },
       goback(){
            this.$router.go(-1);
        
      },
      addCollection(){
        const id = this.job_id;
        const user_info = this.$store.getters.getUserInfo;
        const collection = user_info.collection;
        const user_id = user_info.id;
        const job_list = this.$store.getters.getJobList[0];
        let job_item = job_list.filter(e =>{
              return e.id===id;
          })[0]

        if(this.checkCollectionId(id)){
         
          const index = user_info.collection.indexOf(job_item)
          user_info.collection.splice(index,1);
        
          let user_info_str = JSON.stringify(user_info);

          storage.setItem('user_info', user_info_str, event => {
              this.postApi('/add_collection', user_info_str,res => {
                      if(res.ok){
                          modal.toast({ message: '取消收藏', duration: 1 })
                           this.activeColor = '#cdcdcd';
                      }
                })

           }) 
        }
        else {
                  user_info.collection.push(job_item);
                   let user_info_str = JSON.stringify(user_info);
               storage.setItem('user_info', user_info_str, event => {
                      this.postApi('/add_collection', user_info_str,res => {
                        if(res.ok){
                            modal.toast({ message: '收藏成功', duration: 1 })
                             this.activeColor = '#f4ea2a';
                        }
                      })
                  }) 
        }
      },
      checkCollectionId(id){
        console.log(this.$store.getters.getUserInfo)
         const collection = this.$store.getters.getUserInfo.collection;
          if(collection && collection.length>0 ){
            return  collection.some(e => {
                    return e.id === id;
              })
          }
      }
    },
     created () {
      const id = this.$route.params.id;
      this.job_id = id;

        if(this.checkCollectionId(id)){
            this.activeColor = '#f4ea2a';
        }
        
      this.getJobList('/job_detail/'+id, res => {
      
        this.job_detail = res.ok ? res.data.text : '(network error)'
      })
    }

  }
</script>