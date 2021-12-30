<template>
 <div >
     <img src="../assets//11.png" style="height:350px;width:100%;" alt=""  />
    <Divider3></Divider3>
    <Cardteam></Cardteam>
     <br><br>
 </div>
</template>

<script>

import Divider3 from '../components/divider3.vue'
import Cardteam from '../components/cardteam.vue'

export default {
 components:{

  Divider3,
  Cardteam,
 
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
        const img1=await this.$http.get('http://101.37.116.37:5000/api/huayin/get-img?name=1-4.png')

        this.imglist[0].name=img1.data.data[0].name
        this.imglist[0].src=img1.data.data[0].location


      }
  }
}
</script>