<template>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
    components: {
        HelloWorld
    },
    data() {
        return {
            // 商品列表
            goodsList: []
        }
    },
    methods: {
        // 获取商品列表
        getGoodsList() {
            this.$http.get('/api/goods').then(res => {
                this.goodsList = res.data
            })
        },
        // 遍历goodsList，过滤id大于10的商品
        filterGoods() {
            this.goodsList = this.goodsList.filter(item => item.id > 10)
        },
        // 累加商品价格
        sumGoodsPrice() {
            let sum = 0
            this.goodsList.forEach(item => {
                sum += item.price
            })
            return sum
        },
        /**
         * 新增商品
         * @param {name} name 商品名称
         * @param {Number} code 商品编码
         * @param {Number} price 商品价格
         */
        addGoods(name, code, price) {
            this.$http.post('/api/goods', {
                name,
                code,
                price
            }).then(res => {
                this.goodsList.push(res.data)
            })
        }
    },
}
</script>

<style  scoped>
</style>