<script setup lang="ts">
</script>

<template>
  <router-link to="/qiankun-demo-webpack">Three应用</router-link>
  <router-link to="/application-demo1">Vue3应用</router-link>
  <!-- 主应用路由渲染出口 -->
  <router-view></router-view>
  <!-- 微前端子应用路由渲染出口 -->
  <div id="contanier"></div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
