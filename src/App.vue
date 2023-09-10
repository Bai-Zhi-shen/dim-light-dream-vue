<template>
  <el-container>
    <el-header class="header">
      <Menu @changLoginVisible="changLoginVisible" :userName="userName"></Menu>
    </el-header>
    <el-main class="main">
      <router-view></router-view>
    </el-main>
    <el-footer class="footer">
      <div style="text-align: center; position:relative;">
        <span>备案号:
          xxxxxx</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>@2023微光筑梦</span>
      </div>
    </el-footer>
  </el-container>
  <Login v-if="isLoginVisible" @changLoginVisible="changLoginVisible" @refreshingLoginStatus="refreshingLoginStatus"></Login>
</template>

<script setup lang="ts">
import Menu from '@/views/Menu.vue'
import Login from '@/components/Login.vue'
import { ref } from 'vue'
import axios from 'axios'

const isLoginVisible = ref(false)
const userName = ref('')

const changLoginVisible = (on_off: boolean) => {
  isLoginVisible.value = on_off
}

const refreshingLoginStatus = () => {
  login()
}

const login = () => {
  //axios全局配置
  axios.defaults.headers['token'] = window.localStorage.getItem("token")
  if (localStorage.getItem('token')) {
    axios({
      method: 'get',
      url: import.meta.env.VITE_back_url + '/user'
    })
      .then(res => {                    //请求成功后执行函数
        if (res.data.code === 1) {
          //请求成功之后给用户名赋值
          userName.value = res.data.data.userName
        } else {
          console.log("登录失败")
        }
      })
      .catch(err => {                   //请求错误后执行函数
        console.log("请求错误:" + err)
      })
  }
}

login()
</script>

<style scoped>
.header {
  height: 60px;
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 999;
}

.main {
  padding: 0;
  position: absolute;
  left: 0;
  top: 60px;
  right: 0;
  bottom: 60px;
  overflow-y: auto;
  overflow-x: hidden;
}

.footer {
  padding: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  border-top: solid 1px var(--el-menu-border-color);
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
