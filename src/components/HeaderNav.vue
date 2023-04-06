<template>
    <el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"
  router>
    <el-menu-item index="/home">首页</el-menu-item>
    <el-menu-item index="/about">商品管理</el-menu-item>
    <el-menu-item index="/params">规格参数</el-menu-item>
    <el-menu-item index="/ADCategory">广告管理</el-menu-item>
    <el-menu-item index="/login">登录注册</el-menu-item>
    <el-menu-item class="user">
        <span class="user-name">wjs
            <!-- 用户名应该是使用vuex localSorge 登录数据绑定在一起的 后续完成 -->
        </span>
        <el-button @click="logoutHandle">退出</el-button>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data() {
      return {
        activeIndex: '/'
      };
    },
    methods:{
        ...mapMutations('login',['setUser']),
        logoutHandle(){
            this.setUser({})
            localStorage.removeItem('ego')
            this.$router.push('/login')
        },
        handleSelect(key,keyPath){
            sessionStorage.setItem("key",key)
        }
    },
    mounted(){
        if(sessionStorage.getItem('key')){
            this.activeIndex = sessionStorage.getItem('key')
        }
    }
}
</script>

<style scoped>
    .user {
        float: right;
        margin-right: 20px;
        line-height: 60px;
    }
    .user-name {
        color: #fff;
        margin-right: 10px;
        font-size: 15px;
        border-radius: 50%;
        border: 1px solid #fff;
        width: 40px;
        display: inline-block;
        line-height: 40px;
        text-align: center;
    }
</style>