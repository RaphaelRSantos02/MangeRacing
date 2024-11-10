<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/useAuthStore";

export default defineComponent({
  path: "/login",
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    const userName = ref<string>("");
    const password = ref<string>("");
    const errorMessage = ref<string>("");

    const handleLogin = () => {
      const validuserName = "admin";
      const validPassword = "admin";

      if (userName.value === validuserName && password.value === validPassword) {
        authStore.login(); 
        router.push("/");
      } else {
        errorMessage.value = "Nome do usuario ou senha incorretos.";
      }
    };

    return {
      userName,
      password,
      errorMessage,
      handleLogin,
    };
  },
});
</script>

<template>
  <div class="login-container flex justify-content-center align-items-center">
    <form @submit.prevent="handleLogin" class="form">
      <h2>Login</h2>
      <div class="form-group">
        <label for="userName">Nome do usuário</label>
        <input v-model="userName" type="text" id="userName" placeholder="Digite o nome do usuário" required />
      </div>
      <div class="form-group">
        <label for="password">Senha</label>
        <input v-model="password" type="password" id="password" placeholder="Digite sua senha" required />
      </div>
      <button type="submit">Entrar</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<style scoped lang="scss">
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  width: 400px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: var(--app-tertiary);
  
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
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 16px;
    }
  }

  button {
    width: 100%;
    padding: 12px 0;
    background-color: var(--app-primary );
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #290906;
    }
  }

  .error {
    background-color: #f6bbc0;
    color: #721c24;
    padding: 10px;
    border-radius: 4px;
    font-size: 14px;
    text-align: center;
    margin-top: 10px
  }
}
</style>

  