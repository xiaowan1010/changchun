<template>
  <div class="home">
    <div class="top">
      <div class="comName">CCKJ常淳</div>
      <div class="menu">
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
          background-color="#000" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">产品中心</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">解决方案</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">投资者关系</el-menu-item>
          <el-menu-item index="4">关于常淳</el-menu-item>
          <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">关于常淳</a></el-menu-item> -->
        </el-menu>
      </div>
      <div class="search">
        <el-input placeholder="产品搜索" v-model="input3" class="input-with-select">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
    <!-- <div class="card">
      <el-carousel :interval="2000" arrow="always">
        <el-carousel-item v-for="item in imgs" :key="item">
          <img :src="require('@/assets/images/' + item + '.jpg')" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <product v-if="activeIndex2 == 1"></product> -->
    <home v-if="activeIndex2 == 1"></home>
    <AboutUs v-if="activeIndex2 == 4"></AboutUs>
  </div>
</template>

<script>
import home from './home.vue';
import AboutUs from './AboutUs.vue';
export default {
  name: 'HomeView',
  components: {
    home, AboutUs
  },
  data() {
    return {
      imgs: ['1', '2', '3'],
      input3: '',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(val) {
      this.activeIndex2 = val
      console.log(val)
    },
  }
}
</script>
<style scoped lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}

.top {
  box-sizing: border-box;
  position: relative;
  padding: 0 32px;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #000;
  color: #fff;
  text-align: left;
  display: flex;

  .comName {

    font-size: 28px;
    font-weight: 600;
    margin-right: 50px;
  }

  .menu {
    ::v-deep .el-submenu__title {
      padding: 0 50px;
    }
  }

  .search {
    position: absolute;
    right: 32px;
    width: 320px;

    ::v-deep .el-input__inner {
      background-color: #000;
      height: 32px;
      line-height: 32px;
    }
  }
}
</style>
