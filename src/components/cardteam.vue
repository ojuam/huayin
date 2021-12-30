<template>
<el-row>
  <el-col :span="6" v-for="(i, index) in persons" :key="i" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="i.src" class="image1">
      <div style="padding: 14px;">
        <el-col :span="8">
          <h3 style="font-weight:400;margin-top: 0;">{{i.name}}</h3>
        </el-col>
        <el-col :span="12">
          <p style="margin-top: 3px;font-size: 15px;">{{i.title}}</p>
        </el-col>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>

<script>
export default {
  name: 'Cardteam',
  data() {
    return {
      teamlist:[],
      persons:[
        {
          name: "李华",
          src:  require("@/assets/person1.png"),
          title: "公司总裁"
        },
        {
          name: "张四",
          src:  require("@/assets/person2.png"),
          title: "公司总监"
        },
        {
          name: "Jame",
          src:  require("@/assets/person3.png"),
          title: "基金助理"
        }
      ]
    };
  },
  created() {
    this.getarticlelist()
  },
  methods: {
    async getarticlelist(){
        const res =await this.$http.get('/huayin/get-articles',{
          params:{
            title:'',
            type:'',
            pagenum:'1',
            pagesize:'3'
          }
          
          
        })
        
        this.teamlist=res.data.data


      }
  }
}
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image1 {
    width: 100%;
    
    height: 240px;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
