import { createRouter, createWebHistory, type RouterOptions } from 'vue-router'
import Login from '@/views/login/login.vue'

// 设计成后端路由
export const pagesChildRouter = [
  {
    path: '/pages/dashboard',
    name: 'dashboard',
    component: () => import('@/views/pages/dashboard/dashboard.vue'),
  },
  {
    path: '/pages/dashboard',
    name: 'dashboard',
    component: () => import('@/views/pages/dashboard/dashboard.vue'),
  },
]

function fetchRouterOptions(): Promise<RouterOptions> {
  return new Promise(resolve => {
    const routerOptions = {
      history: createWebHistory(import.meta.env.BASE_URL),
      // 这里设计成后端路由
      routes: [
        {
          path: '/',
          redirect: '/pages ',
        },
        {
          path: '/pages',
          name: 'pages',
          redirect: '/pages/dashboard',
          icon: '',
          component: () => import('@/views/pages/pages.vue'),
          children: pagesChildRouter,
        },
        {
          path: '/login',
          name: 'login',
          component: Login,
        },
        {
          path: '/:pathMatch(.*)*',
          component: () => import('@/views/not-found/not-found.vue'),
        },
      ],
    }
    setTimeout(() => {
      resolve(routerOptions)
    }, 1000)
  })
}

/**
 * 从后端拉取路由数据
 */
async function getRouter() {
  const routerOptions = await fetchRouterOptions()
  return createRouter(routerOptions)
}

export default getRouter
