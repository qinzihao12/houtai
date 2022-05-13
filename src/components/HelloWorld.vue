<template>
<div>
  <el-row class="tac">
    <router-link to=" path: '/huan'" style="text-decoration:none"><h1 style="color:red" >子豪の动画</h1></router-link> 
    
 <div class="trabecula" ></div>
  <el-col :span="24">   
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title" >动画</template>
          <el-menu-item index="1-1"><div><router-link to="/About"><el-button >About</el-button></router-link></div> </el-menu-item>
          <el-menu-item index="1-2"><router-link to="/home"><el-button>home</el-button></router-link></el-menu-item>
          <el-menu-item index="1-3">  <router-link to="/todolist"><el-button style="width: 77px height:40px">todolist</el-button></router-link>
          </el-menu-item>
          <el-menu-item index="1-4">  <router-link to="/fly"><el-button style="width: 77px height:40px">fly</el-button></router-link>
</el-menu-item>
  <el-menu-item index="1-4"> <router-link to="/love"><el-button style="width: 77px height:40px">Love</el-button></router-link>
</el-menu-item>
  <el-menu-item index="1-4"> <router-link to="/ceshi"><el-button style="width: 77px height:40px">ceshi</el-button></router-link>
</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="文章">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">第二日</span>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-menu"></i>
      <span slot="title">  <router-link to="/chenyu">洪水日 </router-link></span>
      </el-menu-item>
       <!-- <router-link to="/fly"> -->
       <router-link to='/main'>
      <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span> 
      
             
       
      </el-menu-item>
      </router-link>
   
  <!-- </router-link> -->
    </el-menu>
  </el-col>
 
</el-row>

  </div>
</template>

<script>
export default {
  props:['aler'],
data(){
  return{
          
  }

},
methods: {
 
},
    // }

}

</script>

<style scoped>
.loder{
  background-color: rgb(167, 116, 116);
  /* position: absolute; */
  /* margin-left: 10px; */
  /* padding: 100px; */
}

.trabecula{
  margin-top: 10px;
  margin-bottom: 10px;

  width: 100%;
  height: 2px;
  background-color: rgb(212, 151, 151);
}
</style>