<template>
  <el-row>
  <el-col :span="11" v-for="(o, index) in newslist" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card id="control-card">
      <el-col :span="6">
          <img src="../assets/11.png" class="image">
      </el-col>
      <el-col :span="18" id="control-left1">
          <a :href="'#/active/'+o.id"><h3>{{o.title}}</h3></a>
          <p v-html="o.content"></p>
      </el-col>
    </el-card>
  </el-col>
  <br>
  </el-row>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
      msg: '公司介绍',
      msg1: 'INTRODUCTION',
      currentDate: new Date(),
      newslist:[]
    }
  },
  created(){
    this.getarticlelist()
  },
  methods: {
      handleChange(val) {
        console.log(val);
      },
      async getarticlelist(){
        const res =await this.$http.get('/huayin/get-articles',{
          params:{
            title:'',
            type:'',
            pagenum:'27',
            pagesize:'2'
          }
          
          
        })
        
        this.newslist=res.data.data


      }
    }
}
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .el-row{
    margin: 0 auto;
    margin-top: 1%;
    width: 80%;
    margin-bottom: 20px;
    height: 100%;
    position:relative;
  }

  #control-left1{
      padding-left: 3%;
  }

  .image{
      width: 100%;
      height: 100px;
      margin-bottom: 10%;
  }
  #control-card{
    height: 220px;
  }
  /* .image {
    width: 50%;
    display: inline-block;
    float: left;
  }

  #text1{
      display: inline-block;
      float: right;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  } */

  /* .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  } */
</style>