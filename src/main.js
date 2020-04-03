import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 1.引入axios
import axios from 'axios'

// 引入Vant UI组件的样式
import 'vant/lib/index.css'

//  自定义的插件
import toast from './components/common/toast'

Vue.config.productionTip = false

// 2.把axios绑定到vue实例的属性$axios
Vue.prototype.$axios = axios

// 安装子级定义的插件toast
Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
