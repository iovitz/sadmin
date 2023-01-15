import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/pages',
      name: 'pages',
      component: () => import('@/views/pages/pages.vue'),
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('@/views/pages/dashboard/dashboard.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
  ],
})

export default router
