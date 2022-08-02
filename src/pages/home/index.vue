<template>
    <div @click="start">home</div>
</template>

<script>
import Pinyin from 'pinyin-match';

export default {
    data() {
        return {
        }
    },
    mounted(){
        
    },
    methods:{
        start(){
            var list = [
                {"COMM_TYPE":"33","CATALOG":"2021031200075110","COMM_NAME":"0516测试-商品受理移网-山西","DESCRIPTION":"0516测试-商品受理移网-山西","COMM_DIVIDE":"03","START_DATE":"20220516173337","CREATE_TIME":"20220516093337","ONE_TIME_PRICE":"","COMM_PIC":"","LABEL_INFO":[],"COMM_ID":192205163436,"SPEC_INFO":[]},
                {"COMM_TYPE":"212","CATALOG":"2021031200075110","COMM_NAME":"0225测试-热销主副卡-山西G","DESCRIPTION":"0225测试-热销主副卡G-山西","COMM_DIVIDE":"03","CREATE_TIME":"20220225104934","ONE_TIME_PRICE":"0","COMM_PIC":"","COMM_ID":192202253300,"SPEC_INFO":[]},
                {"COMM_TYPE":"33","CATALOG":"2021031200075110","COMM_NAME":"0217测试-商品受理移网-山西","DESCRIPTION":"0217测试-商品受理移网-山西","COMM_DIVIDE":"03","CREATE_TIME":"20220217105722","ONE_TIME_PRICE":"0","COMM_PIC":"","COMM_ID":192202172892,"SPEC_INFO":[]},
                {"COMM_TYPE":"33","CATALOG":"2021031200075110","COMM_NAME":"商品受理","DESCRIPTION":"0104测试-主副卡开户-山西","COMM_DIVIDE":"03","CREATE_TIME":"20220104155156","ONE_TIME_PRICE":"0","COMM_PIC":"","COMM_ID":192201049713,"SPEC_INFO":[]},
                {"COMM_TYPE":"33","CATALOG":"2021031200075110","COMM_NAME":"1231测试-商品受理移网-山西","DESCRIPTION":"1231测试-商品受理移网-山西","COMM_DIVIDE":"03","CREATE_TIME":"20211231180049","ONE_TIME_PRICE":"0","COMM_PIC":"","COMM_ID":191212319410,"SPEC_INFO":[]}
            ]
            var ll = this.pinYinSearch(list,'商品受理','COMM_NAME')
            console.log(ll)
        },
        /*
        * 搜索方法(支持拼音/首拼搜索)
        * @param {Array} list 搜索数据列表
        * @param {String} value 搜索关键字
        * @param {String} key 为对象时需要传入对象键名
        */
        pinYinSearch( list,value,key) {
            let resList = [];
            if (key) {
                resList =list.filter(item => {
                    return Pinyin.match(item[key], value)
                })
            } else {
                resList = list.filter(item => {
                    return Pinyin.match(item,value)
                })
            }
            return resList.sort((a, b) => {
                return a[key].length - b[key].length
            })
        }
    }
}
</script>

<style scoped>
</style>