import { v4 as uuidv4 } from 'uuid';

export interface IBasket {
  id: string;
  items: IBasketItems[];
}
export interface IBasketItems {
  id: number; //productId
  isDelete?: boolean;
  product: string;
  type: string;
  brand: string;
  quantity: number;
  price: number;
  discount: number;
  pictureUrl: string;
}
export class Basket implements IBasket {
  id = uuidv4(); //guid
  items: IBasketItems[] = [];
}
