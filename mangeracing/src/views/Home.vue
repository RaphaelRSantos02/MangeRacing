<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const Build = ()=> router.push('/build');
</script>

<template>
  <main id="home-page" class= "flex justify-content-center align-items-center">
    <div class="home-container">
      <div class="home-title">
        <h1>Bem-vindo à Mange Racing</h1>
        <p>
          Na Mange Racing, levamos a personalização de motocicletas a um novo patamar.<br>
          Nossa startup, impulsionada pela constante evolução da tecnologia, oferece a cada cliente a 
          oportunidade de criar uma moto verdadeiramente única e ideal.<br>
          Combinamos inovação e personalização para proporcionar uma experiência incomparável, onde cada detalhe reflete a visão e o estilo do cliente.
          <br>
          Login:admin
          senha:admin
        </p>
        <button id="models-buttom" class="home-button" @click='Build'>Explore os modelos</button>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
#home-page {
  min-height: 100vh;
  color: white;
  padding: 2rem;
}

.home-container {
  position: relative;
  max-width: 1200px;
  width: 100%;
  text-align: center;
}


.home-title {
  position: relative;
  z-index: 2;
  background-color: var(--app-tertiary);
  padding: 2rem;
  border-radius: 8px;
}

.home-title h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.home-title p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.home-button {
  background-color: var(--app-secondary);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
}
</style>
