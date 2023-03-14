<template>
  <div class="home">
    <div class="index-wrap">
      <div class="index-left">
        <HomeNav/>
      </div>
      <div class="index-right">
        <HomeSwiper/>
        <HomeProductList/>
      </div>
    </div>
  </div>
</template>

<script>
import HomeNav from './HomePage/HomeNav.vue'
import HomeSwiper from './HomePage/HomeSwiper.vue';
import HomeProductList from './HomePage/HomeProductList.vue';
export default {
  components: { HomeNav, HomeSwiper ,HomeProductList},
    name:'Home',
    comments:{
      HomeNav,
      HomeSwiper
    }
}
</script>

<style scoped>
  .index-wrap {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
    }
    .index-left {
        float: left;
        width: 300px;
        text-align: left;
    }
    .index-right {
      float: left;
      width: 900px;
    }
</style>