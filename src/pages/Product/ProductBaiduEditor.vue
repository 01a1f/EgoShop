<template>
  <div>
    <vue-ueditor-wrap
      v-model="msg"
      :config="editorConfig"
      editor-id="editor-demo-01"
    ></vue-ueditor-wrap>
  </div>
</template>

<script>
import VueUeditorWrap from "vue-ueditor-wrap";
export default {
  data() {
    return {
      msg: "",
      editorConfig: {
        // 访问 UEditor 静态资源的根路径，可参考 https://hc199421.gitee.io/vue-ueditor-wrap/#/faq
        UEDITOR_HOME_URL: "/UEditor/",
        // 服务端接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        serverUrl: "//ueditor.zhenghaochuan.com/cos",
      },
    };
  },
  components: {
    VueUeditorWrap,
  },
};
</script>

<style>
</style>