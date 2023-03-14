<template>
  <div id="app">
    <HeaderNav/>
    <!-- <router-link to="/home">首页</router-link>
    <div></div>
    <router-link to="/about">关于</router-link>
    <div></div>
    因为使用了element 的导航组件，可以直接使用该组件的 router 属性
    是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转

    代替了router-link 的功能
    -->
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue';
export default {
  name: 'App',
  components:{
    HeaderNav
  }
}
</script>

<style>

</style>
