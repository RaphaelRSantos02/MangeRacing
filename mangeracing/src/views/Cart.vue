<script setup lang="ts">
import { useCart } from '@/store/Cart';

const cartStore = useCart();
</script>

<template>
  <main id="cart-page">
    <h1>carrinho</h1>

    <table>
      <thead>
        <th>Item</th>
        <th>Front</th>
        <th>Engine</th>
        <th>Back Wheel</th>
        <th>Front Wheel</th>
        <th>Custo</th>
        <th>Ação</th>
      </thead>
      <tbody>
        <tr v-for="(moto, index) in cartStore.moto" :key="index">
          <td>{{ index + 1 }}</td>
          <td :class="`front-${moto.front.id}`"><img :src= moto.front.src></td>
          <td :class="`engine-${moto.engine.id}`"><img :src= moto.engine.src></td>
          <td :class="`back-wheel-${moto.BackWheel.id}`"><img :src= moto.BackWheel.src></td>
          <td :class="`front-wheel-${moto.frontWheel.id}`"><img :src= moto.frontWheel.src></td>
          <td>R${{ moto.cost }}</td>
          <td><button @click="cartStore.removeCart(index)">
            Excluir
          </button></td>
        </tr>
        <tr>
          <td colspan="5"><strong>Valor Total:</strong></td>
          <td><strong>{{ cartStore.getTotalCost }}</strong></td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style scoped lang="scss">
#cart-page {
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  img {
    max-width: 50px;
    max-height: 50px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;

    thead {
      background-color: #333;
      color: white;

      th {
        padding: 10px;
        text-align: center;
      }
    }

    tbody {
      tr {
        td {
          padding: 10px;
          text-align: center;
          border: 1px solid #ddd;
          color: rgb(255, 255, 255);
        }

        button {
          background-color: #ff5f5f;
          color: white;
          padding: 5px 10px;
          border: none;
          border-radius: 3px;
          cursor: pointer;
          &:hover {
            background-color: #ff3f3f;
          }
        }
      }

      tr:last-child {
        font-weight: bold;
        td {
          text-align: right;
        }
      }
    }
  }
}
</style>