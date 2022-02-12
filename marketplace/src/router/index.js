import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Explore from '../views/Explore.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Explore',
    name: 'Explore',
    component: Explore
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
