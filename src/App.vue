<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <!-- <router-view/> -->
    <div class="top">
      <div style="display: flex">
        <div class="comName">CCKJ常淳</div>
        <div class="menu">
          <div
            class="menus"
            v-for="(item, index) in tabs"
            :key="index"
            @click="goPage(item.routerName)"
          >
            <div class="menus">
              <div class="menus-item">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="rightText">
        <span v-for="(item, index) in texts" :key="index">
          {{ item }}
          <el-divider
            v-if="index !== texts.length - 1"
            direction="vertical"
          ></el-divider>
        </span>
        <span style="margin-left: 20px">
          <span v-for="(item, index) in texts1" :key="index">
            {{ item }}
            <el-divider
              v-if="index !== texts.length - 1"
              direction="vertical"
            ></el-divider>
          </span>
        </span>
      </div>
    </div>
    <router-view />
    <footer1></footer1>
    <!-- <home-pc v-if="pc"></home-pc>
    <home-mobile v-else></home-mobile> -->
  </div>
</template>

<script>
import homePc from "./views/pc/HomePage.vue";
import footer1 from "./views/pc/components/footer.vue";
import homeMobile from "./views/mobile/home.vue";
export default {
  data() {
    return {
      pc: true,
      texts: ["走", "进", "常", "淳"],
      texts1: ["从", "芯", "开", "始"],
      activeIndex: 0,
      tabs: [
        {
          name: "首页",
          routerName: "HomePage",
        },
        {
          name: "产品中心",
          routerName: "ProductCenter",
        },
        {
          name: "关于我们",
          routerName: "AboutUS",
        },
        {
          name: "生产制造中心",
          routerName: "HomePage",
        },
        {
          name: "技术支持",
          routerName: "HomePage",
        },
        {
          name: "生产制造中心",
          routerName: "招贤纳士",
        },
      ],
    };
  },
  components: {
    homePc,
    homeMobile,
    footer1,
  },
  created() {
    // 获取当前设备的宽度，设置rem的根字体大小
    let width = window.innerWidth;
    width = width <= 1200 ? 1200 : width;
    if (width > 1200) {
      this.pc = true;
    } else {
      this.pc = false;
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
  mounted() {},

  methods: {
    goPage(val) {
      this.$router.push({ name: val });
    },
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
.top {
  z-index: 99;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  padding: 0 60px;
  width: 100%;
  height: 80px;
  line-height: 80px;
  background-color: #252525;
  color: #fff;
  text-align: left;
  display: flex;
  justify-content: space-between;

  .comName {
    font-size: 28px;
    font-weight: 600;
    margin-right: 50px;
  }

  .menu {
    font-size: 16px;
    color: #fff;
    font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
    display: flex;
    align-items: center;
    width: 60%;
    white-space: nowrap;
    .menus {
      white-space: nowrap;
      margin-right: 10%;
      :hover {
        cursor: pointer;
      }
    }
  }
}
.rightText {
  white-space: nowrap;
  span {
    font-size: 16px !important;
  }
}
</style>
