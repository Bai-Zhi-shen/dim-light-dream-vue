<script setup lang="ts">
import Menu from '@/views/Menu.vue'
</script>

<template>
  <Menu></Menu>

  <div>
    <router-link to="/home?key=Home">Go to Home</router-link>
    <router-link to="/card">Go to Card</router-link>
    <router-link to="/dark">Go to Dark</router-link>
    <router-view></router-view>
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
