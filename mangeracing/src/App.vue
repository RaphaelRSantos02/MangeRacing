<script lang="ts">
import { defineComponent } from "vue";
import { useAuthStore } from "./store/useAuthStore";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "App",
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();

    const logout = () => {
      authStore.logout();
      router.push({ name: "Login" });
    };

    return {
      authStore,
      logout,
    };
  },
});
</script>

<template>
  <div>
    <header v-if="authStore.isAuthenticated">
      <nav>
        <router-link to="/home">Home</router-link>
        <button @click="logout">Logout</button>
      </nav>
    </header>
    <router-view />
  </div>
</template>


<style lang="scss">

</style>
