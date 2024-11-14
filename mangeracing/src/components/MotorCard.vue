<script setup lang="ts">
  import { defineProps } from "vue";
  
  const props = defineProps<{
    image: string;
    link: string;
    name: string;
  }>();
  
  </script>

<template>
    <div class="moto-card flex flex-column align-items-center">
      <RouterLink :to="link" class="moto-link flex flex-column align-items-center">
        <img :src="image" class="moto-image"/>
        <h3 class="moto-name">{{ name }}</h3>
      </RouterLink>
    </div>
  </template>
  
  <style scoped lang="scss">
  .moto-card {
    padding: 20px;
    background-color: var(--app-tertiary);
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    max-width: 300px;
  
    &:hover {
      transform: scale(1.05);
    }
  
    .moto-image {
      width: 100%;
      height: 150px;
    }
  
    .moto-name {
      color: #fff;
      font-size: 1.2rem;
      margin-top: 10px;
      text-align: center;
    }
  }

  .moto-link{
    text-decoration: none;
  }
  </style>