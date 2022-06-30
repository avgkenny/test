import { createRouter, createWebHistory} from 'vue-router'
import Home from '@/components/views/Home.vue'
import firstproject from '@/components/views/firstproject.vue'

const routes = [
{
    path: '/Home',
    name: 'Home',
    component: Home
},
{
    path: '/firstproject',
    name: 'Blog',
    component: firstproject
}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router