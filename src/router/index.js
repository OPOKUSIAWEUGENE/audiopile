import { createRouter, createWebHistory } from 'vue-router';

// Import your views/pages
import Home from '../views/HomePage.vue';
import About from '../views/AboutPage.vue';
import Dashboard from '../views/DashboardPage.vue';
import Headphones from '../views/HeadphonesPage.vue';
import Speakers from '../views/SpeakersPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: false },
  },
  {
    path: '/category/headphones',
    name: 'Headphones',
    component: Headphones,
    meta: { requiresAuth: false },
  },
  {
    path: '/category/speakers',
    name: 'Speakers',
    component: Speakers,
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
});

export default router;
