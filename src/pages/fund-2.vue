<template>
 <div >
  <img :src="imglist[0].src" style="height:300px;width:100%;" alt=""  />
  <Divider1></Divider1>
  <Trend></Trend>

 </div>
</template>

<script>
import Divider1 from '../components/divider1.vue'
import Trend from '../components/trend.vue'


export default {
 components:{
Divider1,
  Trend
 
 },
 data() {
    return {
      imglist: [
        {
          name: "1",
          src:  require("@/assets/bp1.png"),
          title: "这是第一张"
        }
      ]
    };
  },
  created() {
    this.getimglist()
  },
  methods: {
    async getimglist(){
        const img1=await this.$http.get('http://101.37.116.37:5000/api/huayin/get-img?name=1-2.png')

        this.imglist[0].name=img1.data.data[0].name
        this.imglist[0].src=img1.data.data[0].location


      }
  }

}
</script>

