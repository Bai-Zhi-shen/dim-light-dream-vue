<script setup lang="ts">
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
    username: '',
    password: ''
})

const onSubmit = () => {
    console.log('submit!')
}
</script>

<template>
    <el-card class="box-card" style="margin: auto;margin-top: 10%;margin-bottom: 10%;">
        <template #header>
            <div class="card-header">
                <span>登录</span>
                <el-button class="button" text>请先登录</el-button>
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
                <el-button type="primary" @click="onSubmit">登录</el-button>
                <el-button>清空</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>