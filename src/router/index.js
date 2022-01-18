import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import('../views/Team.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: () => import('../views/Testimonials.vue'),
  },
  {
    path: '/top-shelf',
    name: 'Top Shelf',
    component: () => import('../views/Top-Shelf.vue'),
  },
  {
    path: '/uniqueness-index',
    name: 'Uniqueness Index',
    component: () => import('../views/Uniqueness-Index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
