<script setup lang="ts">
import MotorPartSelector from '@/components/MotorPartSelector.vue';
import { reactive } from 'vue';
import { Part, PartsResponse } from '@/models/MotoPart';
import { ItemCart } from '@/models/cart';
import { useCart } from '@/store/Cart';

const availableParts = {
  front: [
    new Part({ id: 0, src: "/src/assets/image/front/speed/front1.png", cost: 100 }),
    new Part({ id: 1, src: "/src/assets/image/front/speed/front2.png", cost: 120 }),
    new Part({ id: 2,src: "/src/assets/image/front/speed/front3.png", cost: 240 }),

  ],
  frontWheel: [
    new Part({ id: 0, src: "/src/assets/image/frontWheel/speed/frontWheel1.png", cost: 50 }),
    new Part({ id: 1, src: "/src/assets/image/frontWheel/speed/frontWheel2.png", cost: 70 }),
    new Part({ id: 2,src: "/src/assets/image/frontWheel/speed/frontWheel3.png", cost: 90 }),

  ],
  engine: [
    new Part({ id: 0, src: "/src/assets/image/engine/speed/engine1.png", cost: 200 }),
    new Part({ id: 1,src: "/src/assets/image/engine/speed/engine2.png", cost: 220 }),
    new Part({ id: 2,src: "/src/assets/image/engine/speed/engine3.png", cost: 210 }),
  ],
  backWheel: [
    new Part({ id: 0, src: "/src/assets/image/rearWheel/speed/backWheel1.png", cost: 60 }),
    new Part({ id: 1, src: "/src/assets/image/rearWheel/speed/backWheel2.png", cost: 80 }),
    new Part({ id: 2, src: "/src/assets/image/rearWheel/speed/backWheel3.png", cost: 70 }),

  ],
};

const selectedParts = reactive<ItemCart>(new ItemCart());

const addCart = () => {
  selectedParts.updateCost();
  useCart().addCart(selectedParts);
};
</script>

<template>
  <main class="speedBuild">
    <h1 class="text-center mb-2">Montagem da Speedester</h1>
    <section class="top-row flex justify-content-around">
      <MotorPartSelector :parts="availableParts.front" position="top" v-model="selectedParts.front" />
    </section>

    <section class="middle-row flex justify-content-center">
      <MotorPartSelector :parts="availableParts.backWheel" position="right" v-model="selectedParts.BackWheel" />
      <MotorPartSelector :parts="availableParts.engine" position="center" v-model="selectedParts.engine" />
      <MotorPartSelector :parts="availableParts.frontWheel" position="left" v-model="selectedParts.frontWheel" />
    </section>

    <div class="flex flex-row align-items-center justify-content-center">
      <button @click="addCart" class="mt-4 dark-button p-3">
        Adicionar ao Carrinho
      </button>
    </div>
  </main>
</template>

<style scoped lang="scss">
.speedBuild {
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
