<template>
  <div>
    <h1>{{snake.length}}</h1>
    <el-button @click=" gemeover()">结束</el-button>
    <div class="SnakeClass" v-for="i in size" :key="i">
      <!-- <span class="" ref="food"></span > -->
      <span v-for="j in size" :key="j" ref="span"> </span>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      size: 15,
      length: 5,
      snake: [],
      direction: "right",
      food: {},
      classList:''
      // color:'#'+Math.random()*256
    };
  },
  mounted: function () {
    let half = Math.floor(this.size / 2);

    console.log(half);
    for (let i = 0; i < this.length; i++) {
      this.snake.push({
        x: half,
        y: half + i < this.size - 1 ? half + i : this.size - 1,
      });
    }

    this.render();
    this.start();
    this.genrfood();
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowUp":
          {
            if (this.direction !== "down") {
              this.direction = "up";
            }
          }
          break;
        case "ArrowDown":
          {
            if (this.direction !== "up") {
              this.direction = "down";
            }
          }
          break;
        case "ArrowLeft":
          {
            if (this.direction !== "right") {
              this.direction = "left";
            }
          }
          break;
        case "ArrowRight":
          {
            if (this.direction !== "left") {
              this.direction = "right";
            }
          }
          break;
      }
    });
  },
  methods: {
      gemeover(){
// if (this.snake.length > 20) {
            for (let body of this.snake) {
              this.$refs.span[body.y * this.size + body.x].style.background="rgb(73, 161, 243)";
            }
            this.snake.length = 5;
            alert("游戏结束");
        //   }
      },
    render: function() {
// setTimeout(() => {
        for (let body of this.snake) {
        this.$refs.span[body.y*this.size+body.x].style.background="red";
      }
// }, 1000);

    },
    start() {
      setInterval(() => {
        let net = {};
        switch (this.direction) {
          case "up":
            {
              net = {
                x: this.snake[0].x,
                y:
                  this.snake[0].y - 1 < 0 ? this.size - 1 : this.snake[0].y - 1,
              };
            }
            break;
          case "down":
            {
              net = {
                x: this.snake[0].x,
                y:
                  this.snake[0].y + 1 > this.size - 1 ? 0 : this.snake[0].y + 1,
              };
            }
            break;
          case "left":
            {
              net = {
                x:
                  this.snake[0].x - 1 < 0 ? this.size - 1 : this.snake[0].x - 1,
                y: this.snake[0].y,
              };
            }
            break;
          case "right": {
            net = {
              x: this.snake[0].x + 1 > this.size - 1 ? 0 : this.snake[0].x + 1,
              y: this.snake[0].y,
            };
          }
        }

        this.snake.splice(0, 0, net);
        if (net.x === this.food.x && net.y === this.food.y) {
            //  this.$refs.span[ this.food.y * this.size + this.food.y].style.borderRadius = 0 + "px";
          this.$refs.span[this.food.y * this.size + this.food.x].classList.remove('o')
         setTimeout(() => {
           
              this.genrfood();
         },1000)}
         else  {
          let tail = this.snake.pop();
          this.$refs.span[tail.y * this.size + tail.x].style.background=' rgb(73, 161, 243)'
          this.render();
        }

        
      }, 300);
    },
    genrfood() {
     console.log();
      console.log(this.color);
      let colo = ["red", "black"];

      this.food = {
        x: Math.floor(Math.random() * this.size),
        y: Math.floor(Math.random() * this.size),
      };
      //  this.$refs.span[this.food.y * this.size+this.food.x].classList.add('o');
      var r = Math.floor(Math.random() * 256); //随机生成256以内r值
      var g = Math.floor(Math.random() * 256); //随机生成256以内g值
      var b = Math.floor(Math.random() * 256); //随机生成256以内b值
      this.$refs.span[this.food.y * this.size + this.food.x].classList.add('o')
    //       this.$refs.span[this.food.y * this.size + this.food.x ].style.borderRadius = 25 + "px";
      //    console.log(Math.random(colo));
    },
  },
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