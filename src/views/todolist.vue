<template>
  <div>
    <div class="l"  @click="updateTodo()" v-if="look" v-show="show">
      <el-input
        autofocus=""
        @keyup.enter.native="add()"
        v-model="named"
      ></el-input>
      <transition-group  name="el-fade-in-linear">
        <!-- <div class="todo"> -->
    <ul class="li"  @click="pahtall(index)"  v-for="(todo, index) in todos" :key="index" >
      <li >
      <h1 v-show="nameshow" >{{todo.name}}</h1>
      <!-- <el-input v-model="todo.name" type="text"  @blur="nameshow=!nameshow" v-show="!nameshow"></el-input> -->
          <div class="button">
            <label><input
                type="checkbox"
                :checked="todo.done"
              
                @click='update(index,$event)' 
               
              />选中</label
            >
            <el-button @click="look(index)">查看</el-button>
            <el-button type="warning" @click="clear(index)">清除</el-button>
          </div>
      </li>
        </ul>
         <!-- </div> -->
      </transition-group>
      <el-button  @click="All()">清除</el-button>
      <input  type="checkbox" v-model="isAll" @click="chee($event)">
<el-button>{{number}}</el-button>
      <div>{{ todos.length }}</div>
      <!-- </div> -->
      <!-- </transition> -->
    </div>
    <div class="wenzhang" v-show="!show"> 
      <Wenzhang :todos='todos' :x='x'>  </Wenzhang>
      <!-- <input v-model="lok">{{lok}} -->
      <el-button @click="look()">返回</el-button>
    </div>
  </div>
</template>
<script>
import Wenzhang from '../components/wenzhang.vue'
export default {

  components: { Wenzhang },
  data() {
    return {
      value: true,
      lok: "",
      named: "",
      
      todos: [],
      sh: true,
      show: true,     
      nameshow:true,
    };
  },

computed:{
   number(){
        return this.todos.reduce((pre,current) => pre += current.done ? 1 : 0 ,0)
    },
    a(){
    return this.todos.length;
    },
     isAll:{
       set(flag){
           console.log(flag);
           this.updateAll(flag)  
       },
       get(){
        return this.number===this.a&&this.a>0
       }
   },
     
            
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

  methods: {
     updateAll(done) {
            this.todos = this.todos.map((todos) => {
              console.log({...todos,done});
                return { ...todos, done }
            })

        },
  
    saveCats() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem("todos", parsed);
    },
    pahtall(index){
         console.log(this.todos[index].done);

    },
    updateTodo(index, done) {
      
      // console.log(this.todos[index].done);
      this.todos[index].done = done;
      this.saveCats();
    },
    update(index, event) {
     
      const{checked}= event.target
      this.updateTodo(index, checked);
       this.saveCats();
    },
    addtTodo(todoObj) {
      this.todos.unshift(todoObj);
      this.saveCats();
      // console.log(this.input.checkbox);
    },
   

    add() {
      if (!this.named.trim()) alert("不能为空");
      else {
        const app = {
          id: this.todos.length,
          name: this.named,
          done: false,
          wanzhang: "",
        };

        this.todos.unshift(app);
        this.saveCats();
     
      }
      this.named = "";
      // localStorage.todos = this.todos;
      // this.saveCats();
    },
    clear(index) {
 
      this.todos.splice(index, 1);
      this.saveCats();
     
      //  this.radio--
    },
    All() {
      this.todos.splice(0, this.todos.length);
      this.saveCats();
    },
    // saveCats() {
    //   const parsed = JSON.stringify(this.todos);
    //   localStorage.setItem('todos', parsed);
    // },
    look(el) {
      this.show = !this.show;
      this.x=el
      
      
    },
  },

   watch: {
              
            }
  
};
</script>

<style scoped>
li{
   display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
  height: 10vh;
  list-style: none;
    /* height: 36px; */
    /* line-height: 36px; */
    perspective: 0 5px;
    border: 1px solid rgb(0, 0, 0);
    /* border-top: 1px solid #ccc; */
     /* background-image:url('微2_20210320195721.jpg');    */
    background-color: rgba(247, 246, 246, 0.3);
     /* background-image:url('微2_20210320195721.jpg'); */
}
.l{
  /* margin-top: 10px; */
  /* background-image:url('微2_20210320195721.jpg');    */
}
.li {
    /* color: aquamarine; */
    margin-left: 0;
    /* border: 1px solid #ddd; */
    border-radius: 2px;
    padding: 0;
     
  
 
  
  
}

.wenzhang {
  width: 100%;
  height: 100vh;
  background-color: rgb(255, 188, 188);
}
</style>