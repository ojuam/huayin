<template>
  <!-- <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
      <img src="">
    </el-carousel-item>
  </el-carousel> -->
  <el-carousel trigger="click" height="450px" :interval="3000" arrow="always" style="width:100%">
      <el-carousel-item v-for="item in imglist" :key="item.name">
        <img v-bind:src="item.src" style="height:100%;width:100%;" alt="" :title="item.title" />
      </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      imglist: [
        {
          name: "1",
          src:  require("@/assets/11.png"),
          title: "这是第一张"
        },
        {
          name: "2",
          src: require("@/assets/22.jpg"),
          title: "这是第二张"
        },
        {
          name: "3",
          src: require("@/assets/33.png"),
          title: "这是第三张"
        },
        {
          name: "4",
          src: require("@/assets/22.jpg"),
          title: "这是第四张"
        }
      ]
    };
  },
  created() {
    this.getimglist()
  },
  methods: {
    async getimglist(){
        // const img1=await this.$http.get('http://101.37.116.37:5000/api/huayin/get-img?name=1-1.png')
        // const img2=await this.$http.get('http://101.37.116.37:5000/api/huayin/get-img?name=1-2.png')
        // const img3=await this.$http.get('http://101.37.116.37:5000/api/huayin/get-img?name=1-1.png')
        // const img4=await this.$http.get('http://101.37.116.37:5000/api/huayin/get-img?name=1-1.png')

        // this.imglist[0].name=img1.data.data[0].name
        // this.imglist[0].src=img1.data.data[0].location
        // this.imglist[1].name=img2.data.data[0].name
        // this.imglist[1].src=img2.data.data[0].location
        // this.imglist[2].name=img3.data.data[0].name
        // this.imglist[2].src=img3.data.data[0].location
        // this.imglist[3].name=img4.data.data[0].name
        // this.imglist[3].src=img4.data.data[0].location


      }
  }
};

</script>

<style>
  /* .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */
</style>


