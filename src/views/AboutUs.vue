<template>
    <div>
        <div class="back">
            <div class="text">
                浙江常淳科技有限公司定位专注于存储芯片研发与封装制造的企业，主要从事半导体芯片的封装、封测、贴片以及固态硬盘、内存产品的生产，以满足中国市场日益增长的需求。公司致力于存储解决方案研发、先进封测、芯片测试设备研发等高新技术，构筑了研发封测一体化的经营模式。公司存储芯片产品广泛应用于移动存储、智能终端、PC应用、行业终端、数据中心、汽车电子、消费电子等信息技术领域，未来工厂总部将持续不断地加大投入开发高性能、低功耗、多功能的智能存储芯片。
                常淳科技原厂合作伙伴有三星、海力士、英特、美光、长江存储、长芯科技等知名企业，与浙江大华、海康威视、汇通达、浪潮智能、万佳安物联等企业建立了战略合作关系，组建了在智能芯片、半导体存储制造、微组装等领域经验丰富的专业技术团队，联合广东工业大学搭建了产学研合作，输出专业人才的培养。常淳科技秉承为客户提供优质的技术产品方案，不断优化业务结构和提升服务品质的理念，立足中国，服务全球。
            </div>
            <img src="../assets/images/floor.png" alt="">
        </div>
        <div class="tabs">
            <div v-for="(item, index) in tabs" :key="index" class="tabs-item">
                <div class="tab">{{ item.value }}</div>
                <div class="label">{{ item.label }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChangchunAboutUs',

    data() {
        return {
            tabs: [
                {
                    label: '注册资金',
                    value: '8000万'
                },
                {
                    label: '占地面积',
                    value: '15万㎡'
                },
                {
                    label: '规划投资',
                    value: '10亿'
                },
                {
                    label: '年产值',
                    value: '10亿'
                },
                {
                    label: '3000万',
                    value: '年税收'
                },
                {
                    label: '合作伙伴',
                    value: '200+'
                }

            ]
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
html,
body {
    margin: 0;
    padding: 0;
    font-family: PingFang SC;
}

.back {
    display: flex;
    width: 100%;
    height: 500px;
    background-image: linear-gradient(to right,
            rgb(0, 8, 14),
            rgb(165, 183, 240));

    img {
        height: 500px;
        width: 50%;
    }

    .text {
        text-align: left;
        margin: 40px;
        color: white;
        font-size: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}

.tabs {
    display: flex;
    justify-content: space-between;
    margin: 30px 180px;

    .tabs-item {
        font-size: 24px;
        font-weight: 600;

        .tab {
            color: #fff;
            margin-bottom: 10px;
            padding: 5px 25px;
            border-radius: 5px;
            background-color: rgb(8, 236, 252);

        }

        &:nth-child(2n) .tab {
            background-color: rgb(8, 106, 252);
        }


        .label {
            font-size: 22px;
            font-weight: 400;
        }
    }

}
</style>