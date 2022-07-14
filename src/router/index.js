import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AntDesign from '@/views/AntDesign.vue'
import Axios from '@/views/Axios.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/antdesign',
    name: 'Ant-Design',
    component: AntDesign
  },
  {
    path: '/axios',
    name: 'Axios',
    component: Axios
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
