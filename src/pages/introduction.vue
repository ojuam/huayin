<template>
 <div >
  <img src="../assets//11.png" style="height:350px;width:100%;" alt=""  />
  <Cardshow></Cardshow>
  <Intro1 id="control_card"></Intro1>
  <br>
 </div>
</template>

<script>

import Divider from '../components/divider.vue'
import Intro1 from '../components/intro1.vue'
import Cardshow from '../components/cardshow.vue'

export default {
 components:{

  Divider,
  Intro1,
  Cardshow
 
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
        const img1=await this.$http.get('http://101.37.116.37:5000/api/huayin/get-img?name=1-1.png')

        this.imglist[0].name=img1.data.data[0].name
        this.imglist[0].src=img1.data.data[0].location


      }
  }
};

</script>

<style>
    
</style>


