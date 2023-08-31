<script lang="ts" setup>
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const activeIndex = ref('1')

const isDark = useDark()
const toggleDark = useToggle(isDark)

let url = location.href
let route = (url).substring((url).lastIndexOf("/") + 1)
if (route == 'home') {
    activeIndex.value = '1'
} else if (route == 'course') {
    activeIndex.value = '2'
} else if (route == 'my') {
    activeIndex.value = '3'
}
</script>

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
            </el-menu>
        </div>
    </div>
</template>

<style>
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