import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: any = [];

  cartUpdated = new EventEmitter<any>();
  constructor() {}

  addToCart(product: any) {
    this.cart.push(product);
    this.cartUpdated.emit(this.cart);
  }

  getCart() {
    return this.cart;
  }
}
