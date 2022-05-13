<template>
  <el-breadcrumb  separator="/">
        <el-breadcrumb-item   to="/"> 首页</el-breadcrumb-item>

  <el-breadcrumb-item v-for="bread in breadCrumbList" :key="bread.path" :to='bread.path' > {{bread.meta.title}}</el-breadcrumb-item>

</el-breadcrumb>
</template>

<script> 
export default {
   
    computed:{
       
        breadCrumbList(){
            return this.$route.matched;
        }
    },
    
    mounted(){
        console.log(this.$route);
    },
     methods:{
 lik(){
            console.log(this.to);
        },
    },

}
</script>

<style>

</style>