import { Part } from "./MotoPart";

export const calcTotalCost = (item:ItemCart) =>{
    return item.front.cost +
           item.frontWheel.cost +
           item.engine.cost +
           item.BackWheel.cost;

}

export class ItemCart {
    front: Part = new Part();
    frontWheel: Part = new Part();
    engine: Part = new Part();
    BackWheel: Part = new Part();
    cost: number = 0;

    constructor(){
        this.updateCost();
    }
    updateCost(){
        this.cost = calcTotalCost(this);
    }
}

export class Cart {
    moto: Array<ItemCart> = [];    
}