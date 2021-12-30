<template>
 <div id="app">
  <!-- <Ppt></Ppt> -->
  
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>


 </div>
</template>

<script>
import Header from './components/header.vue'
import Ppt from './components/ppt.vue'
import Footer from './components/footer.vue'


export default {
 components:{
  Header,
  Ppt,
  Footer
 }
}
</script>

<style>
  body{
      margin-top: 0px;
      margin-left:0px;
      margin-bottom: 0px;
      width: 100%;
      height: 100%;
  }
</style>