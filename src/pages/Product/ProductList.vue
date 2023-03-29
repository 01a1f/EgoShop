<template>
  <div class="container">
    <el-table :data="tableData" border>
      <el-table-column prop="id" label="id" width="180"> </el-table-column>
      <el-table-column prop="name" label="书名" width="180"> </el-table-column>
      <el-table-column prop="price" label="价格" width="100"> </el-table-column>
      <el-table-column prop="type" label="类型" width="180"> </el-table-column>
      <el-table-column prop="num" label="数量" width="100"> </el-table-column>
      <el-table-column prop="miaoshu" label="说明" width="299">
        <template v-slot="scope">
          <div v-html="scope.row.miaoshu"></div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="160">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },
  mounted() {
    this.http(1);
    this.$bus.$on("page", (page) => {
      this.http(page);
    });
    this.$bus.$on("searchData", (data) => {
      this.tableData = data;
    });
    this.$bus.$on("refresh", (flag) => {
      this.http(1);
    });
  },
  methods: {
    http(page) {
      this.$api.selectTbItemAllByPage({ page }).then((res) => {
        if (res.data.status === 200) {
          this.tableData = res.data.result;
        }
      });
    },
    handleEdit(index, row) {
      this.$bus.$emit("onEditorEvent",row)
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$api.deleteItemById({ id:row.id }).then((res) => {
            if (res.data.status === 200) {
              this.$message({
                type: "success",
                message: "删除成功!",
              })
              this.http(1)
            }else{
              this.$message({
                type: "error",
                message: "删除失败!",
              })
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style>
</style>