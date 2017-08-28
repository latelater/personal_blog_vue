<template>
  <div id="Category">
    <el-row>
        <el-col :span="12">
            <el-tree 
            :data="customDate" 
            :props="defaultProps" 
            highlight-current=true 
            @node-click="handleNodeClick"></el-tree>
        </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Category',
    props: {
      customDate: {
        type: Array,
        require: true
      }
    },
    data() {
      return {
        defaultProps: {
          children: 'children',
          label: 'label',
          isLast: true
        }
      };
    },
    methods: {
      handleNodeClick(data, node, com) {
        console.log(data);
        if(data.isLast == true) {
          console.log("I zhixing le");
        }
      }
    }
  };
</script>

<<style>
#Category {
    line-height:22px;
    margin-top: 40px;
}
</style>

