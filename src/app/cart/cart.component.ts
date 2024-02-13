import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart: any = [];
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();

    this.cartService.cartUpdated.subscribe((res) => {
      this.cart = res;
    });
  }

  getTotalPrice() {
    const obj = { items: 0, price: 0 };
    if (this.cart.length > 0) {
      this.cart.forEach((element: any) => {
        obj.price = obj.price + (element.price - 100);
      });

      return obj;
    } else return obj;
  }

  onBackClick() {
    this.router.navigate(['']);
  }

  cartEmpty() {
    if (this.cart.length == 0) {
      return true;
    } else return false;
  }
}


