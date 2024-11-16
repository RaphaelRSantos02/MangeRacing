<script setup lang="ts">
import MotorCard from "@/components/MotorCard.vue";

</script>

<template>
    <div id="build-page">
      <h2 class="title">Escolha sua moto</h2>
      <div class="motos flex flex-row justify-content-center gap-3">
        <MotorCard id="ghost" image="/src/assets/image/ghost.png" link="/build/ghostrider" name="Ghost Rider"/>
        <MotorCard id="speed" image="/src/assets/image/speed.png" link="/build/Speedester" name="Speedester"/>
        <MotorCard id="city" image="/src/assets/image/city.png" link="/build/city" name="City Rider"/>
      </div>
    </div>
  </template>
  
  <style scoped lang="scss">
  #build-page {
    padding: 40px;
    text-align: center;
  
    .title {
      color: #fff;
      margin-bottom: 20px;
    }
  }
  </style>