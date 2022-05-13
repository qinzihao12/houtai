<template>
  <div>
    <div class="grid">
      <div class="move top right"></div>
      <div class="move   top"></div>
      <div class="move  top left"></div>
      <div class="move  right"></div>
      <div class="move "></div>
      <div class="move  left"></div>
      <div class="move  bton right"></div>
      <div class="move  bton"></div>
      <div class="move  bton left"></div>
       <div class="header">
      <div class="earyan yano"> <div class=" befor beforo"></div>
          <div class=" ear earo"></div></div>   
         <div class="earyan yant">  <div class=" befor befort"></div>
         <div class=" ear eart"></div></div>
         <div class="mouth">

         </div>
       
       </div>
      
    </div>
   
  </div>
</template>

<script>
export default {

}
</script>

<style scoped >
*{
  margin: 0;
  padding: 0;
/* transition: 10s; */
}
.grid{
  border-radius: 10px;
  position: relative;
  width: 100%;
  height: 100vh;
display: grid;
grid-template-columns:auto auto auto;
grid-auto-rows: auto auto auto;
background-color: rgb(238, 189, 189);
}
.earyan{
  /* transition: 10s; */
  position: absolute;
  width: 40px;
  height: 40px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  /* transform: translate(-50%,-50%); */
}
.yano{
  top: 10%;
  left: 65% ;
}
.yant{
  top: 10%;
  left: 5% ;
}
.header{
  position: absolute;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 25%;
  left: 50%;
  width: 200px;
  height: 150px;
  background-color: rgb(253, 51, 51);
}
.befor{
  /* transition: .5s;  */
}
.befort{
  /* content:""; */
  position: absolute;
  top: 19%;
  transform: translate(-50%,-50%);
  left: 69%;
  width: 35px;
  height: 7px;
  border-radius: 50% 50% 20% 20%;
  background-color: rgb(0, 0, 0);

}
.beforo{
  /* content:""; */
  position: absolute;
  top: 19%;
  transform: translate(-50%,-50%);
  left: 29%;
  width: 35px;
  height: 7px;
  border-radius: 50% 50% 20% 20%;
  background-color: rgb(0, 0, 0);

}
.ear{
  transition: 1s; 
}
.earo{
  /* content:""; */
 position: absolute;
  /* top: 25%; */
  /* transform: translate(-50%,-50%); */
  left: 0%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(0, 0, 0);

}
.eart{
  /* content:""; */
  position: absolute;
  
  left: 50%; 
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(0, 0, 0);

}
.mouth{
  /* transform: 1s; */
  transition: .5s ease;
  /* content:""; */
  position: absolute;
  top: 62%;
  transform: translate(-50%,-50%);
  left: 50%;
  width: 50px;
  height: 50px;

  border-radius:50%;
  background-color: rgb(255, 250, 250);
}
.top:hover~ .header .mouth{
  top: 50%;
}
.right:hover~ .header .mouth{
  /* top: 50%; */
  left: 40%;
}
.bton:hover~ .header .mouth{
  top: 70%;
}
.left:hover~ .header .mouth{
 left: 60%;
}
.top:hover~ .header .ear{
  top: -5%;
}
.top:hover~ .header .befor{
  top: -5%;
}
.right:hover~ .header .ear{
  /* top: 50%; */
  /* left: 50%; */
    transform:translateX(-30%) 
  
}
.bton:hover~ .header .ear{
 top: 30%;
   /* transform: translate(20%,10%); */
}
.left:hover~ .header .ear {
   transform:translateX(30%)
 
}
</style>