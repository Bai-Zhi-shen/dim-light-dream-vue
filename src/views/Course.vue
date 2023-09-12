<template>
  <el-row justify="center">
    <el-col :xs="23" :sm="16" :md="14" :lg="12" :xl="10">
      <el-form :model="form" label-width="80px">
        <br />
        <el-form-item v-for="(teacher, index) in form.teachers" :key="teacher.key" :label="'老师' + (index + 1)"
          :prop="'teacher.' + index + '.value'">

          <el-select v-model="teacher.id" class="m-2" placeholder="请选择老师" size="large">
            <el-option v-for="item in teachers" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>

          <el-button type="danger" :icon="Delete" circle @click.prevent="removeTeacher(teacher)"></el-button>
        </el-form-item>
        <el-row justify="center">
          <el-button type="primary" @click="addTeacher">添加老师</el-button>
        </el-row>
        <br />
        <el-form-item v-for="(student, index) in form.students" :key="student.key" :label="'学生' + (index + 1)"
          :prop="'student.' + index + '.value'">

          <el-select v-model="student.id" class="m-2" placeholder="请选择学生" size="large">
            <el-option v-for="item in students" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>

          <el-button type="danger" :icon="Delete" circle @click.prevent="removeStudent(student)"></el-button>
        </el-form-item>
        <el-row justify="center">
          <el-button type="primary" @click="addStudent">添加学生</el-button>
        </el-row>
        <br />
        <el-form-item label="科目">
          <el-checkbox-group v-model="form.subject">
            <el-checkbox label="语文" name="type" />
            <el-checkbox label="数学" name="type" />
            <el-checkbox label="英语" name="type" />
            <el-checkbox label="其他" name="type" />
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="开始时间">
          <el-col :span="11">
            <el-date-picker v-model="form.startDate" type="date" placeholder="选择一个日期" style="width: 100%" />
          </el-col>
          <el-col :span="2" class="text-center">
            <span class="text-gray-500">-</span>
          </el-col>
          <el-col :span="11">
            <el-time-picker v-model="form.startTime" placeholder="选择一个时间" style="width: 100%" />
          </el-col>
        </el-form-item>

        <el-form-item label="结束时间">
          <el-col :span="11">
            <el-date-picker v-model="form.endDate" type="date" placeholder="选择一个日期" style="width: 100%" />
          </el-col>
          <el-col :span="2" class="text-center">
            <span class="text-gray-500">-</span>
          </el-col>
          <el-col :span="11">
            <el-time-picker v-model="form.endTime" placeholder="选择一个时间" style="width: 100%" />
          </el-col>
        </el-form-item>

        <el-form-item label="是否线上">
          <el-switch v-model="form.online" />
        </el-form-item>

        <el-form-item label="备注">
          <el-input v-model="form.description" type="textarea" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitLesson">创建课程</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>

      </el-form>
    </el-col>
  </el-row>
</template>
  
<script setup lang="ts">
import { reactive } from 'vue'
import { Delete } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import axios from 'axios'

// do not use same name with ref
const form = reactive<{
  teachers: UniqueItem[]
  students: UniqueItem[]
  subject: string[]
  startDate: string
  startTime: string
  endDate: string
  endTime: string
  online: boolean
  description: string
}>({
  teachers: [],
  students: [],
  subject: [],
  startDate: '',
  startTime: '',
  endDate: '',
  endTime: '',
  online: false,
  description: '',
})

interface UniqueItem {
  key: number
  id: string
}

const removeTeacher = (item: UniqueItem) => {
  const index = form.teachers.indexOf(item)
  if (index !== -1) {
    form.teachers.splice(index, 1)
  }
}
const addTeacher = () => {
  form.teachers.push({
    key: Date.now(),
    id: '',
  })
}

const removeStudent = (item: UniqueItem) => {
  const index = form.students.indexOf(item)
  if (index !== -1) {
    form.students.splice(index, 1)
  }
}
const addStudent = () => {
  form.students.push({
    key: Date.now(),
    id: '',
  })
}

// 测试数据，未来通过后端获取
const teachers = [
  { id: '114', name: '测试老师1' },
  { id: '514', name: '测试老师2' },
]

const students = [
  { id: '1515', name: '测试学生1' },
  { id: '810', name: '测试学生2' },
]

// 提交表单
const submitLesson = () => {
  axios.post('/lesson', {
    teachers: form.teachers,
    students: form.students,
    subject: form.subject,
    startDate: form.startDate,
    startTime: form.startTime,
    endDate: form.endDate,
    endTime: form.endTime,
    online: form.online,
    description: form.description,
  })
    .then(res => {
      if (res.data.code === 1) {
        ElMessage.success('添加课程成功')
      } else {
        ElMessage.warning(res.data.msg)
      }
    })
    .catch(err => {
      ElMessage.error('连接服务器失败：' + err)
    })
}
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>