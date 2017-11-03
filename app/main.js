import Vue from 'vue'
import App from './App.vue'
import router from './vue-router.js'


import './main.css'

//import './assets/sass/reset.sass'//报错暂时不用sass
Vue.config.debug = true;//开启错误提示

new Vue({
    router,
    el: '#main',
    render: h => h(App)
})