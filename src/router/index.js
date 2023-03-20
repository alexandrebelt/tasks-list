import { createRouter, createWebHistory } from 'vue-router'
import ListaView from '../views/ListaView.vue'

const routes = [
  {
    path: '/all',
    component: ListaView,
  },
  {
    path: '/false',
    component: ListaView,
  },
  {
    path: '/true',
    component: ListaView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),

  routes
})

export default router
