<template>
  <!-- <div> -->
    <div class="box">

        <div class="contrast">
            <!-- 数字 -->
            <div class="number">98%</div>
            <!-- 中间圆圈 -->
            <div class="circle"></div>
            <!-- 底部小球 -->
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <!-- 底部图标 -->
            <div class="bubble-home"></div>
        </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
 .box {
     border-radius: 10px;
            width: 100%;
            height: 100vh;  
            margin: 20 auto;
            background-color: #000;
            padding-top: 20px;
        }
        /* filter(滤镜)  */
        /* contrast(%) 调整图像对比度 */
        /* blur(px) 设置高斯模糊 */
        /* hue-rotate(deg) 给图像应用色相旋转 */
        /* animation-duration: 6.5s; 动画持续时间*/
        /*animation-delay: 0.1s;动画延迟 */
        
        .number {
            width: 200px;
            height: 200px;
            line-height: 200px;
            text-align: center;
            font-size: 30px;
            z-index: 9;
            color: #fff;
            position: absolute;
            top: 8%;
            left: 50%;
            transform: translateX(-50%);
        }
        
        .contrast {
          /* border-radius: 50%; */
            width: 100%;
            height: 100%;
            background-color: rgb(0, 0, 0);
            position: relative;
            filter: contrast(15);
            animation: hueRotate 5s linear infinite;
        }
        
        @keyframes hueRotate {
            0% {
                filter: contrast(15) hue-rotate(0);
            }
            100% {
                filter: contrast(15) hue-rotate(360deg);
            }
        }
        
        .circle {
          border-radius: 150px;
            width: 300px;
            height: 300px;
            background-color: #000;
            position: absolute;
            left: 50%;
            top: 0;
            margin-left: -150px;
            /* filter: blur(8px); */
            animation: circleRotate 5s linear infinite;
        }
        
        .circle::before {
            content: '';
            width: 200px;
            height: 200px;
            background-color: #00ff6f;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 42% 38% 62% 49%/45%;
        }
        
        .circle::after {
            content: '';
            width: 176px;
            height: 178px;
            background-color: #000;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
        }
        
        @keyframes circleRotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        
        .bubble-home {
            width: 150px;
            height: 50px;
            background-color: #00ff6f;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 150px 150px 0 0;
            filter: blur(8px);
        }
        
        .bubble {
            width: 20px;
            height: 20px;
            background-color: red;
            border-radius: 100%;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            z-index: 99;
            animation: bubbleMoveUp 5s ease-in-out infinite;
            filter: blur(5px);
        }
        
        .bubble:nth-child(1) {
            width: 20px;
            height: 20px;
            left: 50%;
            animation-duration: 2s;
            animation-delay: 1s;
        }
        
        .bubble:nth-child(2) {
            width: 13px;
            height: 13px;
            left: 56%;
            animation-duration: 2.5s;
            animation-delay: 1s;
        }
        
        .bubble:nth-child(3) {
            width: 16px;
            height: 16px;
            left: 56%;
            animation-duration: 3s;
            animation-delay: 2s;
        }
        
        .bubble:nth-child(4) {
            width: 14px;
            height: 14px;
            left: 60%;
            animation-duration: 2s;
            animation-delay: 0s;
        }
        
        .bubble:nth-child(5) {
            width: 18px;
            height: 18px;
            left: 50%;
            animation-duration: 2.3s;
            animation-delay: 1.4s;
        }
        
        .bubble:nth-child(6) {
            width: 16px;
            height: 16px;
            left: 48%;
            animation-duration: 2.3s;
            animation-delay: 1.3s;
        }
        
        .bubble:nth-child(7) {
            width: 20px;
            height: 20px;
            left: 49%;
            animation-duration: 3.5s;
            animation-delay: 1.1s;
        }
        
        .bubble:nth-child(8) {
            width: 13px;
            height: 13px;
            left: 55%;
            animation-duration: 2.5s;
            animation-delay: 0.5s;
        }
        
        .bubble:nth-child(9) {
            width: 15px;
            height: 15px;
            left: 45%;
            animation-duration: 3.4s;
            animation-delay: 1.6s;
        }
        
        .bubble:nth-child(10) {
            width: 17px;
            height: 17px;
            left: 42%;
            animation-duration: 3.3s;
            animation-delay: 2s;
        }
        
        .bubble:nth-child(11) {
            width: 14px;
            height: 14px;
            left: 44%;
            animation-duration: 3.2s;
            animation-delay: 1.2s;
        }
        
        .bubble:nth-child(12) {
            width: 16px;
            height: 16px;
            left: 56%;
            animation-duration: 2.3s;
            animation-delay: 1.4s;
        }
        
        .bubble:nth-child(13) {
            width: 20px;
            height: 20px;
            left: 56%;
            animation-duration: 1.2s;
            animation-delay: 1.7s;
        }
        
        .bubble:nth-child(14) {
            width: 15px;
            height: 15px;
            left: 60%;
            animation-duration: 3.2s;
            animation-delay: 0.6s;
        }
        
        .bubble:nth-child(15) {
            width: 18px;
            height: 18px;
            left: 50%;
            animation-duration: 1.3s;
            animation-delay: 0.4s;
        }
        
        @keyframes bubbleMoveUp {
            0% {
                bottom: 0;
            }
            100% {
                bottom: calc(100% - 260px);
            }
        }
</style>