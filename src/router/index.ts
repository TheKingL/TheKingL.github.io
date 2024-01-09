import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import Votee from "@/views/Votee.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Votee',
      name: 'Votee',
      component: Votee
    }
  ]
})

export default router
