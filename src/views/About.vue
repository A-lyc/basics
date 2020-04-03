<template>
  <div class="home">
    home
    <div class="home-item">adasds </div>
    <div class="iconfont icon-iconfonthome0" ></div>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "vant";
Vue.use(Button);
export default {
  name: "home",
  data () {
    return { 
      qingqiu:{},
    }
  },
  mounted() {
    this.$axios.get("http://").then(res => {
      console.log(res)
      this.qingqiu.data = res
      });
      console.log(this.qingqiu)

  },
};
</script>
<style lang="scss" scoped>
  .home{
    &-item{
      color:red
    }
  }
</style>