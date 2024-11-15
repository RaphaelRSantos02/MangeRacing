export enum PartTypes {
    "front", "frontWheel", "engine", "BackWheel"
  }

  export class Part {
    id: number = 0;
    src: string = "";
    type: PartTypes = PartTypes.front;
    cost: number = 0;

    constructor(init?: Partial<Part>) {
      Object.assign(this, init);
    }

}

export class PartsResponse {
  front: Array<Part> = [];
  engine: Array<Part> = [];
  frontWheel: Array<Part> = [];
  BackWheel: Array<Part> = [];
}