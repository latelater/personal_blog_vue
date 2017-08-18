<template>
  <div id="HomePage">
    <el-row>
       <el-row>
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in articles" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel> 
      </el-row>

      <el-row></el-row>
      <el-row></el-row>
    </el-row>
    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomePage',
  data() {
    return {
      articles: ["第一篇", "第二篇", "第三篇", "第四篇"]
    }
  },
  methods: {
    getAticlesList () {
      axios.defaults.baseURL = BASE_URL;
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.get('/articles/articleList').then(function(response) {
        console.log(response);
      }).catch(function(err) {
        console.log(err);
      })
    }
  },
}
</script>

<style>
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
    background-color: white;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  h3 {
    text-align: center;
  }
</style>
