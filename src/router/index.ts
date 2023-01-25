import { createRouter, createWebHistory, type RouterOptions } from 'vue-router'
import Login from '@/views/login/login.vue'
import { LocalST } from '@/utils/storage'
import { StorageKey } from '@/const/storage_key'

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
  {
    path: '/pages/not-found',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue'),
  },
  {
    path: '/pages/:pathMatch(.*)*',
    redirect: '/pages/not-found',
  },
]

function fetchRouterOptions(): Promise<RouterOptions> {
  return new Promise(resolve => {
    const routerOptions = {
      history: createWebHistory(import.meta.env.BASE_URL),
      // 这里设计成后端路由
      routes: [
        {
          path: '/pages',
          name: 'pages',
          redirect: '/pages/dashboard',
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
          redirect: '/login',
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
  const router = createRouter(routerOptions)
  router.beforeEach((to, from, next) => {
    // 已经登录成功直接跳转到dashboard
    if (to.path === '/login') {
      const token = LocalST.get(StorageKey.token)
      if (token) {
        next('/pages')
      }
    }
    if (to.path.startsWith('/pages') && !from.path.startsWith('/pages')) {
      const token = LocalST.get(StorageKey.token)
      if (!token) {
        next('/login')
      }
    }
    next()
  })
  return router
}

export default getRouter
