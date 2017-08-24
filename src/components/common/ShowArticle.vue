<template>
  <div id="Article">
    <el-row  class="pointer">
      <el-col 
      :span="24" class="row-bg"
      :class="{'grid-content': isShow}"
      v-on:mouseover.native="showBorder()" 
      v-on:mouseout.native="hideBoder()"
      v-on:mouseup.native="pageRedirect()">
        <h2>{{articleData.title}}</h2>
        <el-tag type="gray">{{articleData.author}}</el-tag>
        <p>{{articleData.article_date}}</p>
        <p>{{articleData.content}}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    props: {
      articleData: {
        type: Object,
        require: true,
        default : function () {
          return {
            title: "我是title",
            author: "zhangchi",
            article_date: "2017-08-15 13:00",
            content: "",
            category_name: ""
          }
        }
      }
    },
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      showBorder() {
        this.isShow = true;
      },
      hideBoder() {
        this.isShow = false;
      },
      pageRedirect() {
        console.log(this.articleData)
      }
    },
    components: {}
  }
</script>

<style>
  #Article {
    line-height:22px;
    margin-top: 40px;
    
  }
  .grid-content {
    min-height: 36px;
		border-width: 1px;
		border-style: outset;
		border-radius: 4px;
		/* border-color: #efefef;  */
		box-shadow:2px 2px 3px #aaaaaa;
  }
  .row-bg {
    padding: 10px 40px;
    background-color: #f9fafc;
  }
</style>