<template>
  <el-row justify="center">
    <el-col :span="10">
      <el-form :model="form" label-width="120px">
        <br />
        <el-form-item v-for="(teacher, index) in form.teachers" :key="teacher.id" :label="'老师' + (index + 1)"
          :prop="'teacher.' + index + '.value'" :rules="{
            required: true,
            message: '不能为空',
            trigger: 'blur',
          }">
          <el-row :gutter="20">
            <el-col :span="20">
              <el-input v-model="teacher.name" />
            </el-col>
            <el-col :span="4">
              <el-button type="danger" :icon="Delete" circle @click.prevent="removeTeacher(teacher)"></el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-row :gutter="20">
          <el-col :span="4"></el-col>
          <el-button type="primary" @click="addTeacher">添加老师</el-button>
        </el-row>
        <br />
        <el-form-item v-for="(student, index) in form.students" :key="student.id" :label="'学生' + (index + 1)"
          :prop="'student.' + index + '.value'" :rules="{
            required: true,
            message: '不能为空',
            trigger: 'blur',
          }">
          <el-row :gutter="20">
            <el-col :span="20">
              <el-input v-model="student.name" />
            </el-col>
            <el-col :span="4">
              <el-button type="danger" :icon="Delete" circle @click.prevent="removeStudent(student)"></el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-row :gutter="20">
          <el-col :span="4">
          </el-col>
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
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">创建课程</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>

      </el-form>
    </el-col>
  </el-row>
</template>
  
<script setup lang="ts">
import { reactive } from 'vue'
import { Delete } from '@element-plus/icons-vue'

// do not use same name with ref
const form = reactive<{
  teachers: TeacherItem[]
  students: StudentItem[]
  subject: string[]
  startDate: string
  startTime: string
  endDate: string
  endTime: string
  online: boolean
  desc: string
}>({
  teachers: [],
  students: [],
  subject: [],
  startDate: '',
  startTime: '',
  endDate: '',
  endTime: '',
  online: false,
  desc: '',
})

interface TeacherItem {
  id: number
  name: string
}
const removeTeacher = (item: TeacherItem) => {
  const index = form.teachers.indexOf(item)
  if (index !== -1) {
    form.teachers.splice(index, 1)
  }
}
const addTeacher = () => {
  form.teachers.push({
    id: Date.now(),
    name: '',
  })
}

interface StudentItem {
  id: number
  name: string
}
const removeStudent = (item: TeacherItem) => {
  const index = form.students.indexOf(item)
  if (index !== -1) {
    form.students.splice(index, 1)
  }
}
const addStudent = () => {
  form.students.push({
    id: Date.now(),
    name: '',
  })
}

// 提交表单
const onSubmit = () => {
  console.log('submit!')
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