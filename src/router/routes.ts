import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Todo.vue') },
      { path: '/UrunlerSayfası', component: () => import('src/pages/UrunlerSayfası.vue') },
      { path: '/YeniUyelik', component: () => import('src/pages/YeniUyelik.vue') },
      { path: '/GirisYap', component: () => import('src/pages/GirisYap.vue') },
      { path: '/SepetEkrani', component: () => import('src/pages/SepetEkrani.vue') },
      { path: '/anasayfa', component: () => import('src/pages/AnaSayfa.vue') }
    ]
  },
 // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
