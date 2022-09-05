import { createRouter, createWebHashHistory } from 'vue-router'

import layout from '@/layout'

const routes = [
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
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
