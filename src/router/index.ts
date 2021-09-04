import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/page1',
    component: () => import('@/views/page1.vue')
  }, 
  {
    path: '/page2',
    component: () => import('@/views/page2.vue')
  },
  {
    path: '/page3',
    component: () => import('@/views/page3.vue')
  },
  {
    path: '/page4',
    component: () => import('@/views/page4.vue')
  },
  {
    path: '/page5',
    component: () => import('@/views/page5.vue')
  },
  {
    path: '/page6',
    component: () => import('@/views/page6.vue')
  },
  {
    path: '/page7',
    component: () => import('@/views/page7.vue')
  },
  {
    path: '/cagar',
    component: () => import('@/views/cagar.vue')
  },
  {
    path: '/ekowisata',
    component: () => import('@/views/ekowisata.vue')
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      },
      {
        path: 'tababout',
        component: () => import('@/views/TabAbout.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
