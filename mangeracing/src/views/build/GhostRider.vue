<script setup lang="ts">
import MotorPartSelector from '@/components/MotorPartSelector.vue';
import { reactive } from 'vue';
import { Part, PartsResponse } from '@/models/motoPart';
import { ItemCart } from '@/models/cart';
import { useCart } from '@/store/Cart';

const availableParts = {
  front: [
    new Part({ id: 1, src: "/images/ghost/front1.png", cost: 100 }),
    new Part({ id: 2, src: "/images/ghost/front2.png", cost: 120 }),
    new Part({ id: 3,src: "/images/ghost/engine2.png", cost: 240 }),

  ],
  frontWheel: [
    new Part({ id: 4, src: "/images/ghost/frontWheel1.png", cost: 50 }),
    new Part({ id: 5, src: "/images/ghost/frontWheel2.png", cost: 70 }),
    new Part({ id: 6,src: "/images/ghost/engine2.png", cost: 90 }),

  ],
  engine: [
    new Part({ id: 7, src: "/images/ghost/engine1.png", cost: 200 }),
    new Part({ id: 8,src: "/images/ghost/engine2.png", cost: 220 }),
    new Part({ id: 9,src: "/images/ghost/engine2.png", cost: 210 }),
  ],
  backWheel: [
    new Part({ id: 10, src: "/images/ghost/backWheel1.png", cost: 60 }),
    new Part({ id: 11, src: "/images/ghost/backWheel2.png", cost: 80 }),
    new Part({ id: 912, src: "/images/ghost/backWheel2.png", cost: 70 }),

  ],
};

const selectedParts = reactive<ItemCart>(new ItemCart());

const addCart = () => {
  selectedParts.updateCost();
  useCart().addCart(selectedParts);
};
</script>

<template>
  <main id="build-page">
    <h1 class="text-center mb-2">Montagem da Ghost</h1>
    <section class="top-row flex justify-content-around">
      <MotorPartSelector :parts="availableParts.front" position="top" v-model="selectedParts.front" />
    </section>

    <section class="middle-row flex justify-content-center">
      <MotorPartSelector :parts="availableParts.frontWheel" position="left" v-model="selectedParts.frontWheel" />
      <MotorPartSelector :parts="availableParts.engine" position="center" v-model="selectedParts.engine" />
      <MotorPartSelector :parts="availableParts.backWheel" position="right" v-model="selectedParts.BackWheel" />
    </section>

    <div class="flex flex-row align-items-center justify-content-center">
      <button @click="addCart" class="mt-4 app-dark-button p-3">
        Adicionar ao Carrinho
      </button>
    </div>
  </main>
</template>

<style scoped>
#build-page {
  text-align: center;
}

.app-dark-button {
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
