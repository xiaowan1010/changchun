<template>
  <div class="home">
    <div class="card">
      <img src="@/assets/images/1.jpg" alt="" />
    </div>
    <div class="count">
      <div class="count-item" v-for="item in counts" :key="item">
        <div>{{ item.name }}</div>
        <div class="num">{{ item.num }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counts: [
        {
          name: "占地面积",
          num: "15",
        },
        {
          name: "规划投资",
          num: "10亿",
        },
        {
          name: "年产值",
          num: "8",
        },
        {
          name: "合作伙伴",
          num: "200+",
        },
      ],
    };
  },
  //   methods: {},
};
</script>

<style scoped lang="scss">
.card {
  height: 600px;
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: 600px;
  }
}
.count {
  width: 80%;
  height: 120px;
  background: #fff;
  position: absolute;
  top: 620px;
  left: 10%;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .count-item {
    padding: 0 8%;
    text-align: center;
    .num {
      font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
      font-weight: normal;
      font-size: 48px;
      color: #008fd7;
      line-height: 56px;
    }
  }
}
</style>