<template>
 <div>
   <router-link to="/xiao">游戏</router-link>
   <router-view></router-view>

<div>{{swiperList}}</div>

 </div>
</template>

<script>
export default {
  data() {
    return{
     swiperList:[]
    }
  },
  
methods:{
     
}
}
</script>


<style>

</style>
