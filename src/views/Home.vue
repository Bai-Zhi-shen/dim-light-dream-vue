<template>
    <div class="masthead">
        <div class="masthead-mask">
            <h1 class="tagline">加入我们, 成为志愿者!</h1>
        </div>
    </div>

    <el-row justify="center" class="text-center" style="margin: 50px 0;">
        <el-col :span="4">
            <div>
                <el-icon color="#409EFC" size="100">
                    <CircleCheck />
                </el-icon>
                <h3>快速注册</h3>
                <p>使用邮箱一键注册!</p>
            </div>
        </el-col>
        <el-col :span="4">
            <div>
                <el-icon color="#409EFC" size="100">
                    <CircleCheck />
                </el-icon>
                <h3>选择课程</h3>
                <p>注册时一键选择自己想学/想教科目, 随后亦可以随时更改!</p>
            </div>
        </el-col>
        <el-col :span="4">
            <div>
                <el-icon color="#409EFC" size="100">
                    <CircleCheck />
                </el-icon>
                <h3>简单易用</h3>
                <p>所有操作简单不繁琐，所见即所得!</p>
            </div>
        </el-col>
    </el-row>

    <el-row>
        <el-col :span="3"></el-col>
        <el-col :span="6" style="margin: auto;">
            <h2>学科专业性强</h2>
            <p>该团队由沈阳航空航天大学人工智能学院的学生组成，具有专业知识和技能，能够为学生们提供有效的学科辅导和知识指导。</p>
        </el-col>
        <el-col :span="3"></el-col>
        <el-col :span="12">
            <el-image src="https://wgzm.soai.cc/static/index/assets/img/bg-showcase-1.jpg" fit="cover" />
        </el-col>
    </el-row>
    <el-row>

        <el-col :span="12">
            <el-image src="https://wgzm.soai.cc/static/index/assets/img/bg-showcase-2.jpg" fit="cover" />
        </el-col>
        <el-col :span="3"></el-col>
        <el-col :span="6" style="margin: auto;">
            <h2>关注社会责任</h2>
            <p>关注社会责任。该团队成员通过利用自己的假期时间走进社会，回馈社会，关注弱势群体，帮助学生们解决学习上的困难，为孩子们送去关怀与帮助。</p>
        </el-col>
        <el-col :span="3"></el-col>
    </el-row>
    <el-row>
        <el-col :span="3"></el-col>
        <el-col :span="6" style="margin: auto;">
            <h2>注重多元发展</h2>
            <p>注重多元发展。该团队的志愿者不仅关注学生们的学习，还注重提高学生们的综合素质，包括才艺展示、心理辅导、体育锻炼等方面，促进学生全面发展。</p>
        </el-col>
        <el-col :span="3"></el-col>
        <el-col :span="12">
            <el-image src="https://wgzm.soai.cc/static/index/assets/img/bg-showcase-3.jpg" fit="cover" />
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { CircleCheck } from '@element-plus/icons-vue'
</script>

<style scoped>
.text-center {
    text-align: center;
}

.tagline {
    text-align: center;
    color: #fff;
    font-size: 3rem;
    font-weight: 700;
}

.masthead {
    width: 100%;
    background-color: #343a40;
    background: url(https://wgzm.soai.cc/static/index/assets/img/bg-masthead.jpg);
    background-position: center;
    background-size: cover;
}

.masthead-mask {
    height: 100%;
    width: 100%;
    padding-top: 8rem;
    padding-bottom: 8rem;
    background: rgba(28, 55, 94, .3);
}

@media (min-width: 768px) {
    .masthead-mask {
        padding-top: 12rem;
        padding-bottom: 12rem;
    }
}

.introduce {
    width: min(100% - 2rem, 90rem);
    margin: 0 auto;
}
</style>