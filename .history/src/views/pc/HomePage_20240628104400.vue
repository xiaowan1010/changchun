<template>
  <div class="home">
    <div class="top">
      <div class="comName">CCKJ常淳</div>
      <div class="menu">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#252525"
          text-color="#fff"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">产品中心</el-menu-item>
          <el-menu-item index="3">关于我们</el-menu-item>
          <el-menu-item index="4">生产制造中心</el-menu-item>
          <el-menu-item index="4">技术支持</el-menu-item>
          <el-menu-item index="4">招贤纳士</el-menu-item>
        </el-menu>
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
  </div>
</template>

<script>
// import home from "./home.vue";
// import AboutUs from "./AboutUs.vue";
export default {
  name: "HomeView",
  // components: {
  //   home,
  //   AboutUs,
  // },
  data() {
    return {
      imgs: ["1", "2", "3"],
      activeIndex2: "1",
      isFocus: false,
    };
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      this.isFocus = false;
    },
    handleSelect(val) {
      this.activeIndex2 = val;
      console.log(val);
    },
  },
};
</script>
<style scoped lang="scss">
/* 在小屏幕设备上应用特定样式 */
@media screen and (max-width: 600px) {
  /* 样式和布局代码 */
  .colors {
    color: aqua;
  }
  .comName {
    display: none;
  }
  // .menu {
  //   ::v-deep .el-submenu__title {
  //     padding: 0 12px !important;
  //   }
  //   ::v-deep .el-dropdown-menu__item,
  //   .el-menu-item {
  //     padding: 0 12px !important;

  //   }
  //   // ::v-deep .el-menu.el-menu--horizontal {
  //   //   border-bottom: none;
  //   // }
  // }
}

/* 在大屏幕设备上应用特定样式 */
@media screen and (min-width: 600px) {
  /* 样式和布局代码 */
  .colors {
    color: pink;
  }
}
html,
body {
  margin: 0;
  padding: 0;
}

.home {
  position: relative;
  height: 100%;
  width: 100%;
}

.top {
  z-index: 99;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  padding: 0 32px;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #252525;
  color: #fff;
  text-align: left;
  display: flex;

  .comName {
    font-size: 28px;
    font-weight: 600;
    margin-right: 50px;
  }

  .menu {
    // ::v-deep .el-submenu__title {
    //   padding: 0 40px;
    // }
    ::v-deep .el-menu--horizontal > .el-menu-item.is-active {
      border-bottom: none;
    }
    /* 覆盖选中状态的背景色和文字颜色 */
.el-menu-item.is-active {
  background-color: rgba(255,255,255,0) !important; /* 你想要的高亮颜色 */
  color: #fff;
}
    ::v-deep .el-menu.el-menu--horizontal {
      border-bottom: none;
    }
  }
}
</style>
