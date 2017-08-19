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

      <el-row :gutter="20">
        <el-col :span="12" :offset="2">
          <show-article v-bind:articleData="articleData"></show-article>      
        </el-col>
        <el-col :span="8">
        </el-col>
      </el-row>
      <el-row></el-row>
    </el-row>
    
  </div>
</template>

<script>
import axios from 'axios';
import showArticle from './common/ShowArticle'

export default {
  name: 'HomePage',
  data() {
    return {
      articleData: {
        title: "我是title123",
        author: "zhangchi123",
        date: "2017-08-15 13:00",
        content: "有content"
      },
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
  components: {
    "show-article": showArticle
  }
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
