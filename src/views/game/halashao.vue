<template>
  <div>
    <h1>{{snake.length}}</h1>
    <el-button @click="gemeover()">结束</el-button>
    <div class="SnakeClass" v-for="(i ,index) in size" :key="index">
      <!-- <span class="" ref="food"></span > -->
      {{index}}
      <span v-for="(j,index) in size" :key="index" ref="span">{{index}} </span>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
     size:10    
      // color:'#'+Math.random()*256
    }
  },
  mounted(){
      console.log(this.$refs.span.index);
  }
 
};
</script>

<style>
.o {
  background-color: rgb(61, 249, 255) !important;
}
.SnakeClass {
  position: relative;
    text-align: center;
}
.SnakeClass span {
 
margin-top: 0px; 
  display: inline-block;
  width: 40px;
  background: rgb(73, 161, 243);
  height: 40px;
  border-right: 1px rebeccapurple solid; 
}
.f {
  background: rgb(42, 33, 163) !important;
}
</style>