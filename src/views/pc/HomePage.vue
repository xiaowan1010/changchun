<template>
  <div class="home">
    <div class="card">
      <el-carousel :interval="2000" arrow="always">
        <el-carousel-item v-for="item in imgs" :key="item">
          <img :src="require('@/assets/images/' + item + '.jpg')" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <product v-if="activeIndex==0"></product>
  </div>
</template>

<script>
// import home from "./home.vue";
import product from "./components/product.vue";
export default {
  name: "HomeView",
  components: {
    product,
  },
  data() {
    return {
      activeIndex:0,
      imgs: ["1", "2", "3"],
      isFocus: false,
    };
  },
  methods: {

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
  background: #F9F9F9;
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
