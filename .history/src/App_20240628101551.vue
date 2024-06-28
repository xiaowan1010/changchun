<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <!-- <router-view/> -->
    <home-pc v-if="pc"></home-pc>
    <home-mobile v-else></home-mobile>
  </div>
</template>

<script>
import homePc from './views/pc/HomePage.vue';
import homeMobile from './views/mobile/home.vue';
export default {
  data() {
    return {
      pc: true
    };
  },
  components: {
    homePc, homeMobile
  },
  created() {
    // 获取当前设备的宽度，设置rem的根字体大小
    let width = window.innerWidth;
    width = width <= 1200 ? 1200 : width;
    if (width > 1200) {
        this.pc = true
      } else {
        this.pc = false
      }
    const htmlObj = document.getElementsByTagName("html")[0];
    htmlObj.style.fontSize = width / 76.8 + "px";
    // 对resize事件进行浏览器兼容处理
    if (document.createEvent) {
      var event = document.createEvent("HTMLEvents");
      event.initEvent("resize", true, true);
      window.dispatchEvent(event);
    } else if (document.createEventObject) {
      window.fireEvent("onresize");
    }

    // 监听页面resize事件，重新设置rem的根字体大小
    window.onresize = function () {
      let width = window.innerWidth;
      width = width <= 1200 ? 1200 : width;
      htmlObj.style.fontSize = width / 76.8 + "px";
    };

  },
  mounted() {

  },

  methods: {

  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
