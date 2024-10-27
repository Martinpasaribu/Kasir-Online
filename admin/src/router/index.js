// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Product from '../views/Product.vue';
import Transaction from '../views/Transaction.vue';
import Dashboard from '../views/Dashboard.vue';
import GuestLayout from '../components/GuestLayout.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import { checkSession } from '../store/auth.js';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
      },
      {
        path: 'transaction',
        name: 'transaction',
        component: Transaction,
        meta: { requiresAuth: true }
      },
      {
        path: 'product',
        name: 'product',
        component: Product,
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/guest',
    component: GuestLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
      },
      {
        path: 'register',
        name: 'register',
        component: Register,
      },
      {
        path: 'login',
        name: 'login',
        component: Login,
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

router.beforeEach(async (to, from, next) => {
  console.log('Navigating to:', to.path);
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const isAuthenticated = await checkSession();
    if (!isAuthenticated) {
      next({ name: 'login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
