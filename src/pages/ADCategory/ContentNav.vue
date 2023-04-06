<template>
  <div class="content-nav">
    <el-tree
      :props="defaultProps"
      lazy
      :load="loadNode"
      @node-click="handleNodeClick"
      :render-content="renderContent"
      :expand-on-click-node="false"
    ></el-tree>
    <!-- 增加子导航 -->
    <el-dialog
        title="增加子导航"
        :visible.sync="dialogAddNavVisible"
        width="30%"
        :before-close="handleClose"
    >
        <el-form
            :model="navForm"
            ref="navForm"
        >
            <el-form-item label="导航名字">
                <el-input type="text" v-model="navForm.name"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogAddNavVisible = false">取 消</el-button>
        <el-button type="primary" @click="addContentNavHandle">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改子导航 -->
    <el-dialog
        title="修改导航"
        :visible.sync="dialogUpdateNavVisible"
        width="30%"
        :before-close="handleClose"
    >
        <el-form
            :model="navUpdateForm"
            ref="navUpdateForm"
        >
            <el-form-item label="导航名字">
                <el-input type="text" v-model="navUpdateForm.name"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogUpdateNavVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateContentNavHandle">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "name",
      },
      dialogAddNavVisible:false, //增加
      dialogUpdateNavVisible:false, //修改
      navForm:{
        name:""
      },
      navUpdateForm:{
        name:""
      },
      navContent:{}
    };
  },
  inject: ["reload"],
  mounted(){
    console.log(this.isShow)
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    http(id, resolve) {
      this.$api.selectContentCategory(id).then((res) => {
        if (res.data.status === 200) {
          return resolve(res.data.result);
        } else {
          return resolve([]);
        }
      });
    },
    loadNode(node, resolve) {
      if (node.level === 0) {
        this.http({ id: 1 }, resolve);
      }
      if (node.level >= 1) {
        this.http({ id: node.data.cid }, resolve);
      }
    },
    handleNodeClick(node){

    },
    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.append(node, data)}
            >
              添加子分类
            </el-button>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.remove(node, data)}
            >
              删除
            </el-button>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.editor(node, data)}
            >
              修改
            </el-button>
          </span>
        </span>
      );
    },
    append(node,data){
        this.navContent = node.data
        this.dialogAddNavVisible = true
    },
    remove(node,data){
      this.$api.deleteContentCategory({
        cid:node.data.cid
      }).then(res=>{
        console.log(res)
        if(res.data.status === 200)
        {
          this.reload()
        }
      })
    },
    editor(node,data){
      this.navContent = node.data
      this.dialogUpdateNavVisible = true
    },

    //添加
    addContentNavHandle(){
        this.$api.insertContentCategory({
            cid:this.navContent.cid,
            name:this.navForm.name
        }).then(res=>{
            if(res.data.status === 200){
                this.dialogAddNavVisible = false
                this.reload()
            }
        })
    },
    updateContentNavHandle(){
      this.$api.updateContentCategory({
        cid:this.navContent.cid,
        name:this.navUpdateForm.name
      }).then(res=>{
        if(res.data.status === 200){
                this.dialogUpdateNavVisible = false
                this.reload()
            }
      })
    }
  },
};
</script>

<style>
</style>