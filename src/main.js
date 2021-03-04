import Vue from 'vue'
import  {BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import about from  './components/about.vue'
import home from './components/home.vue'

import App from './App.vue'
import VueRouter from 'vue-router';
Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes =[
    {path: '/about' , component :about},
    {path: '/' ,component:home}
];

const router = new VueRouter({
   routes
});



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
