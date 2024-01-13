import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue";
import Votee from "@/views/Votee.vue";
import Bingo from "@/views/Bingo.vue";
import Timebomb from "@/views/Timebomb.vue";
import Peach from "@/views/Peach.vue";
import Portefolio from "@/views/Portefolio.vue";
import SkyLink from "@/views/SkyLink.vue";

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
    },
    {
      path: '/Bingo',
      name: 'Bingo',
      component: Bingo
    },
    {
      path: '/Timebomb',
      name: 'Timebomb',
      component: Timebomb
    },
    {
      path: '/Peach',
      name: 'Peach',
      component: Peach
    },
    {
      path: '/Portefolio',
      name: 'Portefolio',
      component: Portefolio
    },
    {
      path: '/SkyLink',
      name: 'SkyLink',
      component: SkyLink
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {top: 0}
  }
})

export default router
