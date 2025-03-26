<script setup lang="ts">
import MotorPartSelector from '@/components/MotorPartSelector.vue';
import { reactive } from 'vue';
import { Part, PartsResponse } from '@/models/MotoPart';
import { ItemCart } from '@/models/Cart';
import { useCart } from '@/store/Cart';

import front1 from '@/assets/image/front/ghost/front1.png';
import front2 from '@/assets/image/front/ghost/front2.png';
import front3 from '@/assets/image/front/ghost/front3.png';

import frontWheel1 from '@/assets/image/frontWheel/ghost/frontWheel1.png';
import frontWheel2 from '@/assets/image/frontWheel/ghost/frontWheel2.png';
import frontWheel3 from '@/assets/image/frontWheel/ghost/frontWheel3.png';

import engine1 from '@/assets/image/engine/ghost/engine1.png';
import engine2 from '@/assets/image/engine/ghost/engine2.png';
import engine3 from '@/assets/image/engine/ghost/engine3.png';

import backWheel1 from '@/assets/image/rearWheel/ghost/backWheel1.png';
import backWheel2 from '@/assets/image/rearWheel/ghost/backWheel2.png';
import backWheel3 from '@/assets/image/rearWheel/ghost/backWheel3.png';


const availableParts = {
  front: [
    new Part({ id: 0, src: front1, cost: 100 }),
    new Part({ id: 1, src: front2, cost: 120 }),
    new Part({ id: 2, src: front3, cost: 240 }),
  ],
  frontWheel: [
    new Part({ id: 0, src: frontWheel1, cost: 50 }),
    new Part({ id: 1, src: frontWheel2, cost: 70 }),
    new Part({ id: 2, src: frontWheel3, cost: 90 }),
  ],
  engine: [
    new Part({ id: 0, src: engine1, cost: 200 }),
    new Part({ id: 1, src: engine2, cost: 220 }),
    new Part({ id: 2, src: engine3, cost: 210 }),
  ],
  backWheel: [
    new Part({ id: 0, src: backWheel1, cost: 60 }),
    new Part({ id: 1, src: backWheel2, cost: 80 }),
    new Part({ id: 2, src: backWheel3, cost: 70 }),
  ],
};
const selectedParts = reactive<ItemCart>(new ItemCart());

const addCart = () => {
  selectedParts.updateCost();
  useCart().addCart(selectedParts);
};
</script>

<template>
  <main class="ghostBuild">
    <h1 class="text-center mb-2">Montagem da GhostRider</h1>
    <section class="top-row flex justify-content-around">
      <MotorPartSelector :parts="availableParts.front" position="top" v-model="selectedParts.front" />
    </section>

    <section class="middle-row flex justify-content-center">
      <MotorPartSelector :parts="availableParts.backWheel" position="right" v-model="selectedParts.BackWheel" />
      <MotorPartSelector :parts="availableParts.engine" position="center" v-model="selectedParts.engine" />
      <MotorPartSelector :parts="availableParts.frontWheel" position="left" v-model="selectedParts.frontWheel" />
    </section>

    <div class="flex flex-row align-items-center justify-content-center">
      <button id="add-cart" @click="addCart" class="mt-4 dark-button p-3">
        Adicionar ao Carrinho
      </button>
    </div>
  </main>
</template>

<style scoped lang="scss">
.ghostBuild{
  text-align: center;
  color: white;
}

.dark-button {
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
