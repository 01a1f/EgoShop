<template>
  <div>
    <!-- 后台会给一个地址，把这个地址写到action里边即可 -->
    <el-upload
      class="upload-demo"
      ref="upload"
      action=""
      :file-list="fileList"
      :auto-upload="false"
      :on-success="handleSuccess"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <el-button
        style="margin-left: 10px"
        size="small"
        type="success"
        @click="submitUpload"
        >上传到服务器</el-button
      >
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
    //   fileList: [],
    fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, 
    {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    };
  },
  methods: {
    handleSuccess(response) {
      console.log(response);
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
  },
};
</script>

<style>
</style>