
<template>
  <div id="Test">

    <el-row type="flex" justify="center">
      <el-col :span="6">
        <el-row>
          <el-col :span="10" :offset="10">
            <h2>login in</h2>
          </el-col>
        </el-row>
        <el-form :label-position="labelPosition" label-width="80px" :model="user">
          <el-form-item label="username: ">
            <el-input placeholder="请输入用户名" v-model="user.username"></el-input>
          </el-form-item>
          <el-form-item label="password: ">
            <el-input placeholder="请输入密码" v-model="user.password"></el-input>
          </el-form-item>
          <el-row type="flex" justify="center">
            <el-col :span="6">
              <el-button type="primary" native-type="submit" size="large" class="btn-my" v-on:click="postUser">login</el-button>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
    </el-row>

  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  name: 'Test',
  data() {
    return {
      labelPosition: 'left',
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    postUser() {
      alert("hello");
    },
    judgeUserInfo() {
      if(this.user.username === "") {
        console.log("用户名为空");
        return false;
      } else if(this.user,password === ""){
        console.log("用户名为空");        
      }
    }
  },
  components: {

  }
}
</script>
  
<style>
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .btn-my {
    padding: 10% 60%;
  }
</style>
