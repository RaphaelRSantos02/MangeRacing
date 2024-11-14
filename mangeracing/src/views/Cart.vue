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
        <th>Front Wheel</th>
        <th>Engine</th>
        <th>Back Wheel</th>
        <th>Custo</th>
        <th>Ação</th>
      </thead>
      <tbody>
        <tr v-for="(moto, index) in cartStore.moto" :key="index">
          <td>{{ index }}</td>
          <td :class="`front-${moto.front.id}`">{{ moto.front.id }}</td>
          <td :class="`front-wheel-${moto.frontWheel.id}`">{{ moto.frontWheel.id }}</td>
          <td :class="`engine-${moto.engine.id}`">{{ moto.engine.id }}</td>
          <td :class="`back-wheel-${moto.BackWheel.id}`">{{ moto.BackWheel.id }}</td>
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
        &:nth-child(even) {
          background-color: #f2f2f2;
        }

        td {
          padding: 10px;
          text-align: center;
          border: 1px solid #ddd;

          &.head-0, &.torso-0, &.base-0, &.left-0, &.right-0 {
            color: #999;
          }
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
