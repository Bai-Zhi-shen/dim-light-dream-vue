<template>
  <div class="header">
    <Menu @changLoginVisible="changLoginVisible" :user="user" ></Menu>
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
import axios from 'axios'
//axios全局配置
axios.defaults.headers['token'] = window.localStorage.getItem("token")


const isLoginVisible = ref(false)
const user = ref('')

const changLoginVisible = (on_off: boolean) => {
  isLoginVisible.value = on_off
}

const refreshingLoginStatus = () => {
  login()
}

const login = () => {
  // 判断是否登录
  if (localStorage.getItem('token')) {
    // 请求用户信息
    axios({
      method: 'get',
      url: import.meta.env.VITE_back_url + '/user'
    })
      .then(res => {
        // 如果状态码为1，则将用户信息赋值给user
        if (res.data.code === 1) {
          user.value = res.data.data
        } else {
          // 否则将user赋值为空
          user.value = ''
        }
      })
      .catch(err => {
        // 打印错误信息
        console.log("请求错误:" + err)
      })
  }
}

login()
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