<template>
  <div class="header">
    <Menu @changLoginVisible="changLoginVisible" @refreshingLoginStatus="refreshingLoginStatus" :user="user"></Menu>
  </div>

  <div class="main">
    <router-view :user="user" style="min-height:calc(100vh - 200px);"></router-view>

    <el-row style="height: 100px;">
      <el-col :span="6" :offset="6" style="display: flex;">
        <text style="margin: auto 0;">© 微光筑梦 2023. 版权所有.</text>
      </el-col>
      <el-col :span="6" :offset="3" style="display: flex;">
        <text style="margin: auto 0;">联系方式: 2496973903@qq.com</text>
      </el-col>
    </el-row>
  </div>
  <Login v-if="isLoginVisible" @changLoginVisible="changLoginVisible" @refreshingLoginStatus="refreshingLoginStatus">
  </Login>
</template>

<script setup lang="ts">
import Menu from '@/views/Menu.vue'
import Login from '@/components/Login.vue'
import { ref } from 'vue'
import service from '@/utils/request'
// 当前环境
const env = import.meta.env.MODE

const isLoginVisible = ref(false)
const user = ref({})

const changLoginVisible = (on_off: boolean) => {
  isLoginVisible.value = on_off
}

// 刷新登录状态，获取自我信息
const refreshingLoginStatus = () => {
  if (localStorage.getItem('token')) {
    if (env === 'github') {
      user.value = {
        userId: 2,
        phone: 'test',
        userName: '测试账号',
        sex: 0,
        userTypeId: 1,
      }
    } else {
      service.get('/user')
        .then(res => {
          user.value = res.data
        })
        .catch(() => {
          localStorage.removeItem('token')
        })
    }
  } else {
    user.value = {}
  }
}

refreshingLoginStatus()
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
}

.main {
  top: 60px;
  height: calc(100vh - 57px);
  overflow-y: auto;
  overflow-x: hidden;
}

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