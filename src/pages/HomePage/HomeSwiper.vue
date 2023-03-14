<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide swiper-slide1">
        <img src="../../assets/pictures/p1.jpeg" alt="" />
      </div>
      <div class="swiper-slide swiper-slide2">
        <img src="../../assets/pictures/p2.jpeg" alt="" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper"; // 注意引入的是Swiper
import "swiper/css/swiper.min.css"; // 注意这里的引入

export default {
  data() {
    return {
      // swiper实例  实例上有各种方法
      swiperInstance: null,
    };
  },
  mounted() {
    var swiperInstance = new Swiper(".swiper-container", {
      // config...
      autoplay: true,
      loop: true,
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });
  },
};
</script>
<style scoped>
.swiper-container {
  width: 100%;
}
img {
  width: 100%;
}
.swiper-container {
  margin-top: 15px;
}
</style>
