<template>
  <div class="paramsAdd">
    <el-dialog
      title="选择产品分类"
      :visible.sync="dialogTreeVisible"
      width="60%"
      :before-close="handleClose"
    >
      <pubTree @onTree="getTreeData"/>
      <el-dialog
        title="添加规格参数"
        :visible.sync="dialogParamsVisible"
        width="60%"
        :before-close="handleClose"
        append-to-body
      >
        <el-button @click="addParamsFormHandle">添加主结构</el-button>

        <el-form :model="paramsForm" ref="paramsForm">
          <el-form-item
            v-for="(item, index) in paramsForm.inputList"
            :key="index"
            label="规格参数"
          >
            <el-input v-model="item.value" style="width: 90%"></el-input>
            <el-button @click="removeParamsFormHandle(index)"
              >删除主结构</el-button
            >
            <el-button @click="addParamsChildHandle(index)"
              >添加规格参数子结构</el-button
            >
            <div
              v-for="(childItem, childIndex) in item.children"
              :key="childIndex"
            >
              <div style="width: 80%; margin-left: 80px">
                <span>规格参数子结构</span>
                <el-input
                  v-model="childItem.childValue"
                  style="width: 60%"
                ></el-input>
                <el-button @click="removeParamsChildHandle(index, childIndex)"
                  >删除参数子结构</el-button
                >
              </div>
            </div>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogParamsVisible = false">取 消</el-button>
          <el-button type="primary" @click="finishAddParamsHandle"
            >确认添加</el-button
          >
        </span>
      </el-dialog>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogTreeVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogParamsVisible = true"
            >确定添加规格参数</el-button
          >
        </span>
    </el-dialog>
  </div>
</template>

<script>
import pubTree from '@/components/pubTree.vue';
export default {
  data() {
    return {
      dialogParamsVisible: false,
      dialogTreeVisible: false,
      treeData:{},
      paramsForm: {
        inputList: [
          {
            value: "",
            children: [
              {
                childValue: "",
                value: "",
              },
            ],
          },
        ],
      },
    };
  },
  components:{
    pubTree
  },
  mounted() {
    this.$bus.$on("onFlag", (data) => {
      this.dialogTreeVisible = data;
    });
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    //添加主结构
    addParamsFormHandle() {
      this.paramsForm.inputList.push({
        value: "",
        children: [
          {
            childValue: "",
            value: "",
          },
        ],
      });
    },
    //添加规格参数子结构
    addParamsChildHandle(index) {
      this.paramsForm.inputList[index].children.push({
        childValue: "",
        value: "",
      });
    },
    //删除主结构
    removeParamsFormHandle(index) {
      this.paramsForm.inputList.splice(index, 1);
    },
    //删除子结构
    removeParamsChildHandle(index, childIndex) {
      this.paramsForm.inputList[index].children.splice(childIndex, 1);
    },
    //获取产品分类内容
    getTreeData(data){
      console.log(data)
      this.treeData = data
    },
    //添加规格参数完整信息
    finishAddParamsHandle(){
      this.$api.insertItemParam({
        itemCatid:0,
        content:JSON.stringify(this.paramsForm.inputList)
      }).then(res=>{
        if(res.data.status===200)
        {
          this.dialogParamsVisible = false
          this.dialogTreeVisible =false
          this.$bus.$emit('onParamsAdd',true)
        }
      }).catch(error=>{
        console.log(error)
      })
    }
  },
};
</script>

<style scoped>
.paramsAdd {
  text-align: center;
}
</style>