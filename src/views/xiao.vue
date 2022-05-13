<template>
  <div>
      <!-- <h1>游戏</h1> -->
      <div class="game"><router-link to="/snake">贪吃蛇</router-link>
       <router-link to='/halashao'>老头乐</router-link></div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.game{
  color: #000;
display: flex;
width: 100%;
justify-content: center;
justify-content: space-around;
}
.game router-link{
  color: #000;
  
}


</style>