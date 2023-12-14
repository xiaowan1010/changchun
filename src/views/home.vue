<template>
    <div>
        <div class="card">
            <el-carousel :interval="2000" arrow="always">
                <el-carousel-item v-for="item in imgs" :key="item">
                    <img :src="require('@/assets/images/' + item + '.jpg')" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <h1>精选产品</h1>
        <!-- <product v-if="activeIndex2 == 1"></product> -->
    </div>
</template>

<script>
export default {
    name: 'ChangchunHome',

    data() {
        return {
            imgs: ['1', '2', '3'],
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
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