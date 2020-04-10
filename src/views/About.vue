<template>
  <div class="home">
    home
    <div class="home-item">adasds</div>
    <div class="iconfont icon-iconfonthome0"></div>
    <div>-----------------------------------</div>
<el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>

 </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css';
export default {
  name: "home",
  data() {
    return {
      qingqiu: {},
      show: false
    };
  },
  components: {

  },
  mounted() {
    this.$axios.get("http://").then(res => {
      console.log(res);
      this.qingqiu.data = res;
    });
    console.log(this.qingqiu);
  },
  methods: {
  },

};
</script>

<style lang="scss" scoped>
.home {
  &-item {
    color: red;
  }
}
</style>