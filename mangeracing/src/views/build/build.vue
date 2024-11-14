<script setup lang="ts">
import MotorCard from "@/components/MotorCard.vue";

</script>

<template>
    <div class="build-container">
      <h2 class="title">Escolha sua moto</h2>
      <div class="motos flex flex-row justify-content-center gap-3">
        <MotorCard image="/src/assets/image/ghost.png" link="/build/ghostrider" name="Ghost Rider"/>
        <MotorCard image="/src/assets/image/speed.png" link="/build/Speedester" name="Speedester"/>
        <MotorCard image="/src/assets/image/city.png" link="/build/city" name="City Rider"/>
      </div>
    </div>
  </template>
  
  <style scoped lang="scss">
  .build-container {
    padding: 40px;
    text-align: center;
  
    .title {
      color: #fff;
      margin-bottom: 20px;
    }
  }
  </style>