<template>
  <div class="home">
    <div class="card">
      <img src="@/assets/images/1.jpg" alt="" />
    </div>
    <div class="main">
        <div class="top-title">封测产品</div>
        <div class="main-item" v-for="(item, index) in cards" :key="index">
        <div>{{ item.text }}</div>
      </div>
    </div>
    <div class="main">
        <div class="top-title">固态硬盘系列</div>
        <div class="main-item" v-for="(item, index) in cards" :key="index">
        <div>{{ item.text }}</div>
      </div>
    </div>
    <div class="main">
        <div class="top-title">闪存盘系列</div>
        <div class="main-item" v-for="(item, index) in cards" :key="index">
        <div>{{ item.text }}</div>
      </div>
    </div>
    <div class="main">
        <div class="top-title">内存系列</div>
        <div class="main-item" v-for="(item, index) in cards" :key="index">
        <div>{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
      cards: [
        {
          img: "1",
          text: "TF卡",
        },
        {
          img: "1",
          text: "TF卡",
        },
        {
          img: "1",
          text: "TF卡",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.card {
  height: 600px;
  width: 100%;

  img {
    width: 100%;
    height: 600px;
  }
}
.main{
   .main-item{

   } 
}
</style>