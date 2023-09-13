<template>
    <el-row justify="center">
        <el-col :xs="23" :sm="16" :md="14" :lg="12" :xl="10">
            <el-form :model="user" label-width="80px">
                <el-form-item label="手机号">
                    <el-input v-model="user.phone" disabled placeholder="请先登录" />
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="user.userName" placeholder="请输入" maxlength="5" />
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
import { ElMessage } from 'element-plus'
import service from '@/utils/request'
// 当前环境
const env = import.meta.env.MODE

const props = defineProps<{
    user?: any
}>()

const submitUser = () => {
    if (localStorage.getItem('token')) {
        if (env === 'github') {
            props.user.userName = props.user.userName
            props.user.sex = props.user.sex
            props.user.userTypeId = props.user.userTypeId
            ElMessage.success('修改成功')
        } else {
            service.put('/user', {
                userName: props.user.userName,
                sex: props.user.sex,
                userTypeId: props.user.userTypeId
            })
                .then(() => {
                    ElMessage.success('修改成功')
                })
        }
    } else {
        ElMessage.warning('请先登录')
    }
}
</script>