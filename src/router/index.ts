import { createRouter, createWebHistory } from 'vue-router';
// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/lby',
      component: () => import('@/views/lby/lby.vue'),
    },
    {
        path: '/zyq',
        component: () => import('@/views/zyq/index.vue'),
      },
    {
      path: '/yjl',
      component: () => import('@/views/yjl/index.vue'),
    },
    {
        path: '/wzy',
        component: () => import('@/views/wzy/index.vue'),
      }
  ]
});

// 导出路由实例
export default router;
