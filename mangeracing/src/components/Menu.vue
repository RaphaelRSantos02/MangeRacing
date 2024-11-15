<script setup lang="ts">
import { useAuthStore } from "../store/useAuthStore";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

function handleLogout() {
  authStore.logout();
  router.push({ path: '/login' });
}
</script>

<template>
  <header class="menu flex justify-content-between align-items-center p-3">
    <nav class="flex gap-3">
      <img src="../assets/image/logo.png" class="logo">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/build">Montagem</RouterLink>
      <RouterLink to="/sponsor">Patrocinador</RouterLink>
      <RouterLink to="/cart">carrinho</RouterLink>
    </nav>
    <div>
      <button v-if="authStore.isAuthenticated" @click="handleLogout" class="auth-button">
        Logout
      </button>
      <RouterLink v-else to="/login">
        <button class="auth-button">Login</button>
      </RouterLink>
    </div>
  </header>
</template>

<style lang="scss">
.menu {
  background-color: var(--app-primary);
  color: #fff;
  font-size: 19px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  .logo{
    width: 60px;
  }
  nav {
    display: flex;
    gap: 40px;

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  .auth-button {
    background-color: #380f0f;
    color: white;
    width: 135px;
    height: 40px;
    border: none;
    border-radius: 14px;
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color 1s;

    &:hover {
      background-color: #848181;
    }
  }
}
</style>
