<template>
  <div>
    <el-table :data="tableData">
        <el-table-column prop="id" label="规格参数ID">
            
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    data(){
        return {
            tableData:[]
        }
    },
    mounted(){
        this.$api.selectItemParamAll().then(res =>{
            console.log(res.data)
            this.tableData =  res.data.result
        })
    }
}
</script>

<style>

</style>