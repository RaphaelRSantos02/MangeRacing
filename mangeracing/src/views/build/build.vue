<script setup lang="ts">
import MotorCard from "@/components/MotorCard.vue";
import ghostImage from "@/assets/image/ghost.png";
import speedImage from "@/assets/image/speed.png";
import cityImage from "@/assets/image/city.png";

</script>

<template>
    <div id="build-page">
      <h2 class="title">Escolha sua moto</h2>
      <div class="motos flex flex-row justify-content-center gap-3">
        <MotorCard id="ghost" :image="ghostImage" link="/build/ghostrider" name="Ghost Rider"/>
        <MotorCard id="speed" :image="speedImage" link="/build/Speedester" name="Speedester"/>
        <MotorCard id="city" :image="cityImage" link="/build/city" name="City Rider"/>
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
