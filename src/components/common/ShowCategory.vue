<template>
  <div id="Category">
    <el-row>
        <el-col :span="12">
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Category',
    data() {
      return {
        data: [{
          label: '一级 1',
          children: [{ 
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
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

