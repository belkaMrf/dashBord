import { createRouter, createWebHashHistory } from 'vue-router'

import layout from '@/layout'

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: layout,
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'Dashboard',
          component: () => import('@/views/Dashboard.vue'),
        },
      ],
    },
  ],
})

export default router
