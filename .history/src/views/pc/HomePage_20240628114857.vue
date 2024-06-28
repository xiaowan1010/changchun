<template>
  <div class="home">
    <div class="top">
      <div class="comName">CCKJ常淳</div>
      <div class="menu">
        <div class="menus" v-for="(item,index) in tabs" :key="index">
          <div class="menus-item">{{ item }}</div>
        </div>
      </div>
    </div>
    <div class="card">
      <el-carousel :interval="2000" arrow="always">
        <el-carousel-item v-for="item in imgs" :key="item">
          <img :src="require('@/assets/images/' + item + '.jpg')" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 
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
      tabs: ["首页","产品中心","关于我们","生产制造中心","技术支持","招贤纳士"],
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
  height: 80px;
  line-height: 80px;
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
    font-size: 16px;
    color: #fff;
    font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
    display: flex;
    align-items: center;
    .menus {
      margin-right: 40px;
    }
  }
}
.card {
    height: 800px;
    width: 100%;

    img {
        width: 100%;
        height: 800px;
    }

    ::v-deep .el-carousel--horizontal {
        height: 800px;
    }

    ::v-deep .el-carousel__container {
        height: 800px;
    }
}
</style>
