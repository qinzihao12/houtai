<template>
  <div class="love">
   
  
  <div v-if="active==0">
     <el-descriptions class="margin-top"  :column="1" :size="size" border>
    <template slot="extra">
      <el-button type="primary" size="small">操作</el-button>
    </template>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        用户名
      </template>  
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        <!-- 手机号 -->
      </template>
      <!-- 18100000000 -->
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        <!-- 居住地 -->
      </template>
      <!-- 苏州市 -->
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        <!-- 备注 -->
      </template>
      <el-tag size="small">
        <!--  -->
      </el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
        <!-- 联系地址 -->
      </template>
     <!-- /dihi -->
    </el-descriptions-item>
  </el-descriptions>
  </div>
  <div v-else-if="active==1">
     <el-transfer v-model="value" :data="data"></el-transfer>
  </div>
  <div v-else-if="active==2">第三步</div>
  <div  v-else-if="active==3">完成</div>  
  
  <el-steps  :active="active" finish-status="success">
       <el-step title="步骤 1"></el-step>
  <el-step title="步骤 2"></el-step>
  <el-step title="步骤 3"></el-step>
  <el-button v-if="active<3" style="margin-top: 12px;" @click="next">下一步</el-button>
<el-button v-if="active==3" style="margin-top: 12px;" @click="next">完成</el-button>
  </el-steps>
 

 
  </div>
</template>

<script>
export default {
data() {
   const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [1, 4],
        valuess: false,
        w:true,
          value1: 100,
          active:0,
           form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          
        }
               
      }
    },
    computed:{
     

      
        
        //计算属性
        
    }  ,
    directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
     
    }
  },
  color: {    // 指令的定义
    inserted: function (el,binbing) {
        // var ao = 100;
        // console.log();
        el.style.height=binbing.value+"px"
        el.innerHTML=binbing.arg
      
      } 
    }
  },

    methods:{
        formatTooltip(val) {
        return val / 100;        
      },
      next() {
        if (this.active++ > 2) this.active = 0,this.tiv=true;
      
        
        
      }
      
        
      
    },
    watch:{
    }
}
    
//   console.log(this.value);
</script>

<style scoped>
.love{
   border-radius: 10px; 
    width: 100%;
    height: 100vh;
    /* height: 100px; */
    background-color: #33ee;
}
.buzhou
{
  /* position: absolute; */
  display: flex;
  bottom: 0;
}
</style>