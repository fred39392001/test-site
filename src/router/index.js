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
        path: '/csr-project',
        component: () => import('../views/frontend/CsrProject.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
