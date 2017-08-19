<template>
  <div id="Article">
    <el-row>
      <el-col 
      :span="12" :offset="3" class="row-bg"
      :class="{'grid-content': isShow}"
      :mouseover="showBorder()" 
      :mousemove="hideBoder()"
      :mouseup="pageRedirect()">
        <h2>我是titile</h2>
        <el-tag type="gray">作者：zhangchi</el-tag>
        <p>2017-08-15 13:00</p>
        <p>上面的脚本最终也会alert 16，因为虽然bar不直接处于foo的内部作用域，但bar还是能访问x和tmp。但是，由于tmp仍存在于bar闭包的内部，所以它还是会自加1，而且你每次调用bar时它都会自加1.
　　（考虑到六岁这个限制：我们其实可以建立不止一个闭包方法，比如return它们的数组，也可以把它们设置为全局变量。它们全都指向相同的x和相同的tmp，而不是各自有一份副本。）注：现在来整点儿七岁的内容。上面的x是一个字面值（值传递），和JS里其他的字面值一样，当调用foo时，实参x的值被复制了一份，复制的那一份作为了foo的参数x。那么问题来了，JS里处理object时是用到引用传递的，那么，你调用foo时传递一个object，foo函数return的闭包也会引用最初那个object！
     上面的脚本最终也会alert 16，因为虽然bar不直接处于foo的内部作用域，但bar还是能访问x和tmp。但是，由于tmp仍存在于bar闭包的内部，所以它还是会自加1，而且你每次调用bar时它都会自加1.
　　（考虑到六岁这个限制：
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Article",
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      showBorder() {
        this.isShow = true;
        console.log("this.isShow = true;");
      },
      hideBoder() {
        console.log("this.isShow = false;");
        this.isShow = false;
      },
      pageRedirect() {
        console.log("pageRedirect")
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
  .boder-big:{
		border-width: 1px;
		border-style: outset;
		border-radius: 4px;
		/* border-color: #efefef;  */
		box-shadow:2px 2px 3px #aaaaaa;
  }
</style>

