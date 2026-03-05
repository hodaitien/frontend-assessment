import { ROUTE_NAME } from '@/constants/route-name'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/guards/AuthGuard.vue'),
      children: [
        {
          path: '/',
          component: () => import('@/layouts/index.vue'),
          children: [
            {
              path: '/login',
              name: ROUTE_NAME.LOGIN,
              meta: {
                layout: 'UnAuth'
              },
              component: () => import('@/pages/login/IndexPage.vue')
            },
            {
              path: '/',
              name: ROUTE_NAME.TOP,
              meta: {
                layout: 'Default'
              },
              component: () => import('@/pages/top/IndexPage.vue')
            },
            {
              path: '/template',
              name: ROUTE_NAME.TEMPLATE,
              meta: {
                layout: 'Default'
              },
              component: () => import('@/pages/template/IndexPage.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
