import { defineStore } from 'pinia';
import { Cart, ItemCart } from '@/models/cart';

export const useCart = defineStore("moto-cart", {
    state: (): Cart => ({
        moto: []
    }),
    persist: true,
    actions: {
        addCart(moto: ItemCart) {
            const deepCopy = JSON.parse(JSON.stringify(moto)) as ItemCart;
            this.moto.push(deepCopy);
        },
        removeCart(index: number) {
            if (index <= (this.moto.length - 1)) {
                this.moto.splice(index, 1);
            }
        }
    },
    getters: {
        getTotalCost(): number {
            return this.moto.reduce((total, item) => total + item.cost, 0);
        }
    }
});