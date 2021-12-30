<template>
  <el-row>
      <el-col :span="12">
          <div class="grid-content bg-purple">
              <el-collapse v-model="activeNames" @change="handleChange">
                 <el-collapse-item v-for="item in articlelist" :key="item.id" :title="item.title" name="1">
                      <a :href="'#/fund/'+item.id"><div id="control_width" v-html="item.content"></div></a>
                  </el-collapse-item>
              </el-collapse>
          </div>
      </el-col>
      <el-col :span="12">
          <div class="grid-content bg-purple-light">
              <el-collapse v-model="activeNames" @change="handleChange">
                  <el-collapse-item v-for="item in articlelist2" :key="item.id" :title="item.title" name="1" >
                      <a :href="'#/fund/'+item.id"><div id="control_width" v-html="item.content"></div></a>
                  </el-collapse-item>
              </el-collapse>
          </div>
      </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Trend',
  data() {
      return {
        activeNames: ['1'],
        articlelist:[],
        articlelist2:[]
      };
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
            pagenum:'8',
            pagesize:'4'
          }
          
          
        })
        const res2 =await this.$http.get('/huayin/get-articles',{
          params:{
            title:'',
            type:'',
            pagenum:'7',
            pagesize:'4'
          }
        })
        this.articlelist=res.data.data
        this.articlelist2=res2.data.data


      }
    }
  }
</script>

<style>
  a{
    text-decoration: none;
    color: black;
  }
  .el-row {
    margin: 0 auto;
    margin-top: 1%;
    width: 80%;
    margin-bottom: 20px;
    height: 100%;
    position:relative;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  #control_width{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width:90%;
    height: 100px;
  }
</style>