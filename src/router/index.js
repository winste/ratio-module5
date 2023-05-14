import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HotelView from '../views/HotelView.vue'
import OrderView from '../views/OrderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/hotel/detail/:id',
      name: 'hotel',
      component: HotelView
    },
    {
      path: '/order/:id',
      name: 'form',
      component: OrderView
    }
  ]
})

export default router
