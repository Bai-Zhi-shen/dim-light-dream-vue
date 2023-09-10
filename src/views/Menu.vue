<template>
    <div style="border-bottom: solid 1px var(--el-menu-border-color); width: 100%;">
        <div style="width: 80%; margin:0 auto;">
            <el-menu :default-active="activeIndex" :ellipsis="false" class="el-menu-demo" mode="horizontal"
                style="border-bottom:0px;">

                <el-menu-item index="">
                    Logo
                </el-menu-item>

                <div class="flex-grow" />
                <div class="flex-grow" />

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
                <el-button @click="toggleDark()" style="margin-left: 20px;">
                    <span class="ml-2">{{ isDark ? '暗黑' : '明亮' }}</span>
                </el-button>

                <div v-if="!userName" style="display: flex;width: 250px;margin-left: 20px;">
                    <el-button @click="showLoginModal()">
                        <span class="ml-2">登录</span>
                    </el-button>
                </div>
                <div v-if="userName" style="display: flex;width: 250px;margin-left: 20px;">
                    <span style="display: flex;align-items: center;">欢迎您，{{ userName }}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <el-button @click="exitLogin()">
                        <span class="ml-2">退出登录</span>
                    </el-button>
                </div>
            </el-menu>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const activeIndex = ref('1')

const isDark = useDark()
const toggleDark = useToggle(isDark)

// 初始化的时候，根据路由判断当前激活的菜单
let url = location.href
let route = (url).substring((url).lastIndexOf("/") + 1)
if (route == 'home') {
    activeIndex.value = '1'
} else if (route == 'course') {
    activeIndex.value = '2'
} else if (route == 'my') {
    activeIndex.value = '3'
}

// 显示登录 传父组件
const emit = defineEmits(['changLoginVisible'])
const showLoginModal = () => {
    emit('changLoginVisible', true)
}

const props = defineProps({
    userName: String
})

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