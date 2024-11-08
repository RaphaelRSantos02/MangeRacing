import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Sponsor from '../views/sponsor.vue'
import Cart from '../views/Cart.vue'
import Build from '../views/build/build.vue'
import Ghost from '../views/build/GhostRider.vue'
import Speed from '../views/build/Speedester.vue'
import City from '../views/build/City.vue'
import { useAuthStore } from "../store/useAuthStore"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: '/sponsor',
      name: 'sponsor',
      component: Sponsor,
      meta: { requiresAuth: true },
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      meta: { requiresAuth: true },
    },
    {
      path: '/build',
      name: 'build',
      component: Build,
      meta: { requiresAuth: true },
    },
    {
      path: '/ghostrider',
      name: 'ghost',
      component: Ghost,
      meta: { requiresAuth: true },
    },
    {
      path: '/Speedester',
      name: 'Speed',
      component: Speed,
      meta: { requiresAuth: true },
    },
    {
      path: '/city',
      name: 'city',
      component: City,
      meta: { requiresAuth: true },
    },
    
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore(); 
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router
