#   vue3.0脚手架

####  安装相应的包组件
npm install

---
####  运行环境
npm run serve

---
####  打包环境
npm run build

---
####  内置安装vue
axios  vuex  vue-router  scroll  swiper

---
####  封装组件
swiper(轮播) scroll(滚动) toast(提示)

---
####  axios:两种方式使用
1：this.$axios.get("网址").then(res => {console.log(res)})
async在异步操作await同步执行let $net = await this.$axios.get("网址")

2：通过引入的方式import{ 名称 } from "@/network/home"......

---
####  css可使用scss编写 
scss

---
###  框架使用了ElementUI-见min.js
使用见官方文档，每个页面单独引入使用的插件，官网：https://element.eleme.cn/
使用的时候需要在min.js中引入，可以全部引入，可以使用到那个引用那个，css需要单独引入一下，组件内可以直接使用


