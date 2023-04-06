<template>
  <div class="params">
    <el-table :data="tableData">
      <el-table-column
        prop="id"
        label="规格参数ID"
        width="100"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        prop="itemCatid"
        label="产品关联ID"
        width="100"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        prop="paramData"
        label="规格参数ID"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column label="操作" width="80">
        <template slot-scope="scope">
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
    this.$bus.$on("page", (data) => {
      this.http(data);
    });
    this.$bus.$on("onSearch", (data) => {
      this.tableData = data;
    });
    this.$bus.$on("onParamsAdd", (data) => {
      console.log(data);
      this.http(1);
    });
  },
  methods: {
    http(page) {
      this.$api.selectItemParamAll({ page }).then((res) => {
        this.tableData = res.data.result;
      });
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$api.paramsDelete({ id: row.id }).then((res) => {
          if (res.status === 200) {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.http(1);
          }
        });
      }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
  },
};
</script>

<style scoped>
.params {
  width: 1200px;
  margin: 20px auto;
}
</style>