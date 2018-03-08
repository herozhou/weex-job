
import router from './router'
const stream = weex.requireModule('stream')
 const storage = weex.requireModule('storage')
     const modal = weex.requireModule('modal')

 function  postApi (api,user_name,callback) {
                return stream.fetch({
                  method: 'POST',
                  type: 'json',
                  headers:{
                    "Content-Type": 'application/x-www-form-urlencoded'
                  },
                  body: user_name,
                  url: 'http://192.168.43.75:8880'+api
                }, callback)
           }

var checkUserAllInfo =function(user_info,storage_user_info) {
  var promise = new Promise(function(resolve, reject){
      
       if(storage_user_info.id === user_info.id   && 
          storage_user_info.user_name === user_info.user_name && 
          storage_user_info.login_time === user_info.login_time ){

          if( storage_user_info.collection.length === user_info.collection.length ){
             resolve();
          }else {
              let str_user_info = JSON.stringify(user_info);
              storage.setItem('user_info', str_user_info, event => {
                            resolve();
                  }) 
          }

       }else {
            reject("登录信息失效")
       }
  });
  return promise;
};

var checkUserLogin =function() {
  var promise = new Promise(function(resolve, reject){
      
       storage.getItem('user_info', event => {
              if( event.result === "failed"){
                reject("未登录")
              }else {
                  let  storage_user_info = JSON.parse(event.data);

                     postApi('/user_info', storage_user_info.user_name, res => {
                      if(!res.ok) return ;
                      let user_info =  res.data;
                      let str_user_info = JSON.stringify(user_info[0]);
                       storage.setItem('user_info', str_user_info, event => {
                            resolve();
                     }) 
                  })
              }
        })


  });

  return promise;
};
        router.push('/');

const needLoginList = ['/my','/notice']
router.beforeEach((to, from, next) => {
    if( needLoginList.indexOf(to.path)===-1){
      next();
    }else {
        checkUserLogin().then(()=>{
            next();
        },(error)=>{
           modal.toast({ message: error, duration: 1 })
           next({ path: '/login' })
        })
	 }
})
