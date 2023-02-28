import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Layout.vue'

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('../views/frontend/About2ndHome.vue')
      },
      {
        path: '/total-kpi',
        component: () => import('../views/frontend/TotalKpi.vue')
      },
      {
        path: '/project-content',
        component: () => import('../views/frontend/ProjectContent.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
