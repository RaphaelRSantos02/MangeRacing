import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref<boolean>(localStorage.getItem("isAuthenticated") === "true");

  const login = () => {
    isAuthenticated.value = true;
    localStorage.setItem("isAuthenticated", "true");
  };

  const logout = () => {
    isAuthenticated.value = false;
    localStorage.removeItem("isAuthenticated");
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
});