<template>
  <div class="content">
    <div class="content-left"><ContentNav v-if="isShow" /></div>
    <div class="content-right"><ContentInfo /></div>
  </div>
</template>

<script>
import ContentInfo from "./ContentInfo.vue";
import ContentNav from "./ContentNav.vue";
export default {
  components: { ContentInfo, ContentNav },
  data() {
    return {
      isShow: true,
    };
  },
  provide() {
    return {
      reload:this.reload
    };
  },
  methods: {
    reload() {
      this.isShow = false;
      this.$nextTick(() => {
        //DOM更行完成
        this.isShow = true;
        console.log("123");
      });
    },
  },
};
</script>

<style scoped>
.content {
  text-align: center;
  height: 200px;
  margin: 0 auto;
  margin-top: 10px;
  width: 1200px;
}
.content-left {
  float: left;
  width: 25%;
  height: 100%;
}
.content-right {
  float: left;
  width: 75%;
  height: 100%;
}
.custom-tree-node {
  display: inline-block;
  text-align: right;
  width: 100%;
}
.upload img {
  width: 200px;
}
</style>