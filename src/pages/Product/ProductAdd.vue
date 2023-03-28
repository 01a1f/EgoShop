<template>
  <div class="container">
    <el-dialog
      title="添加书籍"
      :visible.sync="dialogVisible"
      width="70%"
      :before-close="handleClose"
    >
      <el-form label-width="70px" :model="addForm" ref="addForm">
        <el-form-item label="商品类目">
          <span>{{ addForm.type }}</span>
          <el-button type="primary" @click="deVisibleHandle"
            >类目选择</el-button
          >
          <el-dialog
            title="类目选择"
            width="50%"
            append-to-body
            :visible.sync="deVisible"
          >
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="deVisible = false"
                >确 定</el-button
              >
            </span>
            <ProductTree @onTree="getTreeData" />
          </el-dialog>
        </el-form-item>
        <el-form-item label="书籍名称">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="addForm.price"></el-input>
        </el-form-item>
        <el-form-item label="书籍数量">
          <el-input v-model="addForm.num"></el-input>
        </el-form-item>
        <el-form-item label="图片上传">
          <el-button type="primary" @click="upVisibleHandle"
            >选择图片</el-button
          >
          <el-dialog
            title="图片上传"
            width="50%"
            append-to-body
            :visible.sync="upVisible"
          >
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="upVisible = false"
                >确 定</el-button
              >
            </span>
            <ProductUpload></ProductUpload>
          </el-dialog>
        </el-form-item>
        <el-form-item label="书籍描述">
          <ProductWangEditor @onEditor="getEditor" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addProducthandle">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ProductTree from "./ProductTree.vue";
import ProductUpload from "./ProductUpload.vue";
import ProductWangEditor from "./ProductWangEditor.vue";
export default {
  data() {
    return {
      addForm: {
        name: "",
        price: "",
        type: "",
        num: "",
        miaoshu: "",
      },
      typeData: {},
      dialogVisible: false,
      deVisible: false,
      upVisible: false,
    };
  },
  components: { ProductTree, ProductUpload, ProductWangEditor },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    deVisibleHandle() {
      this.deVisible = true;
    },
    upVisibleHandle() {
      this.upVisible = true;
    },
    //读取分类的数据
    getTreeData(data) {
      this.typeData = data;
      this.addForm.type = this.typeData.label;
      console.log(data);
    },
    //接收富文本内容
    getEditor(data) {
      this.addForm.miaoshu = data;
    },
    //添加产品
    addProducthandle() {
      if (
        this.addForm.name === "" ||
        this.addForm.num === "" ||
        this.addForm.price === ""
      ) {
        alert("请检查书名、数量、价格相关信息是否完整！");
      } else {
        this.$api.insertTbItem(this.addForm).then((res) => {
          this.$bus.$emit('refresh',true)
        });
        this.dialogVisible = false;
      }
    },
  },
  mounted() {
    this.$bus.$on("onAddEvent", (data) => {
      this.dialogVisible = data;
    });
  },
};
</script>

<style scoped>
</style>