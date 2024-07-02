<template>
  <div class="product">
    <div class="title">产品精选</div>
    <div class="content">
      <div class="card" v-for="(item, index) in cards" :key="index">
        <div>{{ item.text }}</div>
      </div>
    </div>
    <div class="market">
      <div class="title">市场需求</div>
      <div class="market-demand">
        <div class="left">
          {{text}}
        </div>
        <div class="right">222</div>
      </div>
    </div>
      <div class="title">专业领域</div>
      <div class="content">
      <div class="card" v-for="(item, index) in cards" :key="index">
        <div>{{ item.text }}</div>
      </div>
    </div>
    <div class="market">
      <div class="title">核心需求</div>
      <div class="market-demand">
        <div class="left">
          {{text}}
        </div>
        <div class="right">222</div>
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
      text:"集成电路作为信息技术产业的核心，是支撑经济社会发展和保障国家安全的战略性、基础性和先导性产业，是培育发展战略性新兴产业、推动信息化和工业化深度融合的基础，同时也是工业强基工程的重要支撑。根据中国电子专用设备工业协会对中国大陆77家主要半导体设备制造公司（年销售收入1000万元以上）的统计，2022年中国半导体设备的销售收入完成了593.0亿元，同比增长53.6%；半导体设备出口交货值70.8亿元，同比增长119.2%；总利润达到149.5亿元，同比增长66.1%。从2019年到2022年，中国半导体设备销售收入从175.1亿增长到593亿人民币，年均增长率达到了48.3%。细分赛道来看，集成电路设备销售收入2022年达到319亿元，同比增长86.1%，是所有赛道中增长速度最快，也是实现销售收入最多的市场；同时集成电路设备也是出口交货值最大的赛道"
    };
  },
};
</script>

<style scoped lang="scss">
.product {
  width: 100%;
  background: none;
  color: rgba(0, 0, 0, 0.65);
  .title {
    font-size: 36px;
    padding: 60px 0;
    color: rgba(0, 0, 0, 0.65);
  }
  .content {
    padding: 0 60px;
    display: flex;
    justify-content: space-between;
    .card {
      width: 586px;
      height: 340px;
      background-color: #fff;
      box-shadow: 0px 2px 0px 0px rgba(217, 217, 217, 0.4);
      margin-right: 20px;
    }
  }
  .market {
    margin-top: 60px;
    padding: 0 62px 51px 60px;
    background-color: #fff;
    .market-demand {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .left {
        margin-right: 60px;
        width: 40%;
        font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 20;
        font-size: 24px;
        color: rgba(0, 0, 0, 0.65);
      }
      .right {
        width: calc(60% - 60px);
      }
    }
  }
}
</style>