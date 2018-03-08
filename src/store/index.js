import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
 const storage = weex.requireModule('storage')

// Vuex is auto installed on the web
if (WXEnvironment.platform !== 'Web') {
  Vue.use(Vuex)
}
/*
 {
      id:'000001',
      name: 'herozhou',
      login_time:'2017.10.5',
      collection: getStorageCollection(),
    },
*/

const store = new Vuex.Store({
  actions,
  mutations,

  state: {
    activeType: null,
    items: {},
    job_list: [],
    user:getStorageUserInfo()
    
  },

  getters: {
     getUserInfo: state => {
      return getStorageUserInfo()
    },
      getJobList: state => {
      return state.job_list
    },

  }
})
function getStorageUserInfo(){
    let user_info=[];
    storage.getItem('user_info', event => {
              if(event.result === 'success'){

                 user_info = JSON.parse(event.data);
              }
        })
    console.log('vuex')
    console.log(user_info)

    return user_info;
}

export default store
