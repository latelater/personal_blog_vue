<template>
  <div id="HomePage">
    <el-row>
      <el-row>
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in articles" :key="item">
            <h3 class="pointer">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel> 
      </el-row>

      <el-row>
        <el-row>
          <el-col :span="12" :offset="2">
            <div v-for="(article, index) in getArticles" :key="article">
              <show-article  v-if="index < 20" v-bind:articleData="article"></show-article>    
            </div>
          </el-col>
          <el-col :span="8" :offset="2">
            <show-category v-bind:customDate="custom_categories"></show-category>
            <show-category v-bind:customDate="date_categories"></show-category>            
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" :offset="6">
            <el-button-group>
              <el-button type="primary" icon="arrow-left">上一页</el-button>
              <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </el-button-group>
          </el-col>
        </el-row>
      </el-row>
      <el-row  class="end-line"></el-row>
    </el-row>
    
  </div>
</template>

<script>
import axios from 'axios';
import showArticle from './common/ShowArticle';
import showCategory from './common/ShowCategory';

export default {
  name: 'HomePage',
  created() {
    axios.defaults.baseURL = BASE_URL;
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.get('/articles/articleList').then((response) => {
      if(response.status == 200) {
        if(response.data.code == 200) {
          this.getArticles = response.data.data; //监听函数，监听到变量改变即拿十条数据
          this.len = this.getArticles.length;
        } else {
          console.log(response.data.code, response.data.message);          
        }
      }
    }).catch(function(err) {
      console.log(err);
      // return err;
    });

    axios.get('/category/categoryArticles').then(response => {
      if(response.status == 200) {
        if(response.data.code == 200) {
          this.category_articles = response.data.data;
          console.log(this.category_articles);
          this.showCategoryFunc();
        } else {
          console.log(response.data.code, response.data.message);
        }
      } else {
        console.log("出错啦");
      }
    })


  },
  data() {
    return {
      articles: ["第一篇", "第二篇", "第三篇", "第四篇"],
      getArticles: {},
      len: 0,
      category_articles: {},
      custom_categories: [{
        label: 'Custom Categories',
        children: [{ 
          label: '分类1',
          children: [{
            label: '读书笔记1',
            isLast: true
          },{
            label: '博客名称2',
            isLast: true
          }],
          isLast: false
        },
        { 
          label: '分类2',
          children: [{
            label: '读书笔记1',
            isLast: true
          },{
            label: '博客名称2',
            isLast: true
          }],
          isLast: false
        }],
        isLast: false
      }],
      date_categories: [{
        label: 'Date Categories',
        children: [{
          label: '2107年',
          children: [{
            label: '3月',
            children: [{
              label: ''
            }]
          }]
        }]
      }]
    }
  },
  methods: {
    showCategoryFunc() {
      let customShow = [{label:"Custom Categories", children: []}];
      for(let key in this.category_articles.custom) {
        let child1 = {label: key, children: [], isLast:false};
        for(let i = 0; i < this.category_articles.custom[key].length; i++) {
          let child2 = {label: this.category_articles.custom[key][i], isLast:true};
          child1.children.push(child2);         
        }             
        customShow[0].children.push(child1);
      } 
      // if()
      this.custom_categories = customShow;
    }
  },
  components: {
    "show-article": showArticle,
    "show-category": showCategory
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
  .end-line {
    border-top: 1px #e0e0e0 solid;
    padding-top: 10px;
    margin-top: 15px;
    text-align: right !important;
  }
</style>
