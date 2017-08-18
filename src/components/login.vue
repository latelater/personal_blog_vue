
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
          <el-row type="flex" justify="center"  >
            <el-col :span="8">
              <!-- <span v-model="err_message"></span> -->
              <span v-show="show_message">{{err_message}}</span>
            </el-col>
          </el-row>
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
      },
      err_message: 'null',
      show_message: false
    };
  },
  methods: {
    postUser() {
      this.show_message = this.judgeUserInfo()
      if(this.show_message === true) {
        
        return ;
      }
      axios.defaults.baseURL = BASE_URL;
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post('/user/login', {
        username: this.user.username,
        password: this.user.password
      }).then(function(response) {
        console.log(response);
        if(response.status === 200) {
          if(response.data.code === 200) {
            data = response.data
          } else {        
            // this.err_message = response.data.
          }
        }
      }).catch(function(err) {
        // alert(err);
        this.show_message = true;
        this.err_message = "服務端錯誤";
      })
    },
    judgeUserInfo() {
      if(this.user.username === "") {
        this.err_message = "用户名不能为空";
        return true;
      } else if(this.user.password === "") {
        this.err_message = "密码不能为空";
        return true;      
      }
      return false;
    }
  },
  components: {

  }
}
</script>
  
<style>
  #Test {
    /* background-color: #f9fafc;  */
    margin-top: 10%;
  }  
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
    background-color: white;
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
  .err-message {
    text-align: center;
    font-size: 14px;
  }
</style>
