<template>
 <div >
    <Ppt></Ppt>
    <Divider></Divider>
    <Intro></Intro><br>
    <img src="../assets/33.png" alt="" style="height:100px;width:100%;">
    <Divider1></Divider1>
    <Trend></Trend>
    <Divider2></Divider2>
    <News></News>
    <Divider3></Divider3>
    <Cardteam></Cardteam>
 </div>
</template>

<script>
import Ppt from '../components/ppt.vue'
import Divider from '../components/divider.vue'
import Intro from '../components/intro.vue'
import Divider1 from '../components/divider1.vue'
import Trend from '../components/trend.vue'
import Divider2 from '../components/divider2.vue'
import News from '../components/news.vue'
import Divider3 from '../components/divider3.vue'
import Cardteam from '../components/cardteam.vue'

export default {
 components:{
     Ppt,
    Divider,
    Intro,
    Divider1,
    Trend,
    Divider2,
    Divider3,
    News,
    Cardteam
  
 
 }
}
</script>