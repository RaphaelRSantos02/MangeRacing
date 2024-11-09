<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/useAuthStore";

export default defineComponent({
  name: "Login",
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    const email = ref<string>("");
    const password = ref<string>("");
    const errorMessage = ref<string>("");

    const handleLogin = () => {
      const validEmail = "admin@admin.com";
      const validPassword = "admin";

      if (email.value === validEmail && password.value === validPassword) {
        authStore.login(); 
        router.push("/");
      } else {
        errorMessage.value = "Email ou senha incorretos.";
      }
    };

    return {
      email,
      password,
      errorMessage,
      handleLogin,
    };
  },
});
</script>

<template>
    <div class="login-container">
      <form @submit.prevent="handleLogin">
        <h2>Login</h2>
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email" placeholder="Digite seu email" required/>
        </div>
        <div class="form-group">
          <label for="password">Senha</label>
          <input v-model="password" type="password" id="password" placeholder="Digite sua senha" required/>
        </div>
        <button type="submit">Entrar</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
</template>
  

  
  <style scoped lang="scss">
  .login-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  
    h2 {
      text-align: center;
      margin-bottom: 20px;
    }
  
    .form-group {
      margin-bottom: 15px;
  
      label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }
  
      input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }
    }
  
    button {
      width: 100%;
      padding: 10px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
  
      &:hover {
        background-color: #0056b3;
      }
    }
  
    .error {
      color: #d9534f;
      text-align: center;
      margin-top: 15px;
    }
  }
  </style>
  