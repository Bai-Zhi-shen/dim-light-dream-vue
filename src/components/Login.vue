<template>
    <div class="login-modal">
        <el-card class="box-card" style="width: 500px;">
            <template #header>
                <div class="card-header" style="display: flex;">
                    <span v-if="!isRegisterForm">登录</span> <span v-else>注册</span>
                    <el-button @click="hideLoginModal" text style="margin-left: auto">关闭</el-button>
                </div>
            </template>
            <el-form :model="loginForm" v-if="!isRegisterForm">
                <el-form-item>
                    <el-input v-model="loginForm.phone" placeholder="请输入手机号" />
                </el-form-item>
                <el-form-item>
                    <el-input v-model="loginForm.password" placeholder="请输入密码" show-password />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button>清空</el-button>
                    <el-button type="primary" @click="isRegisterForm = !isRegisterForm"
                        style="margin-left: auto">前往注册</el-button>
                </el-form-item>
            </el-form>

            <el-form :model="registerForm" v-if="isRegisterForm">
                <el-form-item>
                    <el-input v-model="registerForm.phone" placeholder="未来登录用的手机号" maxlength="11" />
                </el-form-item>
                <el-form-item>
                    <el-input v-model="registerForm.password" placeholder="未来登录用的密码" show-password maxlength="20" />
                </el-form-item>
                <el-form-item>
                    <el-input v-model="registerForm.userName" placeholder="用户名" maxlength="5" />
                </el-form-item>

                <el-form-item label="性别">
                    <el-radio-group v-model="registerForm.sex">
                        <el-radio label="0">隐藏</el-radio>
                        <el-radio label="1">男</el-radio>
                        <el-radio label="2">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="身份">
                    <el-radio-group v-model="registerForm.userTypeId">
                        <el-radio label="1">志愿者</el-radio>
                        <el-radio label="2">学生</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="register">注册</el-button>
                    <el-button>清空</el-button>
                    <el-button type="primary" @click="isRegisterForm = !isRegisterForm"
                        style="margin-left: auto">前往登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import service from '@/utils/request'
// 当前环境
const env = import.meta.env.MODE

const isRegisterForm = ref(false)

// do not use same name with ref
const loginForm = reactive({
    phone: '',
    password: ''
})

const registerForm = reactive({
    phone: '',
    password: '',
    userName: '',
    sex: '0',
    userTypeId: '1'
})

const login = () => {
    if (env === 'github') {
        if (loginForm.phone === 'test' && loginForm.password === '123456') {
            localStorage.setItem("token", 'test')
            ElMessage.success('登录成功')
            hideLoginModal()
            refreshingLoginStatus()
        } else {
            ElMessage.warning('测试账号: test \n 密码: 123456')
        }
    }
    else {
        service.post('/login', {
            phone: loginForm.phone,
            password: loginForm.password
        })
            .then(res => {
                localStorage.setItem("token", res.data)
                ElMessage.success('登录成功')
                hideLoginModal()
                refreshingLoginStatus()
            })
    }
}

const register = () => {
    if (env === 'github') {
        ElMessage.warning('测试版不能注册')
    }
    else {
        service.post('/login/register', {
            phone: registerForm.phone,
            password: registerForm.password,
            userName: registerForm.userName,
            sex: registerForm.sex,
            userTypeId: registerForm.userTypeId
        })
            .then(() => {
                ElMessage.success('注册成功')
                isRegisterForm.value = !isRegisterForm
            })
    }
}

// 隐藏登录 传父组件
const emit = defineEmits(['changLoginVisible', 'refreshingLoginStatus'])
const hideLoginModal = () => {
    emit('changLoginVisible', false)
}
const refreshingLoginStatus = () => {
    emit('refreshingLoginStatus')
}
</script>

<style scoped>
.login-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    /* 设置 z-index 值，确保模态窗口位于所有其他元素之上 */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    /* 设置背景颜色，使其半透明 */
}
</style>