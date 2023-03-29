<template>
    <div class="container">
      <el-dialog
        title="编辑书籍"
        :visible.sync="dialogEditorVisible"
        width="70%"
        :before-close="handleClose"
      >
        <el-form label-width="70px" :model="editorForm" ref="editorForm">
          <el-form-item label="商品类目">
            <span>{{ editorForm.type }}</span>
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
            <el-input v-model="editorForm.name"></el-input>
          </el-form-item>
          <el-form-item label="价格">
            <el-input v-model="editorForm.price"></el-input>
          </el-form-item>
          <el-form-item label="书籍数量">
            <el-input v-model="editorForm.num"></el-input>
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
            <ProductWangEditor @onEditor="getEditor" :miaoshu="editorForm.miaoshu"/>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogEditorVisible = false">取 消</el-button>
          <el-button type="primary" @click="editorProducthandle">确 定</el-button>
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
        editorForm: {
          name: "",
          price: "",
          type: "",
          num: "",
          miaoshu: "",
        },
        typeData: {
            id:0,
            type:''
        },
        currentData:{},
        dialogEditorVisible: false,
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
        this.typeData.type = data.label
        this.editorForm.type = this.typeData.type;
      },
      //接收富文本内容
      getEditor(data) {
        this.editorForm.miaoshu = data;
        console.log(this.editorForm.miaoshu)
      },
      //编辑产品
      editorProducthandle() {
        this.$api.UpdateTbItem({
            id:this.typeData.id,
            name:this.editorForm.name,
            price:this.editorForm.price,
            type:this.editorForm.type,
            miaoshu:this.editorForm.miaoshu,
            num:this.editorForm.num
        }).then(res=>{
          console.log(res.data)
          if(res.data.status===200){
            this.dialogEditorVisible=false
            this.$bus.$emit('refresh',true)
          }
        }).catch(error=>{
            console.log(error)
        })
      },
    },
    mounted() {
      this.$bus.$on("onEditorEvent", (row) => {
        this.dialogEditorVisible = true;
        this.currentData = row;
         // 获取预更新信息
        this.$api.preUpdateItem({id:row.id}).then(res=>{
            console.log(res.data)
            this.typeData.id = res.data.result[0].id
            this.editorForm.name = res.data.result[0].name
            this.editorForm.price = res.data.result[0].price
            this.editorForm.num = res.data.result[0].num
            this.editorForm.miaoshu = res.data.result[0].miaoshu
            this.editorForm.type = res.data.result[0].type
        //     name: "",
        //   price: "",
        //   type: "",
        //   num: "",
        //   miaoshu: "",
        })
      });
    },
  };
  </script>
  
  <style scoped>
  </style>