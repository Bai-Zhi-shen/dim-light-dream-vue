<script setup lang="ts">
import Menu from '@/views/Menu.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header style="padding: 0;">
        <Menu></Menu>
      </el-header>
      <el-main style="padding: 0;">
        <router-view></router-view>
      </el-main>
      <el-footer style="padding: 0;">
        <div style="text-align: center;"><span>备案号：xxxxxx</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>@2023微光筑梦</span></div>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
