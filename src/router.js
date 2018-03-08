/**
 */
import Router from 'vue-router'
import ViewHome from '../assets/views/home.vue'
import JobDetail from '../assets/components/JobDetail.vue'
import Notice from '../assets/components/Notice.vue'
import My from '../assets/views/my.vue'
import ViewCommunity from '../assets/views/community.vue'
import MyCollection from '../assets/components/My/MyCollection.vue'
import Login from '../assets/views/Login.vue'

Vue.use(Router)


export default new Router({
    // mode: 'abstract',
    routes: [
         { path: '/home', component: ViewHome },
         { path: '/job_detail/:id', component: JobDetail },
         { path: '/my', component: My },
         { path: '/notice', component: Notice },
         { path: '/community', component: ViewCommunity },
         { path: '/mycollection', component: MyCollection },
         { path: '/login', component: Login },


         { path: '/', redirect: '/home' }
    ]
})