import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView')
  },
  {
    path: '/',
    name: '',
    component: () => import('../layout/LayoutIndex'),
    redirect: '/users',
    children: [
      {
        path: 'users',
        name: 'users',
        component: () => import('@/views/UsersView')
      },
      {
        path: 'categories',
        name: 'categories',
        component: () => import('@/views/CategoriesView')
      },
      {
        path: 'goods',
        name: 'goods',
        component: () => import('@/views/GoodsView')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('@/views/OrdersView')
      },
      {
        path: 'params',
        name: 'params',
        component: () => import('@/views/ParamsView')
      },
      {
        path: 'reports',
        name: 'reports',
        component: () => import('@/views/ReportsView')
      },
      {
        path: 'rights',
        name: 'rights',
        component: () => import('@/views/RightsView')
      },
      {
        path: 'roles',
        name: 'roles',
        component: () => import('@/views/RolesView')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
