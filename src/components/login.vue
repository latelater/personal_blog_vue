
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
              <el-button type="primary" native-type="submit" size="large" class="btn-my" v-on:click="getDate">login</el-button>
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
      // if(this.show_message === true) {
        
      //   return ;
      // }
      axios.defaults.baseURL = BASE_URL;
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post('/user/login', {
        username: this.user.username,
        password: this.user.password
      }).then(function(response) {
        console.log(response);
        if(response.status === 200) {
          console.log(response.data)
          if(response.data.code === 200) {
            data = response.data
          } else {        
            // this.err_message = response.data.
            console.log("shibai")
          }
        }
      }).catch(function(err) {
        // alert(err);
        console.log(err)
        this.show_message = true;
        // this.err_message = "服務端錯誤";
      })
    },


      getDate() {
        console.log(this.user)
        // let name = document.getElementsByName('username')[0].value;
        // let password = document.getElementsByName('password')[0].value;
        let name = this.user.username;
        let password = this.user.password;
        return new Promise(function(resolve, reject) {
          console.log(name)
          let req = new XMLHttpRequest();
                    // OPEN
          req.open('POST', BASE_URL+'user/login');
          // req.open('POST', '/user/create_user');
          // 设置请求头部信息
          req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          // 指定服务端返回的数据类型
          req.responseType = 'json';
          req.send('username=' + name + '&password=' + password);                    
          
                    
          // 添加监听事件
          req.onload = function (e) {
            if (this.status === 200) {
            // 获取服务端返回的数据this.response
              console.log("this.response chenggong");
              if (this.response.code === 200) {
                alert("this.response chenggong");
                //重定向
                // window.location.href='index.html';
                let data = this.response.data;
                resolve(data);                               
                // console.log(data);
              } else {
                alert("cuo wu");
                reject("cuo wu");
              }
            } else {
              alert('网络错误');
              reject("网络错误");
                            
            }
          }
        })            
      },


    clickBtn () {
      this.getDate().then(function(data) {
        console.log(data, "***************");
          }, function(err) {
            console.log(this.show_message, "##################");
      });
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
