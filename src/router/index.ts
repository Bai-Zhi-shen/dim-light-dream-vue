import Home from '@/views/Home.vue'
import Card from '@/views/Card.vue'
import Dark from '@/views/Dark.vue'

import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path:'/home', component:Home},
        {path:'/card', component:Card},
        {path:'/dark', component:Dark},
    ],
})

export default router