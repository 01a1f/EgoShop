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
        total:100,
        currentPage:1
      }
    },
    methods:{
      handleCurrentChange(val){
        this.$bus.$emit("page",val)
      }
    },
    mounted(){
        this.$api.total().then(res=>{
            if(res.data.status===200){
                this.total = res.data.result[0]["count(*)"]
            }
        })
    }
}
</script>

<style scoped>
.container {
  margin-top: 20px;
  text-align: center;
}
</style>