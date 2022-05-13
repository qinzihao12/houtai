<template>
<div class="sao">
 <table border="2" >
  <tr   v-for="inq in 10"  :key="inq">
    <th   v-for="index in 10" :key="index" >{{(inq-1)*10+index}}</th>
  </tr>
 
</table>
</div>
</template>

<script>
export default {
data() {
  return {
    a:'1',
    b:'2'
  }
},
computed:{
ifoff:()=>{
 return this.a+this.b;
}
},
methods:{
  name(index){
    
  }
}

}

</script>

<style>
.sao{
width: 500px;

display: flex;
flex-wrap:wrap;
margin:100px auto;
justify-content: center;
}
.sao table{
background-color: #929196;
flex: 1;
margin: 0 auto;
}

.sao table th{
  padding: 0;
  width: 20px;
  height: 20px;
  background-color: #ccc;
  border: 2px solid;
  border-color: #fff;
}
.sao table th:hover{
background-color: rgb(151, 26, 26);
}
.sao table th:active{
background-color: rgb(151, 26, 26);
}

</style>