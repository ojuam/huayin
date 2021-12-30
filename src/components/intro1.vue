<template>
  <el-card class="box-card" style="width:50%;margin-left: 30%;">
      <h4>{{msg}}</h4>
      <h4>{{msg}}</h4>
      <h4>{{msg}}</h4>
  </el-card>
</template>

<script>
export default {
  name: 'Intro1',
  data () {
    return {
      msg: '深圳市华银精治资产管理公司是中国顶尖的私募资产管理机构，中国基金业协会首批特别会员，前海股权交易中心首批挂牌企业。目前华银精治管理近百只基金，规模30亿元，投资业绩排列全国前茅，获得2016年和2015年全国私募业绩排名冠军。',
    }
  }
}
</script>

<style>
  h4{
      font-size: 16px;
      font-weight: 500;
  }
  .box-card {
    margin: 0 auto;
    margin-top: 1%;
    height: 100%;
    position:relative;
  }
</style>