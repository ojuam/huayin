<template>
<div>
    <el-card id="box-card1" >
        <div slot="header" >
            <span style="color:white;">公司动态</span>
        </div>
        <div v-for="(item,index) in articlelist" :key="index" class="text item">
            <a :href="'/#/active/'+item.id">{{item.title}}</a>
            <hr>
        </div>
    </el-card>
    <div class="control-center">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="600">
    </el-pagination>
    </div>
</div>
</template>

<script>
import Intro3 from '../components/intro3.vue'
import bus from '../assets/bus.js'

export default {
  name: 'Cardshow2',
  data() {
      return {
        id:19,
        articlelist:[],
        queryInfo: {
        title: '',
        type: '',
        pagenum: 8,
        pagesize: 7,
      },
      };
    },
    created(){
      this.getarticlelist()
      


    },
    
    methods: {
      handleSizeChange(val) {
        this.queryInfo.pagesize = val
        console.log(`每页 ${val} 条`);
        this.getarticlelist()
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        var val1=val+3
        this.queryInfo.pagenum = val1
        console.log(this.queryInfo.pagenum)
        this.getarticlelist()
      },
      handleChange(val) {
        console.log(val);
      },
      async getarticlelist(){
        const res =await this.$http.get('/huayin/get-articles',{params:this.queryInfo}
          )
        this.articlelist=res.data.data
        console.log(this.articlelist[0].id)
        bus.$emit('data',this.articlelist[0].content)
        bus.$emit('data1',this.articlelist[0].title)


      }
    },
    components: {
      Intro3,
      bus
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
  .text a{
    text-decoration: none;
    color:aliceblue;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  #box-card2 {
    width: 220px;
    height: 600px;
    background-color:#572d2d;
    position: absolute;
    margin-top: -100px;
    margin-left: 100px;
    z-index: 9999;
  }
  .control-center{
    text-align: center;
  }
</style>