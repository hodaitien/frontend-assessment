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
              name: ROUTE_NAME.DEFAULT,
              meta: {
                layout: 'Default'
              },
              component: () => import('@/pages/exercise-1/IndexPage.vue')
            },

            {
              path: '/exercise-1',
              name: ROUTE_NAME.EXERCISE_1,
              meta: {
                layout: 'Default'
              },
              component: () => import('@/pages/exercise-1/IndexPage.vue')
            },

            {
              path: '/exercise-2',
              name: ROUTE_NAME.EXERCISE_2,
              meta: {
                layout: 'Default'
              },
              component: () => import('@/pages/exercise-2/IndexPage.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
