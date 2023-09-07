<template>
    <div class="login-modal">
        <el-card class="box-card" style="width: 500px;">
            <template #header>
                <div class="card-header" style="display: flex;">
                    <span>登录</span>
                    <el-button @click="hideLoginModal" text style="margin-left: auto">关闭</el-button>
                </div>
            </template>
            <el-form :model="form">
                <el-form-item>
                    <el-input v-model="form.username" placeholder="请输入用户名" />
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.password" placeholder="请输入密码" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm">登录</el-button>
                    <el-button>清空</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
    username: '',
    password: ''
})

const submitForm = () => {
    // 处理登录表单提交逻辑  
}

// 隐藏登录 传父组件
const emit = defineEmits(['changLoginVisible'])
const hideLoginModal = () => {
    emit('changLoginVisible', false)
}
</script>

<style scoped>
.login-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    /* 设置 z-index 值，确保模态窗口位于所有其他元素之上 */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    /* 设置背景颜色，使其半透明 */
}
</style>