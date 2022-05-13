<template>
  <div >
     
      <div  class="boxrend" v-show="index==x" v-for="zhang,index in todos" :key="index">
        <h1 >《{{zhang.name}}》 </h1>  
         
        <textarea  ref="wen" id='wen' @input="saveCats()"  v-model="zhang.wanzhang">
   
       </textarea>
       <div>
        <el-button  @click="color(this)" >   设置样式    </el-button>
     <div v-show="show" class="Text"> 
        <el-button @click='ize()'>确定选择</el-button>
        字体尺寸  :
        <input  type="number"  style="width:50px">
        字体颜色  :
        <input class="color" type="color" >
        截止日期  :
        <input value='2000-12-22' type="date" name="" id="">
              
         </div>
         </div>
        <!-- _settings -->
      </div>   
  </div>
</template>

<script>
// import form from './form.vue'
export default {
  props:['todos' ,'x'],
  data(){
    return{
    i:1,
    show:false,
    size:40,
   colorWell:'',
   
    }
  },
  mounted() {
   
     if (localStorage.getItem("todos")) {
      try {
        this.todos = JSON.parse(localStorage.getItem("todos"));
      } catch (e) {
        localStorage.removeItem("todos");
      }
     }
    
     
   
  },

   
  methods:{
    c(el){
      console.log(el);
    },
  saveCats() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem("todos", parsed);
      
    },
    color(){
      this.show=!this.show
      console.log( this.$refs.wen)
     
    },
    ize(){
   
     this.$refs.wen[this.x].style.fontSize=this.size+'px'
     this.$refs.wen[this.x].style.color=document.querySelector('.color').value
  
    }
  }


}
</script>

<style scoped>

h1{
  text-align: center;
}
textarea{

  position: relative;
left: 50%;
transform: translateX(-51%);
   max-width:   950px;
    max-height:   500px;
    min-height:   500px;
    min-width: 950px;
}
p{
  /* text-align: center; */
  position: relative;
left:  100px;

}
.boxrend{
  border-bottom: 1px red solid;
}
#wen{
  
  margin-left: 15px ;
}

</style>