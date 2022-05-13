<template>
  <div class="app">
    
<div v-show="!ifshow">
 
<el-container direction="horizontal" style="height: 100vh; border: 1px solid #eee">
   
<el-aside width="16vw" >
  <HelloWorld :aler="aler"></HelloWorld>
     <el-button id="loder" @click="aler()">重新登陆</el-button>
   </el-aside>
<el-main> 
   <Bread></Bread>
   <!-- <Huan v-show="!show"></Huan> -->
<Huan v-show="$route.path!=='/chenyu'&&$route.path!=='/main'&&$route.path!=='/halashao'&&$route.path!=='/snake'&&$route.path!=='/xiao'&&$route.path!=='/ceshi'&&$route.path!=='/love'&&$route.path!=='/About'&&$route.path!=='/todolist'&&$route.path!=='/home'&&$route.path!=='/fly'"></Huan>
 
   <router-view></router-view>
</el-main>
  
</el-container>
</div>
<!-- <div  > -->
<Form  v-show="ifshow" :aler="aler"></Form>

<!-- </div> -->
  </div>
 
</template>

<script>
//

import HelloWorld from './components/HelloWorld.vue';
import Bread from './components/Bread.vue';
// import HelloWorld from './components/HelloWorld.vue';
import Huan from './views/huan.vue';
import Form from './components/form.vue';
// import dsa from '.'
import 'animate.css';
//  import localStore from './localstorage.js'
// import About from './views/About.vue';
export default {


 components:{ HelloWorld,Huan,Form,Bread},
  data() {
    return {
      show:true,
      ifshow:true
    }
  },
  mounted(){
     
  },

  methods:{
    aler(){
      this.ifshow=!this.ifshow
    }
  }
}
</script>

<style >
*{
  text-decoration: none;
  margin: 0;
  padding: 0;
}
.app{
  width: 100%;
  height: 100vh;
  background-image: url(./assets/image/OIP-C.jpg);
  
  /* background-color: rgb(253, 165, 165); */
}
.p{
  width: 500px;
  height: 200px;
  background-color: #aaee88;
}
#loder{
  margin-left: 50px;
  /* flex-direction: column; */
  
}

</style>