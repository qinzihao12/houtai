<template>
  <div>

      <div class="form">
               <!-- <el-button  class="loder" @keydown.enter="aler()" @click.enter="aler()" >登录</el-button> -->

          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="年龄" prop="age">
    <el-input v-model.number="ruleForm.age"></el-input>
  </el-form-item>
  <el-form-item label="啊咯" prop="kol">
    <el-input v-model.number="ruleForm.kol"></el-input>
  </el-form-item>
 
  <!-- <div class="pop"> -->

   <!-- </div> -->
</el-form>
   <el-button  class="loder" @keydown.enter="aler()" @click.enter="aler()" >登录</el-button>
   
      </div>
  </div>
</template>

<script>
 export default {
     props:["aler"],
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
       var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/
      var checkkol = (rule, value, callback) => {
        if ( !value) {
          callback(new Error('请输入数字值'));
        } else if (!phoneReg.test(value)) {
          callback(new Error('手机好!'));
        } else if (phoneReg.test(value)) {
          callback(new Error('答对咯i'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: '',
          kol:''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' },
            { min: 3, max: 5,  message: '长度在 3 到 5 个字符', }
          ],
          checkPass: [
            { validator:  validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ],
          kol:[
               { validator: checkkol, trigger: 'change' }
          ]
        }
      };
    },
 }

</script>

<style scoped>

form{
  /* position: relative; */
  /* text-justify: center; */
  /* text-align: center; */
    color:rgb(238, 0, 99);
    display: flex;
    flex-wrap: wrap;
   /* width:; */
   /* height: 400px; */
    justify-content: center;
    /* position: absolute; */
    /* left: 50%; */
}
input[type="submit"]{
    /* width: 30px; */
    /* height: 20px; */
    padding: 0;
    text-align: center;
    
}
.form{
  
    display: flex;
    justify-content: center;
    width: 500px;
    /* height: 400px; */
    position: relative;
     top: 50%;
    left: 50%;
    /* text-align: center; */
   background-color: rgb(248, 139, 139);
    transform: translate(-50% ,70%);

}

</style>