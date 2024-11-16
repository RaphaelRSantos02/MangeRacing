import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'
import Build from '../views/build/build.vue'
import Ghost from '../views/build/GhostRider.vue'
import Speed from '../views/build/Speedester.vue'
import City from '../views/build/City.vue'
import NotFound from '../views/NotFound.vue'
import { useAuthStore } from "../store/useAuthStore"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/',
      name: 'home',
      component: Home,
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
    },
    {
      path: '/build/ghostrider',
      name: 'ghost',
      component: Ghost,
      meta: { requiresAuth: true },
    },
    {
      path: '/build/Speedester',
      name: 'Speed',
      component: Speed,
      meta: { requiresAuth: true },
    },
    {
      path: '/build/city',
      name: 'city',
      component: City,
      meta: { requiresAuth: true },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    },
    
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore(); 
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ path: "/login" });
  } else {
    next();
  }
});

export default router
