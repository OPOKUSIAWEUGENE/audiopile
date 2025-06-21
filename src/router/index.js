import { createRouter, createWebHistory } from 'vue-router';

// Import your views/pages
import Home from '../views/HomePage.vue';
import About from '../views/AboutPage.vue';
import Dashboard from '../views/DashboardPage.vue';
import ProductsPage from '../views/ProductsPage.vue';
import ProductDetail from '../views/ProductDetailPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: false },
  },
  {
    path: '/category/:category',
    name: 'Products',
    component: ProductsPage,
    meta: { requiresAuth: false },
  },
  {
    path: '/product/:slug',
    name: 'ProductDetail',
    component: ProductDetail,
    meta: { requiresAuth: false },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { requiresAuth: false },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundPage.vue'), // Lazy load fallback
  },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(), // or createWebHashHistory()
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
});

export default router;
