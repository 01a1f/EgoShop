<template>
  <div>
    <el-tree
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
      accordion
    ></el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeString:'',
      data: [
        {
          label: "校内",
          children: [
            {
              label: "大一",
              children: [
                {
                  label: "通选",
                },
                {
                  label: "专业",
                },
              ],
            },
            {
              label: "大二",
              children: [
                {
                  label: "通选",
                },
                {
                  label: "专业",
                },
              ],
            },
            {
              label: "大三",
              children: [
                {
                  label: "通选",
                },
                {
                  label: "专业",
                },
              ],
            },
            {
              label: "大四",
              children: [
                {
                  label: "通选",
                },
                {
                  label: "专业",
                },
              ],
            },
          ],
        },
        {
          label: "课外",
          children: [
            { label: "小说" },
            { label: "诗歌" },
            { label: "散文" },
            { label: "戏剧" },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    handleNodeClick(data) {
      this.$emit('onTree',data)
    }
  },
};
</script>

<style>
</style>