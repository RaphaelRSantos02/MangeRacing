import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Sponsor from '../views/sponsor.vue'
import Cart from '../views/Cart.vue'
import Build from '../views/build/build.vue'
import Ghost from '../views/build/GhostRider.vue'
import Speed from '../views/build/Speedester.vue'
import City from '../views/build/City.vue'


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
    },
    {
      path: '/sponsor',
      name: 'sponsor',
      component: Sponsor,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/build',
      name: 'build',
      component: Build,
    },
    {
      path: '/ghostrider',
      name: 'ghost',
      component: Ghost,
    },
    {
      path: '/Speedester',
      name: 'Speed',
      component: Speed,
    },
    {
      path: '/city',
      name: 'city',
      component: City,
    },
    
  ],
})

export default router
