import Home from '@/views/Home.vue'
import Course from '@/views/Course.vue'
import My from '@/views/My.vue'

import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", redirect: "home" },
        { path: '/home', component: Home },
        { path: '/course', component: Course },
        { path: '/my', component: My },
    ],
})

export default router