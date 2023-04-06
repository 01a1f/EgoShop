<!-- 公共分类器 -->
<template>
    <div class="container">
      <el-pagination
      background
      layout="prev, pager, next, jumper"
      :total="total"
      :current-page="currentPage"
      @current-change="handleCurrentChange"
      >
    </el-pagination>
    </div>
  </template>
  
  <script>
  export default {
      data(){
        return {
          currentPage:1
        }
      },
      props:{
        total:{
            type:[String,Number],
            default:0
        }
      },
      methods:{
        handleCurrentChange(val){
          this.$bus.$emit("page",val)
        }
      }
  }
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
    text-align: center;
  }
  </style>