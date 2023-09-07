<template>

  <el-row justify="center" style="margin: 2%;">
    <el-transfer v-model="value" filterable :filter-method="filterMethod" filter-placeholder="搜索"
      :titles="['志愿者名单', '选择']" :data="data" />
  </el-row>

  <el-row justify="center" style="margin: 2%;">
    <el-transfer v-model="value" filterable :filter-method="filterMethod" filter-placeholder="搜索" :titles="['学生名单', '选择']"
      :data="data" />
  </el-row>

  <el-row justify="center">
    <el-col :span="10">
      <el-form :model="form" label-width="120px">

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
import { ref } from 'vue'

// do not use same name with ref
const form = reactive({
  subject: [],
  startDate: '',
  startTime: '',
  endDate: '',
  endTime: '',
  online: false,
  desc: '',
})

interface Option {
  key: number
  label: string
  initial: string
}

const generateData = () => {
  const data: Option[] = []
  const states = [
    '丁敏',
    '余涛',
    '阎秀兰',
    '梁艳',
    '黄霞',
    '毛磊',
    '刘娜 ',
  ]
  const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT']
  states.forEach((city, index) => {
    data.push({
      label: city,
      key: index,
      initial: initials[index],
    })
  })
  return data
}

const data = ref<Option[]>(generateData())
const value = ref([])

const filterMethod = (query:any, item:any) => {
  return item.initial.toLowerCase().includes(query.toLowerCase())
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