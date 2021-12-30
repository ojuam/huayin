<template>
  <div>
    <br><br><br><br>
    <h2 style="text-align:center">{{msg}}</h2>
    
    <el-divider id="divider1"></el-divider>
  </div>
</template>

<script>
export default {
  name: 'Divider',
  data () {
    return {
      msg: '华银精治为合作伙伴提供私募管家创新平台',
    }
  }
}
</script>

<style>
  h2{
    color: rgb(75, 74, 74);
  }
  p{
    color:darkgrey;
  }
  #divider1{
    margin:0 auto;
    width: 100px;
    border-top: 3px solid #CB0C0F;
  }
</style>

