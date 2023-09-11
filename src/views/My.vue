<template>
    <el-row justify="center">
        <el-col :span="10">
            <el-form :model="user" label-width="120px">
                <el-form-item label="手机号">
                    <el-text class="mx-1">{{ user.phone }}</el-text>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="user.userName" placeholder="请输入" />
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio-group v-model="user.sex">
                        <el-radio :label="0">隐藏</el-radio>
                        <el-radio :label="1">男</el-radio>
                        <el-radio :label="2">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="身份">
                    <el-radio-group v-model="user.userTypeId">
                        <el-radio :label="1">志愿者</el-radio>
                        <el-radio :label="2">学生</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitUser">保存更改</el-button>
                    <el-button>清空</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ElMessage } from 'element-plus'
//axios全局配置
axios.defaults.headers['token'] = window.localStorage.getItem("token")

const props = defineProps<{
    user?: any
}>()

const submitUser = () => {
    axios.put(import.meta.env.VITE_back_url + '/user', {
        userName: props.user.userName,
        sex: props.user.sex,
        userTypeId: props.user.userTypeId
    })
        .then(res => {
            if (res.data.code === 1) {
                ElMessage.success('修改成功')
            } else {
                ElMessage.warning(res.data.msg)
            }
        })
        .catch(err => {
            ElMessage.error('连接服务器失败：' + err)
        })
}
</script>