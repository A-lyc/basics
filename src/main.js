import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全部引入和安装组件
// import ElementUI from 'element-ui';
// Vue.use(ElementUI)

// 1.引入axios 2.把axios绑定到vue实例的属性$axios
import axios from 'axios'
Vue.prototype.$axios = axios

//  1.自定义的插件  2.安装子级定义的插件toast
import toast from './components/common/toast'
Vue.use(toast)

// 单独引入ElementUI中的Button和Select
//import 'element-ui/lib/theme-chalk/index.css';页面中单独引入
import {
  Button,
  Select
} from 'element-ui';
Vue.use(Button)
Vue.use(Select)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
