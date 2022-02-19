import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Explore from '../views/Explore.vue'
import Create from "../views/Create";
import NftInfo from "../views/NftInfo";
import MyProfile from "../views/MyProfile";

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
  },
  {
    path: '/Create',
    name: 'Create',
    component: Create
  },
  {
    path: '/NftInfo',
    name: 'NftInfo',
    component: NftInfo
  },
  {
    path: '/MyProfile',
    name: 'MyProfile',
    component: MyProfile
  }
]

const router = createRouter({
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
  history: createWebHistory(),
  routes
})

export default router
