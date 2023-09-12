<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">

        <el-col :span="4"></el-col>

        <div index="">
            Logo
        </div>

        <el-col :span="8"></el-col>

        <router-link to="/home">
            <el-menu-item index="1">
                首页
            </el-menu-item>
        </router-link>
        <router-link to="/course">
            <el-menu-item index="2">
                申请课程
            </el-menu-item>
        </router-link>
        <router-link to="/my">
            <el-menu-item index="3">
                个人中心
            </el-menu-item>
        </router-link>

        <div style="margin: 0 10px;">
            <el-button @click="toggleDark()" :icon="Sunny" circle v-if="!isDark" />
            <el-button @click="toggleDark()" :icon="Moon" circle v-if="isDark" />
        </div>
        <el-col :span="4">
            <div v-if="!user" style="width: 200px;margin-left: 20px;">
                <el-button @click="showLoginModal()">
                    <span class="ml-2">登录</span>
                </el-button>
            </div>
            <div v-if="user" style="width: 200px;margin-left: 20px;">
                <el-text class="mx-1">欢迎您，{{ user.userName }}&nbsp;&nbsp;&nbsp;&nbsp;</el-text>
                <el-button @click="exitLogin()">
                    <span class="ml-2">退出登录</span>
                </el-button>
            </div>
        </el-col>
    </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { Sunny, Moon } from '@element-plus/icons-vue'

const activeIndex = ref('1')

// 判断当前是否为暗色模式
const isDark = useDark()
// 切换暗色模式
const toggleDark = useToggle(isDark)

// 初始化的时候，根据路由判断当前激活的菜单
let url = location.href
let route = (url).substring((url).lastIndexOf("/") + 1)
if (route == 'home') {
    activeIndex.value = '1'
} else if (route == 'course') {
    activeIndex.value = '2'
} else if (route =='my') {
    activeIndex.value = '3'
}

// 显示登录 传父组件
const emit = defineEmits(['changLoginVisible'])
const showLoginModal = () => {
    emit('changLoginVisible', true)
}

defineProps<{
    user?: any
}>()

// 退出登录
const exitLogin = () => {
    localStorage.removeItem('token')
    location.reload()
}
</script>

<style scoped>
.router-link-active {
    text-decoration: none;
    color: orange;
}

a {
    text-decoration: none;
    color: grey;
}

.flex-grow {
    flex-grow: 1;
}

.el-menu-demo {
    align-items: center;
    justify-content: center;
}
</style>