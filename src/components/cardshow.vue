<template>
    <el-card id="box-card0" >
        <div slot="header" >
            <span style="color:white;">公司介绍</span>
        </div>
        <!-- <div v-for="o in 4" :key="o" class="text item">
            {{'公司介绍 ' + o }}
        </div> -->
    </el-card>
</template>

<script>
export default {
  name: 'Cardshow',
  data () {
    return {
      msg: ' ',
    }
  }
}
</script>

<style>
    
    .text {
    font-size: 14px;
    color: white;
  }

  .item {
    margin-bottom: 25px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  #box-card0 {
    width: 220px;
    height: 400px;
    background-color:#572d2d;
    position: absolute;
    margin-top: -100px;
    margin-left: 100px;
    z-index: 9999;
  }
</style>